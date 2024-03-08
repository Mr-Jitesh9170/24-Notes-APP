const { Router } = require("express")
const { notesGetControllers, notesPostControllers } = require("../controllers/authControllers.js");

const router = Router();


// login routes =>
router.get("/login", notesGetControllers);
router.post("/login", notesPostControllers);


module.exports = router;