var Data = [];
if(d = $.parseJSON(localStorage.myData));
if(d.length!=0){
  for(i=0;i<d.length;i++){
    $("#container").append(" <input id='"+d[i]+"' class='animated slideInUp gape' type='checkbox' ><label class='animated slideInUp form-element gape' for='"+d[i]+"'>"+d[i]+"<br></label>");
    $("#"+d[i]).on("click",function(){  
       remove(this);
    });

  }  
}
function remove(a){
  $(a).remove();
  $("label[for='"+a.getAttribute('id')+"']").remove(); 
  x=Data.indexOf(a.getAttribute('id'));
  Data.splice(x,1);
  save();
  console.log(Data);
  console.log(localStorage.myData);
}
function save(){
  localStorage.myData = JSON.stringify(Data);
}
$("#additem").on("click",function(){
  var item = $("#val").val();
  Data.push(item);
  RenderJSON(item);
  save();
  function RenderJSON(data){
    if(data!=''){
      $("#container").append("<div> <input id='"+data+"' class='animated slideInUp gape' type='checkbox' ><label class='animated slideInUp form-element gape' for='"+data+"'>"+data+"<br></label></div>");
      $("#val").val("");  

      $("#"+data).on("click",function(){
         remove(this);
      });  
    }else{
      alert("please name the todo item first");
    }
    
  }    
});
     