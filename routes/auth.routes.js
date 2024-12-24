const {
  adminRegister,
  adminLogout,
  adminLogin,
  employeeRegister,
  employeeLogin,
  employeeLogout,
} = require("../controllers/auth.controller");
const { adminProtected } = require("../middelware/protected.middelware");
const router = require("express").Router();

router
  .post("/admin/register", adminRegister)
  .post("/admin/login", adminLogin)
  .post("/admin/logout", adminLogout)

  .post("/employee/register",adminProtected, employeeRegister)
  .post("/employee/login", employeeLogin)
  .post("/employee/logout", employeeLogout)

module.exports = router  
