const { Router } = require("express");
const { dashboardControllers, createGetControllers, createPostControllers, getUpdateControllers, putUpdateControllers, deletePageControllers } = require("../controllers/notesContorllers.js")
const router = Router();


// Get dashboard routes =>
router.get("/dashboard", dashboardControllers);

// Get create routes =>
router.get("/create", createGetControllers);
router.post("/create", createPostControllers);


// Get Update routes => 
router.get("/update:id", getUpdateControllers)
router.put("/update:id", putUpdateControllers)


// Delete routes =>
router.delete("/delete:id", deletePageControllers);

// defual exports =>
module.exports = router;