const express= require("express");


const router=express.Router();

router.get("/",(req,res,next)=>{
    res.render("screens/main");
});



router.get("/about",(req,res,next)=>{
    res.render("screens/about");
});
router.get("/notice",(req,res,next)=>{
    res.render("screens/notice");
});
router.get("/story",(req,res,next)=>{
    res.render("screens/story");
});

router.get("/order",(req,res,next)=>{
    res.render("screens/order");
});
router.get("/loc",(req,res,next)=>{
    res.render("screens/loc");
});




router.get("/review",(req,res,next)=>{
    res.render("screens/review");
});



router.get("/pet",(req,res,next)=>{
    res.render("screens/pet");
});



router.get("/inquiry",(req,res,next)=>{
    res.render("screens/inquiry");
});



router.get("/center",(req,res,next)=>{
    res.render("screens/center");
});



router.get("/beauty",(req,res,next)=>{
    res.render("screens/beauty");
});


module.exports=router;