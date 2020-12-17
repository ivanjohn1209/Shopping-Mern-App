const express = require('express');
const router = express.Router();

const Item = require('../../model/Item')

// @route GET api/items
// @desc GET all api/items
// @acces public
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
    .catch(err => res.json(err));
})


// @route POST api/items
// @desc CREATE a items
// @acces public
router.post('/', (req, res) => {
   const newItem = new Item({
       name: req.body.name
   })
   newItem.save().then(items => res.json(items))
   .catch(err => res.json(err));
})



// @route DELETE api/items/:id
// @desc DELETE a items
// @acces public
router.delete('/:id', (req, res) => {
 Item.findById(req.params.id)
 .then(item => item.remove().then(() => res.json({success: true})
 )).catch(err => res.status(404).json({success:false}));

})
module.exports = router;