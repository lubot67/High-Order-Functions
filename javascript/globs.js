//define functions and global variables here...
var siteloc = "http://localhost/High-Order-Functions";
var scriptloc = "/scripts/"

 
function square()
{
  $.ajax({
      url: siteloc + scriptloc + "square.py",
      data: {value:$("#value").val(),
             },
      success: function (res) { 
	              $("p").html("<br>");
                  $("p").append(res); 
                 
                  
       }  
    });
}

function cube()
{
  $.ajax({
      url: siteloc + scriptloc + "cube.py",
      data: {value:$("#value").val(),
             }, 
      success: function (res) {
				  
	              $("p").html("<br>");
                  $("p").append(res); 

       } 
    });
}
  