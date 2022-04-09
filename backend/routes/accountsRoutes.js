const express = require("express");
const router = express.Router();
const {addAccount,updateAccount,getAccounts,loginAccount,getPositions,getAllLoginAccounts} = require("../controllers/accountsController");
const {
    requireSignin,
    authMiddleware,
} = require("../controllers/authControllers");

router.post('/addAccount', requireSignin, authMiddleware, addAccount);
router.post('/updateAccount/:id',  updateAccount);
router.get('/getAllAccounts/:id', requireSignin, authMiddleware, getAccounts);
router.get('/getAllLoginAccounts',  getAllLoginAccounts);
router.get('/loginAccount/:id', requireSignin, authMiddleware, loginAccount);
router.get('/getPositions/:id', requireSignin, authMiddleware, getPositions);

module.exports = router;
