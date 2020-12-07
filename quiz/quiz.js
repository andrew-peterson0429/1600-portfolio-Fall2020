import * as qList from './ques.js';
const questions = qList.default;

const randomize = async (list) => {
  let index = list.length, tempVal, ranIndex;

  while (0 !== index) {
    ranIndex = Math.floor(Math.random() * index);
    index--; 

    tempVal = list[index];
    list[index] = list[ranIndex];
    list[ranIndex] = tempVal;
  };
  return list;
};

(async () => {

  let qs = await randomize(questions);
  let qsIndex = 0;
  let transcript;

  function stageQs(index, list) {
    let q = list[index];
    console.log(q);
    let ques = document.getElementById('ques').innerHTML = q.ques;

    for (var i = 0; i < q.answers.length; i++) {
      let answer = document.createElement('input');
      let label = document.createElement('label');
      answer.type = 'radio';
      answer.id = q.answers[i].index;
      answer.name = 'answers';
      answer.value = q.answers[i].answer;
      label.for = answer.id;
      label.innerHTML = answer.value;
      document.getElementById('answers').appendChild(answer); 
      document.getElementById('answers').appendChild(label); 
    }; 
  };

  function validate() {

  }

  stageQs(qsIndex, qs);

})();