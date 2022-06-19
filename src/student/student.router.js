const { Router } = require("express");
const studentControllers = require("./student.controller");

const router = new Router();

router
  .route("/")
  .get(studentControllers.findMany)
  .post(studentControllers.createOne);
router
  .route("/:id")
  .get(studentControllers.findOne)
  .put(studentControllers.updateOne)
  .delete(studentControllers.deleteOne);
router.route("/group/:GroupId").get(studentControllers.findByGroupId);

module.exports = router;
