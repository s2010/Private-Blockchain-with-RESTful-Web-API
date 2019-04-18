
const Block = require('./Block.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    // Modified constructor to mimic only acted based on what has been exposed by BlockChain Service
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
    }

    /**
       Rubric Point 3-A Configure End Point - GET
     * Implement a wrapper to GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex(req, res) {
      let idx = req.params.blockIndex;
      console.log('index is:   ' + idx);
      let blockheight_prom = this.blockchainService.getBlock(idx);
      blockheight_prom.then(block => {
        res.send(block);
      }).catch(err => {
        return res.status(500).send("Invalid Block: This Block Number is not present in the chain");   // bad request with error code
      });
    }

    /**
       Rubric Point 3-B Configure End Point - POST
     * Implement a wrapper to POST Endpoint Service to add a new Block, url: "/api/block"
     */
}

module.exports = BlockController
