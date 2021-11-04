var rightAnswer = document.getElementById("k3");
var resultBox = document.getElementById("results");
var labelBox = document.getElementsByTagName("label");
var containerBox = document.getElementById("containerBox");
var u = 0;
// k = every radiobutton is called k1, k2, k3, k4
var k4 = document.getElementById("k4");
var k5 = document.getElementById("k5");
var quiz = [
  {
    fraga:
      "<h1>Name the artist!</h1> <br/><img src='verka-serduchka.gif' style='float:left;'>",
    svar: [
      "<h2>Jerka Babuchka</h2>",
      "<h2>Verka Serduchka</h2>",
      "<h2>Vixen Verkuchka</h2>",
    ],
    answer: "k2",
    nrQ: 3,
  },
  {
    fraga: "Which is the best animal?",
    svar: [
      "<img src='parrot.jpeg'>",
      "<img src='sloth.jpeg'>",
      "<img src='utter.jpeg'>",
    ],
    answer: "k3",
    nrQ: 3,
  },
  {
    fraga: "Which is the best designer?",
    svar: ["Prada", "Gucci", "Chanel"],
    answer: "k4",
    nrQ: 3,
  },
  {
    fraga: "Which is the best company?",
    svar: ["Sony", "Nintendo", "Microsoft"],
    answer: "k2",
    nrQ: 3,
  },
  {
    fraga: "Which is the best snacks?",
    svar: ["Doritos", "Pringles", "Lays", "Estrella", "OLW"],
    answer: "k4",
    nrQ: 5,
  },
];

function checkAnswer() {
  containerBox.style.display = "none";
  resultBox.style.display = "initial";
  if (rightAnswer.checked) {
    resultBox.innerHTML = "Correct Answer";
  } else {
    resultBox.innerHTML = "Wrong Answer";
  }
  /*  SETTIMEOUT FOR CHANGE QUESTION WITH EX 3000MS
  MAKE DISPLAY INLINE FOR THE CONTAINER DIV IN CHANGEQUESTION. THEN HIDE THE RESULT BOX IN THE SAME WAY */
  setTimeout(changeQuestion, 1500);
}




function changeQuestion() {
  //MAKE THE CONTAINER DIV DISPLAY INLINE
  containerBox.style.display = "";
  resultBox.style.display = "none";
  // body.style.backgroundImage =
  //   "url('motleycrue.jpeg')";
  document.getElementById("question").innerHTML =  quiz[u].fraga;
    k4.style.display = "none";
    k5.style.display = "none";
    if (quiz[u].nrQ == 5) {
          k4.style.display = "inline";
          k5.style.display = "inline";
    }
      for (let i = 0; i < quiz[u].nrQ; i++) {
        labelBox[i].innerHTML = quiz[u].svar[i];
      }

    $("input[name=fraga1]").prop("checked", false);

    rightAnswer = document.getElementById(quiz[u].answer);
    u++;
}
  console.log(labelBox[0])
    changeQuestion();

/* // SPOTLIGHT EFFECT

window.addEventListener ("DOMContentLoaded", () =>{
  const spotlight = document.querySelector('.spotlight');
  let spotlightSize = 'circle, transparent 160px, rgba(0, 0, 0, 0.85)200px';

  window.addEventListener ('mousemove', e => updateSpotlight(e));
  window.addEventListener ('mousedown', e => {
    spotlightSize = 'circle, transparent 130px, rgba(0, 0, 0, 0, 0.85)150px';
    updateSpotlight(e);
  });
  window.addEventListener ('mouseup', e => {
    spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0, 0.85)200px';
    updateSpotlight(e); 
});

function updateSpotlight(e) {
  spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize})`

}
}) */

// BACKGROUND IMAGE TOGGLE FOR FRAGA2.HTML

// const body = document.querySelector('body')

// fraga2.addEventListener('mousedown', fraga2BgChange)

// function fraga2BgChange() {
//   body.style = `background:url(motleycrue.jpeg) no-repeat center center/cover`
// }

const spotlightTitle = document.getElementById(`spotlightTitle`);

function titleToggle(){
  spotlightTitle.classList.toggle(`active`);
}