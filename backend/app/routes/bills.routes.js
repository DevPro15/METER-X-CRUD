module.exports = app => {
    const bills = require('../controllers/bills.controllers.js')

    var router = require("express").Router();


    //Create new Bill Record
    router.post('/',bills.create);

    //Retrieve all Bill Records
    router.get('/',bills.findAll);

    //Retrieve single Bill Record with id
    router.get('/:id', bills.findOne);

    //Update single Bill Record with id
    router.put('/:id', bills.update);

    //Delete single Bill Record with id
    router.delete('/:id', bills.delete);

    app.use('/api/bills', router);
};