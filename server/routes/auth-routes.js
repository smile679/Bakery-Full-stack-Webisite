const express = require("express");
const {
  registerController,
  loginController,
  authMiddleware,
  logoutController,
} = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/checkout", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = router;