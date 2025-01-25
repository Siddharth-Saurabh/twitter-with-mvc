import multer from "multer";
import multerS3 from "multer-s3";
import { AWS_BUCKET_NAME } from "./serverconfing";
import { s3 } from "./awsConfig";

export const s3Uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            if (!file) {
                return cb(new Error('No file found'));
            }
            console.log(file);
            if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
                return cb(new Error('File type not supported'));
            }
            // Generate a unique file key
            const uniqueFileName = `${Date.now()}-${file.originalname}`;
            cb(null, uniqueFileName);
        },
    }),
});
