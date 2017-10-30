var hfc = require('fabric-client');
var path = require('path');
var sdkUtils = require('fabric-client/lib/utils');
var fs = require('fs');

var options = {
	user_id : 'Admin@org1.example.com',
	msp_id : 'Org1MSP',
	channel_id : 'mychannel',
	chaincode_id : 'mycc',
	network_url : 'grpcs://localhost:7051',
	privateKeyFolder : '/root/golang/src/github.com/hyperledger/fabric/examples/e2e_cli/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/keystore',
	signedCert : '/root/golang/src/github.com/hyperledger/fabric/examples/e2e_cli/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/signcerts/Admin@org1.example.com-cert.pem',
	tls_cacerts : '/root/golang/src/github.com/hyperledger/fabric/examples/e2e_cli/crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt',
	server_hostname : 'peer0.org1.example.com'
};

var channel = {};
var client = null;
var getKeyFilesInDir = function(dir) {
	var files = fs.readdirSync(dir);
	var keyFiles = [];
	files.forEach(function(file_name) {
		var filePath = path.join(dir, file_name);
		if (file_name.endsWith('_sk')) {
			keyFiles.push(filePath);
		}
	});
	
	return keyFiles;
};

Promise.resolve().then(function() {
	console.log('Load privateKey and signedCert');
	client = new hfc();
	var createUserOpt = {
		username : options.user_id,
		mspid : options.msp_id,
		cryptoContent : {
			privateKey : getKeyFilesInDir(options.privateKeyFolder)[0],
			signedCert : options.signedCert
		}
	};

	return sdkUtils.newKeyValueStore({
		path : '/tmp/fabric-client-stateStore/'
	}).then(function(store) {
		client.setStateStore(store);
		return client.createUser(createUserOpt);
	});
}).then(function(user) {
	channel = client.newChannel(options.channel_id);

	var data = fs.readFileSync(options.tls_cacerts);
	var peer = client.newPeer(options.network_url, {
		pem : Buffer.from(data).toString(),
		'ssl-target-name-override' : options.server_hostname
	});

	peer.setName('peer0');
	channel.addPeer(peer);
	return;
}).then(function() {
	console.log('Make query');
	var transaction_id = client.newTransactionID();
	console.log('Assigning transaction_id: ', transaction_id._transaction_id);

	var request = {
		chaincodeId : options.chaincode_id,
		txId : transaction_id,
		fcn : 'query',
		args : ['a']
	};

	return channel.queryByChaincode(request);
}).then(function(query_responses) {
	console.log('returned from query');
	if (!query_responses.length) {
		console.log('No payloads were returned from query');
	} else {
		console.log('Query result count = ', query_responses.length);
	}

	if (query_responses[0] instanceof Error) {
		console.error('error from query = ', query_responses[0]);
	}
	console.log('Response is ', query_responses[0].toString());
}).catch(function(err) {
	console.error('Caught Error', err);
});
