const express = require('express');
const { get2ConversationUsers } = require('../controllers/conversation');
const {register, login, followUser, logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getAllUsers, getUserProfile, forgotPassword, resetPassword, getMyPosts, getUserPosts, getAllUsersChat } = require('../controllers/user')
const {isAuthenticated} = require('../middlewares/auth')

const router = express.Router();
//dang ki
router.route("/register").post(register);
//dang nhap
router.route("/login").post(login);
//dang xuat
router.route('/logout').get(logout);
//follow
router.route("/follow/:id").get(isAuthenticated, followUser);
//cap nhat mat khat
router.route('/update/password').put(isAuthenticated,updatePassword);
//cap nhat user profile
router.route('/update/profile').put(isAuthenticated,updateProfile);
//xoa tai khoan
router.route('/delete/me').delete(isAuthenticated, deleteMyProfile);
//thong tin chi tiet cua user 
router.route('/me').get(isAuthenticated,myProfile);
//Nhung bai post cua minh da dang
router.route('/my/posts').get(isAuthenticated,getMyPosts);
//Trang ca nhan cua user khac
router.route('/userposts/:id').get(isAuthenticated,getUserPosts);
//lay thong tin chi tiet user 
router.route('/user/:id').get(isAuthenticated, getUserProfile);
//lay tat ca thong tin user profile 
router.route('/users').get(isAuthenticated,getAllUsers);
//fotgot password
router.route('/forgot/password').post(forgotPassword);
//restet password
router.route('/password/reset/:token').put(resetPassword);
//nt
router.route('/chat').get(isAuthenticated, getUserProfile);
router.route('/user/friends/:id').get(isAuthenticated, getAllUsersChat);

module.exports = router;