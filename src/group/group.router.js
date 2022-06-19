const { Router } = require("express");
const groupControllers = require("./group.controller");

const router = new Router();

router
  .route("/")
  .get(groupControllers.findMany)
  .post(groupControllers.createOne);
router
  .route("/:id")
  .get(groupControllers.findOne)
  .put(groupControllers.updateOne)
  .delete(groupControllers.deleteOne);

module.exports = router;
