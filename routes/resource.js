var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var house_controller = require('../controllers/house');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

/// house ROUTES ///
// POST request for creating a house.
router.post('/houses', house_controller.house_create_post);
// DELETE request to delete house.
router.delete('/houses/:id', house_controller.house_delete);
// PUT request to update house.
router.put('/houses/:id', house_controller.house_update_put);
// GET request for one house.
router.get('/houses/:id', house_controller.house_detail);
// GET request for list of all house items.
router.get('/houses', house_controller.house_list);
module.exports = router;
