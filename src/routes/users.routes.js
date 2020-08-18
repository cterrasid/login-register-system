const { Router } = require("express");
const router = Router();

const {
  renderLoginForm,
  renderRegisterForm,
  register,
  login,
  logout,
} = require("../controllers/users.controller");

router.get("/register", renderRegisterForm);
router.get("/register", register);
router.get("/login", renderLoginForm);
router.get("/login", login);
router.get("/logout", logout);
