const  questionContainer = document.querySelector('.click-event')
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener('click' , () => {
    questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener("click" , () => {
    response.classList.add("show-response");
  response.style.background ="green";
})
btn2.addEventListener("click" , () => {
  response.classList.add("show-response");
  response.style.background ="red";
})
//------------------mouse event-------------------
const mousemove = document.querySelector('.mousemove');
window.addEventListener("mousemove", (e)=> {
  mousemove.style.left= e.pageX +"px";
  mousemove.style.top= e.pageY +"px";
});
//---------------mouse down-----------------------
window.addEventListener('mousedown', () =>{
  mousemove.style.transform= "scale(2)translate(-25%,-25%)";
  
})
window.addEventListener('mouseup', () =>{
  mousemove.style.transform= "scale(1)translate(-50%,-50%)";
  mousemove.style.border =("2px solid teal");
})
//-------------------mouseenter-------------------
questionContainer.addEventListener('mouseenter',  () => {
  questionContainer.style.background ='rgba(0, 0, 0, 0.6)'
});

questionContainer.addEventListener('mouseout' , () => {
  questionContainer.style.paddingBottom = "30px";
  questionContainer.style.background = "darkblue";

});
response.addEventListener('mouseover' , () => {
  response.style.transform = "rotate(5deg)";
});
//-------------------------------------------------m-----
//------------------------keypress----------------------
const keypressContainer = document.querySelector(".keypress");
const key = document.querySelector("#key");

document.addEventListener("keypress", (e) => {
key.textContent = e.key;
if(e.key ==="a"){
  keypressContainer.style.background ="teal";
}else if(e.key==="g"){
  keypressContainer.style.background = "blue";
}else if(e.key==="m"){
 keypressContainer.classList.add("styleKeypressContainer");
}else{keypressContainer.style.background = "red"}
});
keypressContainer.addEventListener('mouseover' , () =>{
  keypressContainer.style.borderRadius="20px";
  keypressContainer.style.border ="solid 5px green";
  keypressContainer.style.background ="rgba(0, 0, 0, 0.6)"
});
//-------------------------------------------------------------
//---------------scroll event---------------------------------
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if(window.scrollY > 120) {
    nav.style.top = 0;
  }else{
    nav.style.top = "-50px";
  }
});
//--------------------------------------------------------
// ---------form event------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";
inputName.addEventListener('input', (e) => {
  pseudo = e.target.value;
  
})
select.addEventListener('input' , (e) => {
  language = e .target.value;
});
//  a travers le code ci-dessus on a créé deux boites (pseudo et laguage)
// qui stockent les informations  saisies dans les inputs .
//les informations sont récupérés par "e.target.value".

//-----------la validation du formulaire---------------------
form.addEventListener('submit' , (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form>div").innerHTML =`
    <h3>Pseudo :${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>`
    ;
  }else{
    alert("veuillez accepter les CGV")
  }
}); 
//---------------------load event-----------------
window.addEventListener("load", () => {
  console.log("document chargé !");
});
//-------------forech------------------------
// ----------querySelectorAll--------------------
const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click" , (e) =>{
    e.target.style.transform = "scale(0.9)";
  });
});
//---------------confirm-----------------------
btn2.addEventListener('click' , () =>{
  confirm('voulez vous  confirmer votre reponse?');
});
btn1.addEventListener('click' , () =>{
  confirm('voulez vous  confirmer votre reponse?');
});

btn2.addEventListener('click' , () =>{
  let answer = prompt('vous avez mal répondu!');
  questionContainer.innerHTML +="<h3> mauvaise reponse" + " " + answer+"</h3>" ;
}) 
btn1.addEventListener('click', () =>{
  let answer2 = prompt('good answer');
  questionContainer.innerHTML += "<h3> bonne reponse" + " " + answer2 + "</h3>";
})

//------------setTimeout------------------------------
setTimeout(() => {
questioConatiner.style.borderRadius = "200px";
},1000);