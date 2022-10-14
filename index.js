/**fonte https://www.youtube.com/watch?v=-3ePnBWFH9o */

const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"upload/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname )
    } 

})

const upload = multer({storage});


app.get("/", (req, res) => {
    res.render("index");
})

app.post("/upload", upload.single("file"), (req, res) =>{
    res.send("arquivo recebido!");
} )


app.listen(9000, ()=>{
    console.log("server online");
})