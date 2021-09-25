function todos() {
    $.getJSON('https://jsonplaceholder.typicode.com/todos', function (data) {

        var output = "";
        for (var i = 0; i < data.length; i++) {
            if (data[i].completed == true) {
                output += '<ul><li><input type="checkbox" name="test" id="sandeep1" checked disabled>' + `${data[i].title}` + '</li></ul>';
               
            }
            else {
                output += '<ul><li><input type="checkbox" id="sandeep" onchange="check()"  name="test">' + `${data[i].title}` + '</li></ul>';
            }
        }
        $("#list").html(output);

    });  
}
function check(){
    var count=document.querySelectorAll('input[id="sandeep"]:checked').length;
    const p1=new Promise((resolve,reject)=>{
        alert(count);
        if(count===5)
        {
            resolve("congrats");
        }
        else{
            reject();
        }
    });
    p1.then(function(s){
        alert(s);
    });
}

    // function check() {
    //     var checked = document.querySelectorAll('input[sandeep]:checked').length;
    //     let p1 = new Promise((resolve, reject) => {
    //         resolve();
    //     });
    //     p1.then(() => {
    //         if(checked==5)
    //         alert("five tasks are successfully completed")
    //     }).catch(() => {
    //         console.log("error");

    //     })

    
// $(document).ready(function(){
//   $("#list").change(function() {
//     var checked = $("#list").checked('input[id="sandeep]:checked').length;
//         let p1 = new Promise((resolve, reject)=>{
//                 resolve();
            
//         });
         
//         p1.then(function(){
//             if(checked==5)
//             alert("five tasks are successfully completed")
//         });

//     });
// });
// }