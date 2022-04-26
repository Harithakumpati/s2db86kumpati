var House = require('../models/house');
// List of all houses
exports.house_list = async function (req, res) {
    try {
        theHouses = await House.find();
        res.send(theHouses);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific house.
exports.house_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await House.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle House create on POST.
exports.house_create_post = async function (req, res) {
    console.log(req.body)
    let document = new House();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"house_name":"Mustang GT", "house_color":"Lucid Red Pearl", "house_cost":37000}
    document.house_name = req.body.house_name;
    document.house_cost = req.body.house_cost;
    document.house_color = req.body.house_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle house delete form on DELETE.
exports.house_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await House.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle house update form on PUT.
exports.house_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await House.findById(req.params.id)
        // Do updates of properties
        if (req.body.house_name) toUpdate.house_name = req.body.house_name;
        if (req.body.house_cost) toUpdate.house_cost = req.body.house_cost;
        if (req.body.house_color) toUpdate.house_color = req.body.house_color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// List of all Houses
exports.house_list = async function (req, res) {
    try {
        theHouse = await House.find();
        res.send(theHouse);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function (req, res) {
    try {
        theHouses = await House.find();
        res.render('houses', { title: 'House Search Results', results: theHouses });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.house_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await House.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
exports.house_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await House.findById(req.query.id)
        res.render('housedetail',
            { title: 'House Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a house.
// No body, no in path parameter, no query.
// Does not need to be async
exports.house_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('housecreate', { title: 'House Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a house.
// query provides the id
exports.house_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await House.findById(req.query.id)
        res.render('houseupdate', { title: 'House Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.house_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await House.findById(req.query.id)
        res.render('housedelete', {title: 'House Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};