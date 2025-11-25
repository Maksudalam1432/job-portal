import multer from "multer";

const storage = multer.memoryStorage();

const Singleupload = multer({ storage }).any();

export default Singleupload;
