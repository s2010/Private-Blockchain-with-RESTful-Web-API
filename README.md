# Project #3.Private Blockchain with RESTful Web API
This project will help establish a RESTful version of Web API whereby a client will be able to call REST end points for reading (GETing) and adding (POSTing) new blocks in the blockchain. A framework (levelDB) will enable the permanent storage persistance of block data with all necessary formalities (block hashing, height and chaining previous hash etc.). Project has been coded using Node JS libraries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

1. Download or clone this repo to a local folder on your machine
    - git clone https://github.com/s2010/Private-Blockchain-with-RESTful-Web-API.git
2. Open terminal (MAC/linux) or command prompt (windows variants) on your desktop
3. Run `npm install` to install dependencies from package.json
4. Run `node app.js`
5. Server should listen on port 8000 (make sure this port should remain free to test this)