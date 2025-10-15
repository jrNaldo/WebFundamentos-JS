(function(){
    if(!String.prototype.replaceAll){
        String.prototype.MyReplaceAll = function(changeWord, standardWord){
            if(!(changeWord instanceof String || typeof changeWord=== "string")) throw Error("First parameter must be a string")
            if(!(standardWord  instanceof String || typeof standardWord === "string")) throw Error("Second parameter must be a string too")
            return this.valueOf().split(changeWord).join(standardWord)
        }
    }

    let p = "lau linto"

    console.log(p.replaceAll("l", "p"))
})();