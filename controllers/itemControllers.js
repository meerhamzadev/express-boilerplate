const { Item } = require('../models/index');

const getItems = async (req, res) => {
  try {
    const totalItems = await Item.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] }
    })
    res.status(200).send(totalItems);
  } catch (err) {
    res.status(500).send(err)
  }
}

const addItem = async (req, res) => {
  const { newTask } = req.body;
  try {
    const createdTask = await Item.create({
      name: newTask
    })
    res.status(200).json({
      created: createdTask,
      message: "Object created successfully"
    });
  }
  catch (err) {
    res.status(500).send(err)
  }
}

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedItem = await Item.update({ id, name }, {
      where: { id }
    })
    if (!updatedItem[0]) {
      return res.status(404).json({
        message: 'Unable to update the item'
      })
    }

    res.status(200).json({
      message: 'Item updated successfully'
    })
  }
  catch (err) {
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteItem = await Item.destroy({
      where: { id }
    });
    if (!deleteItem) {
      return res.status(404).json({
        message: 'Unable to delete the item'
      })
    }

    res.status(200).json({
      message: 'Item deleted successfully'
    })
  }

  catch (err) {
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem
}