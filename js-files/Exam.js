(function () {
    var element = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 200);

    function frame() {
        if (width == 100) {
            clearInterval(id);
            sub();
        } else {
            width = width + 0.5;
            element.style.width = width + '%';
        }
    }
})();
///////////////function consractor///////////////////////
function Question (question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
}
var q1 = new Question("6 ÷ 2(1+2)", [2, 1, 15, 0], 1)
var q2 = new Question("16+21", [37, 27, 30, 40], 37)
var q3 = new Question("8 + 1/2(12)", [16, 18, 14, 25], 14)
var q4 = new Question("9−3÷(1/3)+1", [0, 8, 2, 1], 1)
var q5 = new Question("15 - 1(12 ÷ 4 + 1)", [12, 13, 11, 18], 11)
var arrOfQues = [q1, q2, q3, q4, q5];
// console.log(arrOfQues[0].question)
// console.log(arrOfQues[0].answers)
// console.log(arrOfQues[0].rightAnswer)
var arrOfRightAnswer = [];
var randomQues = [];
var arrOfUserAnswers = []
var markedQuestions = []
// console.log(arrOfQues.length)
////// array of random index ////////////////////////////////////
while (randomQues.length < arrOfQues.length) {
    var r = Math.floor(Math.random() * arrOfQues.length);
    if (randomQues.indexOf(r) === -1)
        randomQues.push(r);
}
// console.log(randomQues);
// console.log(arrOfQues[randomQues[0]].question);
/////// array Of right answer/////////////////////////////////////

for (var z = 0; z < randomQues.length; z++) {
    arrOfRightAnswer.push(arrOfQues[randomQues[z]].rightAnswer)
    // console.log(arrOfRightAnswer)
}
////// display random questions/////////////////
var i = 0;
document.querySelector('.question').textContent = `Q${i + 1}:   ${arrOfQues[randomQues[i]].question}`;
for (var j = 0; j < arrOfQues[randomQues[i]].answers.length; j++) {
    document.querySelector('#r-' + j).nextSibling.textContent = arrOfQues[randomQues[i]].answers[j]
    // console.log(arrOfQues[randomQues[i]].answers[j])
}
///////////////next button///////////////////////////////
document.querySelector('#n').addEventListener('click', function () {
    document.getElementById("b").style.display = "block";
    for (var j = 0; j < 4; j++) {
        document.querySelectorAll('.radio')[j].checked = false;
    }
    if (i !== 4) {
        i++;
        document.querySelector('.question').textContent = `Q${i + 1}:   ${arrOfQues[randomQues[i]].question}`;
        for (var j = 0; j < arrOfQues[randomQues[i]].answers.length; j++) {
            document.querySelector('#r-' + j).nextSibling.textContent = arrOfQues[randomQues[i]].answers[j]
        }
        if (i == 4) {
            document.getElementById("n").style.display = "none";
        }
    }
    addUserAnswer();
})
///////////////previous button///////////////////////////////
document.querySelector('#b').addEventListener('click', function () {
    if (i == 1) {
        document.getElementById("b").style.display = "none";
    }
    for (var j = 0; j < 4; j++) {
        document.querySelectorAll('.radio')[j].checked = false;
    }
    if (i > 0) {
        i--;
        document.querySelector('.question').textContent = `Q${i + 1}:   ${arrOfQues[randomQues[i]].question}`;
        for (var j = 0; j < arrOfQues[randomQues[i]].answers.length; j++) {
            document.querySelector('#r-' + j).nextSibling.textContent = arrOfQues[randomQues[i]].answers[j]
        }
        if (i !== 4) {
            document.getElementById("n").style.display = "block";
        }
    }
    addUserAnswer();
})
console.log(i)
//////////////////marked Questions////////////////////
document.querySelector('#mark').addEventListener('click', function () {
    if (i == 0) {
        document.getElementById("b").style.display = "none";
    } else {
        document.getElementById("b").style.display = "block";
    }
    if (markedQuestions.indexOf(i) === -1) {
        markedQuestions.push(i)
        console.log(i)
        var html = `<div class="marked" data-name=${i} > Question  ${i + 1}</div>`;
        document.querySelector('.hash').insertAdjacentHTML('beforeend', html);
        document.querySelectorAll('.marked').forEach(function (mark) {
            mark.addEventListener('click', function (e) {
                document.querySelector('.marked').style.display = "none";
                var x = parseInt(e.target.dataset.name);
                i = x;
                if (i == 0) {
                    document.getElementById("b").style.display = "none";
                } else {
                    document.getElementById("b").style.display = "block";
                }
                if (i<4) {
                    document.getElementById("n").style.display = "block";
                } else {
                    document.getElementById("n").style.display = "none";
                }
                console.log(i);
                document.querySelector('.question').textContent = `Q${i + 1}:   ${arrOfQues[randomQues[i]].question}`;
                for (var j = 0; j < arrOfQues[randomQues[i]].answers.length; j++) {
                    document.querySelector('#r-' + j).nextSibling.textContent = arrOfQues[randomQues[i]].answers[j];
                }
                addUserAnswer();
                
            })
        })
    }
})

function answerByUser(e) {
    userAnswer = e.target.nextSibling.textContent;
    arrOfUserAnswers[i] = userAnswer;
    console.log(arrOfUserAnswers);
    // console.log(event);
    console.log(userAnswer)
}
function addUserAnswer() {
    if (arrOfUserAnswers[i] !== -1) {
        var chosedAnswer = arrOfUserAnswers[i];
        for (var j = 0; j < 4; j++) {
            var x = document.querySelectorAll('.radio')[j].nextSibling.textContent;
            if (x === chosedAnswer) {
                document.querySelectorAll('.radio')[j].checked = true;
            }
        }
    }
}
/////////////result funcion/////////////////////
function sub() {
    var score = 0;
    for (var i = 0; i < arrOfUserAnswers.length; i++) {
        if (arrOfUserAnswers[i] == arrOfRightAnswer[i]) {
            score += 1
        }
    }
    localStorage.setItem('Score', score);
    window.location.replace('./Result.html')   
}