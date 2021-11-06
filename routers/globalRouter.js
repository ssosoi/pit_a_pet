const express= require("express");
const db=require("../db/reviewdb");

const router=express.Router();

router.get("/",(req,res,next)=>{
    res.render("screens/main");
});

router.get("/review",async(req,res,next)=>{
    let result1=null;
    let result2=null;

    const query1=`
    SELECT COUNT(id)   AS count,
		    AVG(score)  AS avg
    FROM reviews`;

    const query2=`
    SELECT id,
        score,
        content
    FROM reviews
    ORDER BY id DESC`;

    try {
         db.query(query1,(error,result)=>{
            if(error) {
                return console.error(error);
            }
            result1=result;
            db.query(query2,(error,result)=>{
            if(error) {
                return console.error(error);
            };
            result2=result;


            res.render("screens/review",{
                result1:result1[0],
                result2:result2
            });
        });
        
    });
 } catch (error) {
        console.error(error);
        
    }

});

router.post("/reviewCreate",(req,res)=>{
 
    const insertQuery=`
        INSERT INTO reviews (
            score,
            content

        )VALUES(
            ${req.body.score},
            "${req.body.content}"

        )
    `;
    try {
        db.query(insertQuery,(error,result)=>{
            if(error) {
                console.error(error);
            }

            res.redirect("/review");
        });
        
    } catch (error) {
        console.error(error);
        res.redirect("/review");
        
    }
});

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

router.get("/center",(req,res,next)=>{
    res.render("screens/center");
});
router.get("/write",(req,res,next)=>{
    res.render("screens/write");
});

module.exports=router;