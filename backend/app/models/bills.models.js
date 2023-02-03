module.exports = (sequelize, Sequelize) => {
  const Bill = sequelize.define("bill", {
    billingDate: {
      type: Sequelize.DATEONLY,
    },
    amount: {
      type: Sequelize.FLOAT,
    },
  });

  return Bill;
};