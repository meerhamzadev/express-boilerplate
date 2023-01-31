module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define('Item', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {})
  return Item
}