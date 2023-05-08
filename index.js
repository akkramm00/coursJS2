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

//--------------------setTimeout------------------------------
setTimeout(() => {
questioConatiner.style.borderRadius = "200px";
},1000);

//--------------- les dates en javScript----------------------
const date = new Date();
console.log(date);
const date1 = new Date(2023, 04, 08);
console.log(date1);
const date3 = new Date(2024, 00, 00);
console.log(date3);
const date4 = new Date(2024, 0, 01);
console.log(date4);
const date5 = new Date(2024, 0, 13);
console.log(date5);

//Pour construire et utiliser des dates en JavaScript, on utilise l'objet Date().
// Si on ne lui passe aucun paramètre, il retourne la date courante.
// En paramètres, il ne faut pas utiliser les dates en chaînes de caractères (ex : 'February 29, 2020 09:30:59'), mais utiliser les paramètres "année", "mois"...
// Les mois vont de 0 (janvier) à 11 (décembre).

//---------les setters et les getters----------------------------
console.log("les setters et les getters ")
const date6 = new Date()

date6.setFullYear(2024)
date6.setMonth(00)
date6.setDate(13)
date6.setHours(22)
date6.setMinutes(45)
date6.setSeconds(50)
date6.setMilliseconds(800)

console.log(date6);
console.log(date6.getTime());// le timestampde date6.

const date7 = new Date(2023, 00, 20, 01, 45, 50, 900)
console.log(date7.getTime());
console.log(date7.getFullYear())
console.log(date7.getMonth())
console.log(date7.getDate())
console.log(date7.getHours())
console.log(date7.getMinutes())
console.log(date7.getSeconds())
console.log(date7.getMilliseconds());

//afficher le nombres de seconds de date8 en timestamp:
const date8 = new Date(2020, 11, 25)
console.log(date8.getTime())

//afficher le mois de date8 dans la console:
console.log(date8.getMonth())

// add time o f the date8:
console.log('(add time of date8)')
date8.setHours(20)
date8.setMinutes(30)
console.log(date8);
// we can also write
date8.setHours(20, 30)
console.log(date8);

// Manipulation des getters et des setters pour actualiser les dates
// on rajoute par exemple 2ans, 4mois, 15jours, 4heures, 30min et 45secondes a "date7":
const date9 =new date()
date9.setFullYear(date7.getFullYear()+ 2)
date9.setMonth(date7.getMonth() + 4)
date9.setDate(date7.getDate() + 15)
date9.setHours(date7.getHours() + 4)
date9.setMinutes(date7.getMinutes() + 30)
date9.setSeconds(date7.getSeconds() + 45)
console.log('affichage de la la date9')
console.log(date9);