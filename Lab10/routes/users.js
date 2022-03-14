const express = require("express");
const checker = require("../bcrypt_usage");
const session = require('express-session');
const router = express.Router();
const check = require("../bcrypt_usage");
let x = 0;
let y = 0;


// router.get('/login', async (req, res) => {
//     res.redirect('/'); 
// })


router.get('/', async (req, res) => {
    try {
        if (req.session.user) {
            return res.redirect('/private');
        } else {
            return res.render('userpages/login',{title: "Login"});
        }
        
    } catch (e) {
        res.status(403).json({ error: "Wrong username or password" });
    }
})

router.post('/login', async (req, res) => {
    try {

       let userResult = await checker(req.body.username, req.body.password);
        if(!userResult) throw "Not found"
        if (userResult) {
           let result = userResult;
           x = result;
            console.log(result);
            console.log("hiiiiiiiiiiiiiiiiiiiiiiiii")
            //let result = await data.datafunc.searchUser(id);
              req.session.user = result;
             //req.session.AuthCookie = req.session;
             res.redirect('/private');
             //res.status(200).render("userpages/private", {page_title: "Private", result});
        } else {
            return res.status(401).render('userpages/login',{title:"Login", error: "You entered an invalid  username or password"});
            
        }
    } catch (e) {
        res.status(401).render('userpages/login',{ error: "Wrong username or password" });
    }
})

router.get('/private', async (req, res) => {
    try {
     
           return  res.render("userpages/private", {title: "Private", x});
       
     
        // res.send("private")
    } catch (e) {
        res.status(403).json({ error: e.message });
    }
})



router.get('/logout', async (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('AuthCookie');
        return res.render("userpages/logout");
      });
})

module.exports = router;