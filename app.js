const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
   const itemNumber = movielists[i].querySelectorAll("img").length;
   let clickcounter=0;
   arrow.addEventListener("click",()=>{
      clickcounter++;
      if(itemNumber - (5+clickcounter)>= 0){
         movielists[i].style.transform =`translateX(${
            movielists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
      }else{
         movielists[i].style.transform = "translateX(0)";
         clickcounter= 0;
      }
      
     

   });

   console.log(Math.floor(window.innerWidth / 270));
});


const ball = document.querySelectorAll(".toggle-ball");
const items = document.querySelectorAll(
   ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"

);
ball.addEventListener("click", ()=>{
   items.forEach(item=>{
      item.classList.toggle("active")
   })
   ball.classList.toggle("active")
})