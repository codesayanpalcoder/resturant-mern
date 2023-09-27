const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
} = require("./../controllers/itemController");

const router = express.Router();

//routes
//Method - get
router.get("/get-item", getItemController);

//MEthod - POST
router.post("/add-item", addItemController);

//method - PUT
router.put("/edit-item", editItemController);

module.exports = router;