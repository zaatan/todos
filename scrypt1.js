
function user(callback){
    var username = document.getElementById("usern");
    var psw = document.getElementById("psw");
    if (username.value.trim() == "admin" && psw.value.trim() == "12345") {
        callback();
    }
    else{
        alert("user name or password is incorrect")
    }
}
function mainpage(){
    window.open("sandeep.html")
}


// function add(a,b,callback){
//     var sum =a+b;
//     callback(sum,1);
// }
// function sub(sum,c){
//     var result=sum-c;
//     document.write(`kiitti`);
// }
// add(2,3,sub);

// function user(callback) {
//     if (username.value.trim() == "admin" && psw.value.trim() == "12345") {

//         console.log("randumok");
        
//         //  windows.open = "todos.html";
//         return true;
//     } else {
//         console.log("theti");
//         return false;
//     }
//     callback(sum);
// }
// function validate1(sum) {
//     if (sum==true) {
//         console.log("ok");
        
//         window.location.href = "todos.html";
//        return true;

//     } else {
//         console.log("dead");
//         return false;
//     }
//     console.log("success");

// }
// user(validate1);


