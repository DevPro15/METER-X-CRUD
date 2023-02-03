const db = require("../models");
const Bills = db.Bills;
const Op = db.Sequelize.Op;

// Create and Save a new Bill
exports.create = (req, res) => {
  //Validate Request
  if(!req.body.billingDate){
    res.status(400).send({
        message: "Date can't be empty."
    });
    return;
  }

  //Create a Bill Record instance
  const bill = {
    billingDate : req.body.billingDate,
    amount : req.body.amount
  };

  //Save Bill record in Database
  Bills.create(bill).then(data =>{
    res.send(data);
  }).catch(err =>{
    res.status(500).send({
        message:
            err.message || "Some error occured while creating the Bill."
    })
  })
};

// Retrieve all Bills from the database.
exports.findAll = (req, res) => {
  Bills.findAll().then(data =>{
    res.send(data);
  }).catch(err => {
    res.status(500).send({
        message:
            err.message || "Some error ocured while retrieving records"
    });
  });
};

// Find a single Bill with an id
exports.findOne = (req, res) => {
  const id = req.params.id

  Bills.findOne({
    where : { id : id}
  }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
        message:
            err.message || "Error while fetching record with id = " + id
    });
  });
};

// Update a Bill by the id in the request
exports.update = (req, res) => {
  const id = req.params.id
  Bills.update(req.body, {
    where: {id:id}
  }).then(num => {
    if( num == 1){
        res.send({
            message: "Bill updated successfully."
        });
    }
    else{
        res.send({
            message: `Can not update bill with id=${id}. Maybe bill was not found or request body is empty.`
        })
    }
  }).catch(err => {
    res.status(500).send({
        message: "Error while updating record with id = " + id
    });
  });
};

// Delete a Bill with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id
    Bills.destroy({
        where: {
          id: id
        }
      }).then(deletedRecord => {
        if (!deletedRecord) {
          return res.status(404).send({
            message: "Record not found with id " + id
          });
        }
        res.send({
          message: "Record deleted successfully!"
        });
      }).catch(err => {
      res.status(500).send({
          message: "Error while deleting record with id = " + id
      });
    });
};
