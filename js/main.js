$("#additem").on("click",function(){
        var item = $("#val").val();
        if(item!=''){
          $("#container").append(" <input id='"+item+"' class='animated slideInUp gape' type='checkbox' ><label class='animated slideInUp form-element gape' for='"+item+"'>"+item+"<br></label>");
          $("#val").val("");  

          $("#"+item).on("click",function(){
             $("#"+item).remove();
             $("label[for='"+item+"']").remove(); 
          });  
        }else{
          alert("please name the todo item first");
        }
        
      });
     