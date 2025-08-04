let typeConsole = (a)=>{
    if(a == "warn"){
        console.warn("đây là type warn");
    }else if(a == "error"){
        console.error("đây là type error");
    }else if(a == "log"){
        console.log("đây là type log");
    }
}


typeConsole("warn");
typeConsole("error");
typeConsole("log");