var express = require('express');
const house_controller = require('../controllers/house');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('houses', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', house_controller.house_view_all_Page );
/* GET detail house page */
router.get('/detail', house_controller.house_view_one_Page);
/* GET create house page */
router.get('/create', house_controller.house_create_Page);
/* GET create update page */
router.get('/update', house_controller.house_update_Page);
/* GET delete house page */
router.get('/delete', house_controller.house_delete_Page);

module.exports = router;
