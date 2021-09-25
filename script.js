let show = false;

// show/hide dropdown menu
$('.profile').on('click', () => {
  if(show === false) {
    $('.drop-container').show()
    show = true;
  } else {
      $('.drop-container').hide()
      show = false;
  }
});
function todos(){
  $.getJSON('https://jsonplaceholder.typicode.com/todos', function(data) {
          
          var output = "";
  for(var i=0;i<data.length;i++){
      if(data[i].completed==true){
          output+='<li><input type="checkbox" name="heavy"id="sandeep1"   checked disabled>'+'<i class="fas fa-check"></i> ' +`${data[i].title}` +'</li>';
      }
      else{
          output+='<li><input type="checkbox" name="heavy1" id="sandeep" onchange="check()" name="test">'+'<i class="fas fa-user-check"></i>' +`${data[i].title}` +'</li>';
      
      }
  }
                      
     $("#list").html(output);     
          
      });
  }
  function check(){
    var count=document.querySelectorAll('input[id="sandeep"]:checked').length;
    const p1=new Promise((resolve,reject)=>{
        
        if(count===5)
        {
            resolve("congrats you have done five tasks");
        }
        else{
            reject();
        }
    });
    p1.then(function(s){
        alert(s);
    });
} 
function logout(){
  window.open("index.html")
}