const {Router} = require("express");
const router = Router();
const multer = require("multer")
const path = require("path")
const {index,show,create,update,destroy} = require("../controllers/products");

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.resolve(__dirname, '../public/uploads'))},
    filename:  function (req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extName(file.path))
    }
});

const upload = multer({storage: storage})

router.get('/', index);
router.get("/:id", show);
router.post("/", upload.single('thumbnail'),create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;