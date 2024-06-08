import express from "express";
import { changePassword, forgetpassword, getMyProfile, logOut, login, resetpassword, signup, updatePic, updateProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);

router.post("/new",singleUpload, signup);

router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logOut);


//Updating Routes
router.put("/updateprofile",isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated,singleUpload, updatePic);

//Forget Password and Reset Password Routes
router.route("/forgetpassword").post(forgetpassword).put(resetpassword);


//the route above means the below url
//https://Localhost:5000/api/v1/user/me

export default router;