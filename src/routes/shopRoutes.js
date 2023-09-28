const express = require('express');
const router = express.Router();


router.get('/shop/item', (req, res) => {
    const query = req.query;

    res.send(query);
  
});

router.get('/shop', (req, res) => res.send('Ruta del shop'));
router.get('/shop/item/:id', (req, res) => {
    const id = req.params.id;

    res.send(id);

});


module.exports = router;