const quizData = [
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Canberra",
    c: "Melbourne",
    d: "Perth",
    correct: "b",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Venus",
    c: "Mars",
    d: "Jupiter",
    correct: "c",
  },
  {
    question: "Who invented the light bulb?",
    a: "Nikola Tesla",
    b: "Isaac Newton",
    c: "Thomas Edison",
    d: "Albert Einstein",
    correct: "c",
  },
  {
    question: "What is the national animal of India?",
    a: "Elephant",
    b: "Lion",
    c: "Peacock",
    d: "Tiger",
    correct: "d",
  },
  {
    question: "Which is the largest ocean in the world?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d",
  },
];
let score = 0;
let index = 0;
let time = 0;
let interval;
let click = document.getElementById("click");
let start = () => {
  document.getElementsByClassName("main")[0].style.display = "flex";
  document.getElementsByClassName("st-heading")[0].style.display = "none";

  interval = setInterval(() => {
    document.getElementById("timer").innerHTML = time++;
    if (time >= 20) {
      time = 0;
      let question = (document.getElementById("heading").innerHTML =
        quizData[index].question);
      let q1 = (document.getElementById("q-1").innerHTML = quizData[index].a);
      let q2 = (document.getElementById("q-2").innerHTML = quizData[index].b);
      let q3 = (document.getElementById("q-3").innerHTML = quizData[index].c);
      let q4 = (document.getElementById("q-4").innerHTML = quizData[index].d);
      index++;
    }
  }, 500);
};
let nextClick = () => {
  let getoptions = document.getElementsByName("option");
  for (let i = 0; i < getoptions.length; i++) {
    if (getoptions[i].checked) {
      let selectedValue = getoptions[i].value;
      let selectedQuestion = quizData[index - 1]["question"];
      let selectedOptionText = quizData[index - 1][selectedValue];
      let selectedcorrect = quizData[index - 1][`correct`];
      if (selectedValue === selectedcorrect) {
        score++;
      }
      break;
    }
  }
  getoptions.forEach((op) => (op.checked = false));
  if (index >= quizData.length - 1) {
    clearInterval(interval);
    let scoremain = ((score / quizData.length) * 100).toFixed(2);
    document.getElementsByClassName("main")[0].style.display = "none";
    // document.getElementById("sc").innerHTML = ` yor percentage ${scoremain}`;
    document.getElementById("sc").innerHTML = `🎉 Your Score: ${scoremain}%`;
    document.getElementById("sc").style.display = "unset";
    return;
  }
  let question = (document.getElementById("heading").innerHTML =
    quizData[index].question);
  let q1 = (document.getElementById("q-1").innerHTML = quizData[index].a);
  let q2 = (document.getElementById("q-2").innerHTML = quizData[index].b);
  let q3 = (document.getElementById("q-3").innerHTML = quizData[index].c);
  let q4 = (document.getElementById("q-4").innerHTML = quizData[index].d);
  index++;
  click.disabled = true;
  time = 0;
};
nextClick();
let clicked = () => {
  click.disabled = false;
};
