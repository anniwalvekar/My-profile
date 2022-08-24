const bar = document.querySelector(".fa-bars");
const list = document.querySelector(".nav-list");


bar.addEventListener("click",()=>{
   list.classList.toggle("show-menu");
});

const devloperEl = document.querySelector(".devloper");
const careers = ["Web Devloper","Freelancer","JS devloper"];
let careerIndex=0;
let characterIndex=0;
updateText();

function updateText(){
   characterIndex++
   devloperEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "I"? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;

   if(characterIndex === careers[careerIndex].length){
      careerIndex++
      characterIndex=0
   }
   if(careerIndex=== careers.length){
      careerIndex = 0 ;
   }
   setTimeout(updateText,200);
}
