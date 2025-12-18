const express = require("express")
const postController = require("../controller/postController")
const uploadImage = require("../middleware/uploadImage")

const router = express.Router()

router.post("/create/post", uploadImage.single("img"), postController.createPost)
router.get("/read/post", postController.readData)
router.get("/read/SinglePost/:id", postController.readSingleData)
router.put("/uodate/post/:id", uploadImage.single("img"), postController.updateData)
router.get("/search/post/:key", postController.searchData)
router.delete("/delete/post/:id", postController.deleteData)

module.exports = router