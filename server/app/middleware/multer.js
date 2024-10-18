const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuration du stockage des fichiers avec Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;

    // Logique pour décider du chemin de destination en fonction du type ou du champ
    if (file.fieldname.includes('video_image')) {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'images', 'workshop');
    } else if (file.fieldname === 'image') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'images', 'workshop');
    } else if (file.fieldname === 'workshop_image') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'images', 'workshop');
    } else if (file.fieldname === 'avatar') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'images', 'avatar');
    }else if (file.mimetype === 'application/pdf') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'files', 'pdfs');
    } else if (file.mimetype === 'application/x-zip-compressed') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'files', 'zips');
    } else if (file.mimetype === 'application/zip') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'files', 'zips');      
    } else if (file.fieldname === 'blog_image') {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'images', 'blog');
    } else {
      uploadPath = path.join(__dirname, '..', '..', 'public', 'assets');
    }

    // Crée le répertoire s'il n'existe pas
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage }).fields([
  { name: 'video_image', maxCount: 1 },
  { name: 'transcript_pdf', maxCount: 1 },
  { name: 'file_zip', maxCount: 1 },
  { name: 'image', maxCount: 1 },
  { name: 'workshop_image', maxCount: 1 },
  { name: 'avatar', maxCount: 1 },
  { name: 'blog_image', maxCount: 1 },
  { name: 'sections[0][video_image]', maxCount: 1 },
  { name: 'sections[1][video_image]', maxCount: 1 },
  { name: 'sections[2][video_image]', maxCount: 1 },
  { name: 'sections[3][video_image]', maxCount: 1 },
  { name: 'sections[4][video_image]', maxCount: 1 }
]);

module.exports = upload;
