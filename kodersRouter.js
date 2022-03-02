const express = require("express");
const router = express.Router();

router.use((request, response, next) => {
  console.log("Middleware a nivel de router /koders");
  next();
});
router.get("/koders", (request, response) => {
  response.json({
    message: "Todos mis koders",
  });
});
router.post("/koders", (request, response) => {
  response.json({
    message: "Koder creado",
  });
});

module.exports = router;
