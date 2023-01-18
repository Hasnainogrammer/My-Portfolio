// let hasimage = document.querySelector("#tasweek");

// hasimage.addEventListener("click", shaat);
// function shaat() {
//     hasimage.classList.toggle("bhoola");
// }



// hasimage.addEventListener("click", shaat);
// function shaat(){
//     hasimage.style.border = "3px solid green";
// };


// function toggleImage(){
//     var imgsrc = document.getElementsByClassName("tasweek").src;
//     if(imgsrc.indexOf("/Images/Snapchat-35543784.jpg")!= -1){
//         document.getElementsByClassName("tasweek").src = "/Images/Snapchat-1620718686.jpg";
//     }
//     else{
//         document.getElementsByClassName("tasweek").src = "/Images/Snapchat-1620718686.jpg";
//     }
// }




// var imageElement = document.getElementById('tasweek');

//   function changeImage() {
//     imageElement.src = "/Images/Snapchat-1620718686.jpg";
//   }

//   imageElement.addEventListener('click', changeImage);



function toggleImage() {
    var image = document.getElementById("tasweek");
    if (image.src.match("/Images/Snapchat-35543784.jpg")) {
      image.src = "/Images/Snapchat-1620718686.jpg";
    } else {
      image.src = "/Images/Snapchat-35543784.jpg";
    }
  }


document.querySelector(".cross").style.display = 'none';
document.querySelector("#hamburger").addEventListener("click", ()=>{
      document.querySelector("#side-bar").classList.toggle("sidebargo");
      // document.querySelector("#sh").classList.toggle("sidebargo");

      if(document.querySelector("#side-bar").classList.contains("sidebargo")){

        document.querySelector(".ham").style.display = 'inline';
        document.querySelector(".cross").style.display = 'none';
      }
      else{
        document.querySelector(".cross").style.display = 'inline';
        document.querySelector(".ham").style.display = 'none';
}






    } 
    )
