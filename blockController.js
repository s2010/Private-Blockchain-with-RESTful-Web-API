
const Block = require('./block.js');

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
    postNewBlock(req, res) {
      let bodydata = req.body.data;
      console.log('New Block Data :   ' + bodydata);
      if (bodydata === undefined || bodydata === null || bodydata === '') {
        let err_obj = new Error(`Missing Block Data: Missing 'data' key in POST Request`);
        res.status(500).json({error: err_obj.message});
      }
      else {
        let newblock_issue = this.blockchainService.addBlock(new Block(bodydata));
        newblock_issue.then(block =>  {
          res.send(block);
        }).catch(err => {
          return res.status(500).send(err);   // bad request with error code
        });
      }
    }
}

module.exports = BlockController
