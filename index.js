// const bar = document.querySelector(".fa-bars");
// const list = document.querySelector(".nav-list");


// bar.addEventListener("click",()=>{
//    list.classList.toggle("show-menu");
// });

// const devloperEl = document.querySelector(".devloper");
// const careers = ["Web Devloper","Freelancer","JS devloper"];
// let careerIndex=0;
// let characterIndex=0;
// updateText();

// function updateText(){
//    characterIndex++
//    devloperEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "I"? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;

//    if(characterIndex === careers[careerIndex].length){
//       careerIndex++
//       characterIndex=0
//    }
//    if(careerIndex=== careers.length){
//       careerIndex = 0 ;
//    }
//    setTimeout(updateText,200);
// }

// carousal skills-section
// let sider = tns({
//    container : ".skill-block",
//    "slideBy" : 1,
//    "speed" : 400,
//    "nav" :false,
//    controlsContainer: "#controls",
//    prevButton : ".previous",
//    nextButton : ".next",
//    responsive:{
//        1600:{
//            items :4,
//            gutter: 20,
//        },
//        1024:{
//            items : 3,
//            gutter : 20,
//        },
//        768: { 
//            items : 2,
//            gutter : 20,
//        },
//        480 : {
//            items : 1,
//            gutter : 20,
//        }
//    }
// })
