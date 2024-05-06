const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })

const uploadImage =  upload.single('image') (req, res, next) => {
 
  console.log(req.file, req.body)
};

module.exports = 