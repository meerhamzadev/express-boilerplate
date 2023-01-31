const express = require('express');
const itemRouter = express.Router();
const { getItems, addItem, updateItem, deleteItem } = require('../controllers/itemControllers');

itemRouter
  .get('/', getItems)
  .post('/addtask', addItem)
  .put('/updateTask/:id', updateItem)
  .delete('/deleteTask/:id', deleteItem);

module.exports = itemRouter;