var currentQuestion = null;
var questionIndex = 0;


//-----------Football Question List-----------//

var footballQuestions = [
  { 
      'answer': 'b',
      'question': 'In what year was the Eagles organization established?',
      options: ['1923', '1933', '1939', '1942']
  },
  { 
      'answer': 'b',
      'question': 'How many Super Bowl appearances do the Eagles have?',
      options: ['1', '2', '3','4']
  }
];


$('input[type="submit"]').click(function() {
    var val = $('#questions').find('input:checked').val();
    if(currentQuestion) {
        if(currentQuestion.answer == val) {
            alert("You got it!");
            showQuestion();
        } else {
            alert("Nope!");
        }
    }
    return false;
});


//----------------SHOW RANDOM QUESTION----------------//


//---RANDOM FOOTBALL----//
function showFootballQuestion() {
    // Grab next question, ++ so we get a new one each time
    var random = footballQuestions[questionIndex++ % footballQuestions.length];
    
    $('#question').text(random.question);
    
    $('input[type="radio"]').attr('checked', false).checkboxradio('refresh');
    
    setRadioLabel('radio1', random.options[0]);
    setRadioLabel('radio2', random.options[1]);
    setRadioLabel('radio3', random.options[2]);
    setRadioLabel('radio3', random.options[2]);
    currentQuestion = random;
};