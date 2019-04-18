
const Block = require('./block.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
    }

    /**
       End Point - GET
     */
    getBlockByIndex(req, res) {
      let idx = req.params.index;
      console.log('index is:  ' + idx);
      let blockheight_issue = this.blockchainService.getBlock(idx);
      blockheight_issue.then(block => {
        res.send(block);
      }).catch(err => {
        return res.status(500).send("Invalid Block: This Block Number is not present in the chain");   // bad request with error code
      });
    }

    /**
       End Point - POST
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
