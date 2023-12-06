import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath}from "url";
import {dirname} from "path";
const __dirname=dirname(fileURLToPath(import.meta.url));
const port=4070;
let data;
const app=express();
const info=
'[{"id":"one","type":"dog","name":"TEEN","characterstics":{"looks":{"color":"Black in color with yellow straps","quality":"well-mannered","capcity":"smart or sharp memory."},"About_Them":{"gender":"Male","weight":"4kg","age":"2 month old","breed":"Stray Dogs","sibling":"4 siblings"},"needs":{"food":"2-3 bowl of milk","vacination":"Not Vaccinated Yet"},"foradoption":{"contact":["9911124378"],"location":"Sabzi Mandi","quantity":"Near Molar-Band Market","contact_time":"free for 24/7"}}},{"id":"two","type":"dog","name":"CHINKI","characterstics":{"looks":{"color":"yellow in color with white mouth","quality":"well-mannered","capcity":"smart or sharp memory."},"About_Them":{"gender":"FEMALE","weight":"3.5kg","age":"2 month old","breed":"Stray Dogs","sibling":"4 siblings"},"needs":{"food":"2-3 bowl of milk","vacination":"Not Vaccinated Yet"},"foradoption":{"contact":"9911124378","location":"Sabzi Mandi","quantity":"Near Molar-Band Market","contact_time":"free for 24/7"}}},{"id":"three","type":"dog","name":"TITAN","characterstics":{"looks":{"color":"pale yellow in color with black cute mouth","quality":"cute & clumsy","capcity":"active or quite at the same time."},"About_Them":{"gender":"MALE","weight":"2.5kg","age":"2 month old","breed":"Stray Dogs","sibling":"4 siblings"},"needs":{"food":"2 bowl of milk","vacination":"Not Vaccinated Yet"},"foradoption":{"contact":"9911124378","location":"Sabzi Mandi","quantity":"Near Molar-Band Market","contact_time":"free for 24/7"}}},{"id":"four","type":"dog","name":"GO","characterstics":{"looks":{"color":"Black in color with Brownish straps","quality":"quite & understanding","capcity":"calm or pure hearted."},"About_Them":{"gender":"MALE","weight":"3kg","age":"2 month old","breed":"Stray Dogs","sibling":"4 siblings"},"needs":{"food":"2 bowl of milk","vacination":"Not Vaccinated Yet"},"foradoption":{"contact":"9911124378","location":"Sabzi Mandi","quantity":"Near Molar-Band Market","contact_time":"free for 24/7"}}}]';

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
res.render(__dirname+"/views/index.ejs");
});
app.post("/submit",(req,res)=>{
    res.render(__dirname+"/views/index.ejs" ,{jankari:data});
    switch (req.body["choice"]) {
        case "teen":
            data=JSON.parse(info)[0];
            break;
            case "chinki":
                data=JSON.parse(info)[1];
                break;
                case "titan":
                    data=JSON.parse(info)[2];
                    break;
                    case "go":
                        data=JSON.parse(info)[3];
                        break;
                            
        default:
            break;
    }
   res.redirect("/");
});

app.get("/teen",(req,res)=>{
    res.render(__dirname+"/views/teen.ejs")});
    
    app.get("/chinki",(req,res)=>{
    res.render(__dirname+"/views/chinki.ejs")});
    
    app.get("/titan",(req,res)=>{
    res.render(__dirname+"/views/titan.ejs")});
    
    app.get("/go",(req,res)=>{
    res.render(__dirname+"/views/go.ejs")});
    

app.listen(port,()=>{
    console.log("serving on port = "+port);
    console.log("kyu ni chlra bhyii");
  
});