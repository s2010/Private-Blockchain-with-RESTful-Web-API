// Importing Express.js module
const express = require('express');
const bodyParser = require('body-parser');
// Importing Blockchain class (aka simpleChain.js in Project2)
const BlockchainService = require('./blockchain.js');
// Importing Blockchain service
const BlockController = require('./blockController.js');
// Importing BlockchainData class to be used as wrapper for writing on level DB
const BlockchainData = require('./blockchainData.js');

// initialize express app
const app = express();
const port = 8000;


// Insantiating classes - Creating NVC patterns for chaining
let blockchainData = new BlockchainData("./chaindata");
let blockchainService = new BlockchainService(blockchainData);
let blockController = new BlockController(blockchainService);

// setting the port
app.set("port", port);

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/block/:blockIndex', blockController.getBlockByIndex.bind(blockController));
app.post('/block', blockController.postNewBlock.bind(blockController));

// 2nd Rubric Point: API Service Port Configuration - use port 8000 with localhost URL
app.listen(app.get("port"), () => {
	console.log(`Server Listening for port: ${app.get("port")}`);
});
