// // Post 
// -JSON bodyparser
// -Raw
// -text
// -URLcoded data



const express =require("express");//require allows us to use any function attached to it
const bodyparser=require("body-parser");//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
const app = express();//express is a web app framework
app.use(bodyparser.urlencoded({extended:false}))

app.use(express.static("static"));

app.set("view engine","ejs");
app.get("/",function(req,res,next){
	res.send("hey! this is my first node server")
});

app.get("/first",function(req,res,next){
	res.send("hey! ")
});

app.get("/second",function(req,res,next){
	if(req.query.greeting==1)
		res.send("Second route");
	else
		res.send("bye");
		
	//res.send("hey! this is my first node")
});

app.get("/third", function(req, res, next) {
    if(req.query.q == "node") {
        res.render("test1",
            {
                title: "Node JS",
                topic:"Node EJS Template Engine",
                status:1,
                fruits: ["apple","mango","banana"],
                error:{code:0,msg:"no error"}
            });
    } else if (req.query.q == "python") {
        res.render("test1",
            {
                title: "Python",
                topic:"Introduction to Python",
                status:2,
                fruits: ["A","B","C"],
                error:{code:0,msg:"not started"}
                
            });
    } else {
        res.render("test1",
            {
                title: "No Title",
                topic:"No topic",
                status:0,
                fruits: [],
                error:{code:0,msg:"topic not found"}

            });
    }
 
});


app.post("/query",function(req,res,next){
	//res.send("checker"+JSON.stringify(req.body));
	if(!req.body.username){
		res.send("no username");
		return;
	}
	if(!req.body.password){
		res.send("no password");
		return;
	}
	res.send("yur usrnem is "+req.body.username+"yur password is "+req.body.password);
});
app.get("/random",function(req,res,next){
	res.send(""+Math.floor(Math.random()*100000));
});
app.post("/randompost",function(req,res,next){
	res.send(""+Math.floor(Math.random()*100000));
});


app.listen(3000);