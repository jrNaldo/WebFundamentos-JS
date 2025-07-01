// function init(){
    // let isValid = flase
    // console.log("init menu", isValid)
// }
// init()

(function(n1,n2,n3,win,doc){
    "use strict"
    let isValid = false
    console.log("menu", isValid)
    console.table(n1,n2,n3)
    win.alert("oi")
    function init(){
        console.log("init do menu")
    }
    init()
})(10,20,30, window, document)