const http=require("http");
const fs = require("fs");

let indexHTML ="";

fs.readFile("../clientSide/Views/index.html","utf-8",
(error,data)=>{
if(error){
    throw error;
}else{
    indexHTML=data;
}
});

let style ="";

fs.readFile("../clientSide/Style/myStyle.css","utf-8",
(error,data)=>{
if(error){
    throw error;
}else{
    style=data;
}
});

let icon ="";

fs.readFile("../clientSide/Icons/like_icon.ico",
(error,data)=>{
if(error){
    throw error;
}else{
    icon=data;
}
});



http.createServer((req,res)=>{
if(req.method == "GET"){
switch (req.url) {
    case "/":
    case "/index.html":
    case "/Views/index.html":    
    case "/clientSide/Views/index.html":
          res.write(indexHTML);
        break;
    case "/myStyle.css":
    case "/Style/myStyle.css":    
    case "/clientSide/Style/myStyle.css":
        res.write(style);
        break;
    case "like_icon.ico":
    case "/Icons/like_icon.ico":    
    case "/clientSide/Icons/like_icon.ico":
        res.write(icon);    
        break;
    default:
        res.write("Unavailable URL!!");
        break;
}
res.end();
}else if(req.method =="POST"){

}else if(req.method == "PUT"){

}else if(req.method == "DELETE"){

}else if(req.method =="PATCH"){

}
}).listen(9000);