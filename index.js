function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function success1(){
    alert("Your booking was successful")
  }
  function success2(){
    alert("Your rescheduling was successful")
  }
  function success3(){
    alert("You cancelled successfully")
  }
  
  