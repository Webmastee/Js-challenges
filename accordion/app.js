//using selectors inside the element

const questions = document.querySelectorAll(".question");
const questionTextt = document.querySelectorAll(".question-text");

for (i=0; i < questions.length; i++) {
    //looping through each question and selecting the button inside
   const question = questions[i].querySelector(".question-btn");
   //looping through question and selecting each answer
   const questionText = questions[i].querySelector(".question-text");
   //adding eventlistener to each span button
   question.addEventListener("click", function () {
    //looping through each answer to get the each
    for (i=0; i<questionTextt.length; i++) {
        const item = questionTextt[i];
        //adding conditional statement
        if (item !== questionText) {
            item.classList.remove("show-text")
        }
    }

    questionText.classList.toggle("show-text")
   })
}
// traversing the dom
