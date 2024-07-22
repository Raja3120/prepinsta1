//function show(){
//console.log('show function');
//}
//function display(show){
   // console.log("Display function");
    //show()
//}
//document.addEventListener('click,()=>{
//})
addition(5,function,(addres){
subtraction(5,function,(subres){
multiplication(5,function,(mulres){
division(5,function,(divRes){
    console.log(divres)
})
})
})
})

function addition(val,callback){
    return callback(val+5)
}
function subtraction(val,callback){
    return callback(val-5)
}
function multiplication(val,callback){
    return callback(val*5)
}
function division(val,callback){
    return callback(val/5)
}
