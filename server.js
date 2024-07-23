const { log } = require("console");
const http = require("http");
const f =require("fs");

http.createServer((rq,res)=>{
    if(rq.url !="/favicon.ico"){
        let arr= rq.url.split("/");
       
        if(arr.length<4){
            throw "ERROR: arguments less than expected";
        }

        switch (arr[1]) {
            case "add":
                //http://localhost:8000/add/5/4
                let sum=0;
                if(arr.length>4){
                    for(var i=2;i<arr.length;i++){
                      //  console.log(arr.length);
                        sum+=Number(arr[i]);
                    }
                    f.writeFile("result.txt","Sum of elem is : "+sum,()=>{});
                }else{
                    sum = Number(arr[2])+ Number(arr[3]);
                    f.writeFile("result.txt","Sum of elem is : "+sum,()=>{});
                }
                res.write("Sum of elem is : "+sum);
                break;
            case "sub":
                //http://localhost:8000/sub/5/4
                let sub=Number(arr[2]);
                if(arr.length>4){
                    for(var i=3;i<arr.length;i++){
                        sub-=Number(arr[i]);
                    }
                    f.writeFile("result.txt","Sub of elem is : "+sub,()=>{});
                }else{
                    sub = Number(arr[2])- Number(arr[3]);
                    f.writeFile("result.txt","Sub of elem is : "+sub,()=>{});
                }
                res.write("Sub of elem is : "+sub);
                break;
            case "multi":
                //http://localhost:8000/multi/5/4
                let multi=1;
                if(arr.length>4){
                    for(var i=2;i<arr.length;i++){
                        multi*=Number(arr[i]);
                    }
                    f.writeFile("result.txt","multi of elem is : "+multi,()=>{});
                }else{
                    multi = Number(arr[2])* Number(arr[3]);
                    f.writeFile("result.txt","multi of elem is : "+multi,()=>{});
                }
                res.write("multi of elem is : "+multi);
                break;
            case "div":
                //http://localhost:8000/div/20/4
                let div=Number(arr[2]);
                if(arr.length>4){
                    for(var i=3;i<arr.length;i++){
                        div/=Number(arr[i]);
                    }
                    f.writeFile("result.txt","Div of elem is : "+div,()=>{});
                }else{
                    div = Number(arr[2])/ Number(arr[3]);
                    f.writeFile("result.txt","Div of elem is : "+div,()=>{});
                }
                res.write("Div of elem is : "+div);
                break;
            default:
                console.log("unexpected operation");
                break;
        }
    }
    res.end();
}).listen(8000);