# Project #3.Private Blockchain with RESTful Web API
This project will help establish a RESTful Web API for a private blockchain whereby a client will be able to call REST end points for reading and adding new blocks in the blockchain. A framework (levelDB) will enable the persistance storage of block data with all necessary formalities (block hashing, height and chaining previous hash etc.). Project has been coded using Node.js framework - Express.js.

## Prerequisites

You need to have setup following softwares/frameworks on your machine before running this project:

- crypto-js@3.1.9-1
- body-parser@1.18.3
- express@4.16.4
- level@4.0.0

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

1. Download or clone this repo to a local folder on your machine
    
     `git clone https://github.com/s2010/Private-Blockchain-with-RESTful-Web-API.git`

2. Open terminal (MAC/linux) or command prompt (windows variants) on your desktop and navigate to the project path.
3. Run `npm install` to install dependencies from package.json
4. Run `node app.js`
5. Server should listen on port 8000 (make sure this port should remain free to test this), you should see some lines as following:
 
        Server Listening for port: 8000
        Blockchain DB is empty. Creating new Blockchain with 1 genesis block...
        chain length = 0, return null instead of block
        block saved

## Testing 

 Testing can make use of either '*curl*' which is a command line tool. Or you can go for more sophisticated GUI based tool, such as '*Postman*'.

### GET /block/{blockHeight}

This will allows to read block information through its height.
An example would be:

##### REQUEST

```
curl -X GET \
  http://localhost:8000/block/0 \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
```

##### RESPONSE

```
{
     "hash":"a1f6632ba3367c865c7c7e2328575dd2d5e00fb31c7dc9823ea81cad466fb409","height":0,
     "body":"First block in the chain - Genesis block",
     "time":"1555597244",
     "previousBlockHash":""
}     
```

### POST /block/

POST request will be used to add a new block to the blockchain.
An example would be:

##### REQUEST

```
curl -X POST \
  http://localhost:8000/block/ \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -D '{"data":"Test adding block using POST"}'
```

##### RESPONSE

```
New Block Data :  Test adding block using POST
chain length is 1, return previous block
block saved
```