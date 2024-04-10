const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/", authController.signupController);
router.put("/:id", authController.profileController);
router.put("/option/:id", authController.optionController);
router.get("/profile/:id", authController.getProfileController);
router.post("/confirmationMail", authController.confirmationMailController)

module.exports = router;
