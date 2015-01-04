$(document).ready(function () {
    $('.main-content-wrap').fadeIn(1000);


/*--document element variable names--*/
var main = $('.main-content-wrap');
var football = $('.football-wrap');
var baseball = $('.baseball-wrap');
var hockey = $('.hockey-wrap');
var basketball = $('.basketball-wrap');

//Icon selector variables
var footballIcon = $('#football-icon');
var baseballIcon = $('#baseball-icon');
var hockeyIcon = $('#hockey-icon');
var basketballIcon = $('#basketball-icon');

//Form section
var quizForm = $('quiz');
var footballSubmitButton = $('#fb-submit');

//Answer section on right
var answerList = $('.user-answers');
var currentScore = 0;

var scoreDisplay = $('.score-display');

//Feedback area on bottom
var feedbackArea = $('.feedback-area');
var correctFeedback = $('.correct');
var incorrectFeedback = $('.incorrect');
var finalScore = $('.final-score');

var nextSection = $('.next-question');

var nextButtonFB = $('.next-button-fb');
var nextButtonBaseball = $('.next-button-baseball');

//Other variables
var questionNumberHeading = $('.question-number');
var questionNum = 1;


//Declaration of functions
var hideAll = function(){
	scoreDisplay.text('');
  main.hide();
	football.hide();
	baseball.hide();
	hockey.hide();
	basketball.hide();
	nextButtonFB.hide();
  nextButtonBaseball.hide();
}

var resetScore = function(){
	currentScore = 0;
	questionNum = 1;
	correctFeedback.hide();
  incorrectFeedback.hide();
  answerList.empty();
  finalScore.hide();
  finalScore.empty();
}


//---------------------------FOOTBALL QUESTIONS-------------------------------//
//-------------------------------------------------------------------------//

var footballQuestions = [
  { 
      'answer': '1933',
      'question': 'In what year was the Eagles organization established?',
      options: ['1923', '1933', '1939', '1942']
  },
  { 
      'answer': '2',
      'question': 'How many Super Bowl appearances do the Eagles have?',
      options: ['1', '2', '3','4']
  },
  { 
      'answer': 'Michael Vick',
      'question': 'Who was the Eagles starting QB at the start of the 2011 season?',
      options: ['Michael Vick', 'Donovan McNabb', 'Kevin Kolb','Vince Young']
  },
  { 
      'answer': 'LeSean McCoy',
      'question': 'As of 2014, who wears jersey number 25?',
      options: ['Bradley Fletcher', 'Nate Allen', 'LeSean McCoy','Cary Williams']
  },
  { 
      'answer': 'Green Bay Packers',
      'question': 'Who did the Eagles play in the 2010 NFC Wild Card playoff game?',
      options: ['Atlanta Falcons', 'New York Giants', 'Dallas Cowboys','Green Bay Packers']
  },
  { 
      'answer': '10-6',
      'question': 'What was Chip Kelly\'s record during his first season as head coach?',
      options: ['10-6', '11-5', '9-7','12-4']
  },
  { 
      'answer': 'Ray Rhodes',
      'question': 'Who was the Eagles head coach from 1995-1998?',
      options: ['Rich Kotite', 'Andy Reid', 'Ray Rhodes','Buddy Ryan']
  },
  { 
      'answer': 'DeSean Jackson',
      'question': 'Which player wasn\'t a first round draft choice?',
      options: ['DeSean Jackson', 'Brandon Graham', 'Donovan McNabb','Fletcher Cox']
  },
  { 
      'answer': 'Frankford Yellow Jackets',
      'question': 'What were the Eagles previously called?',
      options: ['Pittsburgh Eagles', 'Pennsylvania Eagles', 'Frankford Yellow Jackets','Philadelphia Yellow Jackets']
  },
  { 
      'answer': '59',
      'question': 'In 2010, the Eagles beat the Redskins on Monday Night Football and scored the most points in MNF history. How many points did they score?',
      options: ['55', '42', '59','62']
  },
  { 
      'answer': '2002',
      'question': 'What was the last year the Eagles played at The Vet?',
      options: ['2002', '2004', '1999','2007']
  },
  { 
      'answer': 'Jeff Garcia',
      'question': 'When Donovan McNabb went down after 10 games in the 2006 season, who replaced him as the starting QB?',
      options: ['Koy Detmer', 'Andy Hall', 'Mike McMahon','Jeff Garcia']
  },
  { 
      'answer': '80',
      'question': 'Which of the following is not a retired jersey number?',
      options: ['5', '20', '80','92']
  },
  { 
      'answer': 'Jerome Brown',
      'question': 'Which Eagles player died shortly before the 1992 season?',
      options: ['Reggie White', 'Jerome Brown', 'Clyde Simmons','Fred Barnett']
  },
  { 
      'answer': 'Vince Papale',
      'question': 'Which Eagles player was the subject of a 2006 movie?',
      options: ['Terrell Owens', 'Randall Cunningham', 'Vince Papale','Ron Jaworski']
  },
  { 
      'answer': 'Reggie White',
      'question': 'What Philadelphia Eagle posted 21 sacks in 1987?',
      options: ['Andy Harmon', 'Reggie White', 'Clyde Simmons','Bruce Smith']
  },
  { 
      'answer': 'Swoop',
      'question': 'What is the name of the Philadelphia Eagles mascot?',
      options: ['Rocky', 'Cheesesteak', 'Flappy','Swoop']
  },
  { 
      'answer': 'Chuck Bednarik',
      'question': 'The Philadelphia Eagles retired jersey #60 in honor of what former player?',
      options: ['Chuck Bednarik', 'Mike Ditka', 'Alex Wojciechowicz','Jim Ringo']
  },
  { 
      'answer': 'LeSean McCoy',
      'question': 'Which Eagle holds the record for the most rushing yards (1607) in a single season?',
      options: ['Wilbert Montgomery', 'LeSean McCoy', 'Ricky Waters','Brian Westbrook']
  },
  { 
      'answer': '24-21 Patriots',
      'question': 'What was the final score of the 2004 Super Bowl vs. the the Patriots?',
      options: ['35-27 Patriots', '21-10 Patriots', '35-28 Eagles','24-21 Patriots']
  }
];

//---------------------------BASEBALL QUESTIONS-------------------------------//
//-------------------------------------------------------------------------//

var baseballQuestions = [
  { 
      'answer': 'Juan Samuel',
      'question': 'Who set a record for most stolen bases in one season as a Phillie?',
      options: ['Jimmy Rollins', 'Larry Bowa', 'Juan Samuel', 'Bake McBride']
  },
  { 
      'answer': 'Richie Hebner',
      'question': 'Which of the following Phillies, once had three bunt singles in one game?',
      options: ['Richie Allen', 'Wally Ritchie', 'Richie Ashburn','Richie Hebner']
  }
];



//-------------FOOTBALL VARIABLES-------------//

var footballScore = $('.football-score');

var currentFootballQuestion = null;
var footballQuestionIndex = 0;


//-------------BASEBALL VARIABLES-------------//

var baseballScore = $('.baseball-score');

var currentbaseballQuestion = null;
var baseballQuestionIndex = 0;




//-------------------------MANIPULATING FORM ELEMENTS--------------------------//


//Dynamically adding text to the form
function setRadioLabel(radioId, text) {
     $('label[for="' + radioId + '"]').find('.choice').text(text);
};

//Disabling and enabling forms
var disableRadio = function(){
  $("input[type=radio]").attr('disabled', true);
  footballSubmitButton.attr('disabled','disabled');
};

var enableRadio = function(){
  $("input[type=radio]").attr('disabled', false);
  footballSubmitButton.removeAttr('disabled');
};


//----------------------------SHUFFLE FUNCTION--------------------------------//
function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//Shuffle football questions
var shuffleFootball = function(){
  if (footballQuestionIndex<=footballQuestions.length){
    shuffle(footballQuestions);
  }
  else{
    footballQuestionIndex=0;
    shuffle(footballQuestions);
  }
};

//Shuffle baseball questions
var shuffleBaseball = function(){
  if (baseballQuestionIndex<=baseballQuestions.length){
    shuffle(baseballQuestions);
  }
  else{
    baseballQuestionIndex=0;
    shuffle(baseballQuestions);
  }
};


//----------------------SHOW RANDOM QUESTION (for each sport)----------------------//


//Show random football question
var showFootballQuestion = function(){
  enableRadio();

	//assigning a variable for a randomly selected question//
	var random = footballQuestions[footballQuestionIndex++];

	$('.question-number').text('Question ' + questionNum);



	$('#football-question').text(random.question).fadeIn(1000);	    
    $('input[name="selection"]').prop('checked', false);
    
    setRadioLabel('radio1', random.options[0]);
    setRadioLabel('radio2', random.options[1]);
    setRadioLabel('radio3', random.options[2]);
    setRadioLabel('radio4', random.options[3]);
    currentFootballQuestion = random;
};

//Show random baseball question
var showBaseballQuestion = function(){
  enableRadio();

  //assigning a variable for a randomly selected question//
  var random = baseballQuestions[baseballQuestionIndex++];

  $('.question-number').text('Question ' + questionNum);



  $('#baseball-question').text(random.question).fadeIn(1000);     
    $('input[name="selection"]').prop('checked', false);
    
    setRadioLabel('radio5', random.options[0]);
    setRadioLabel('radio6', random.options[1]);
    setRadioLabel('radio7', random.options[2]);
    setRadioLabel('radio8', random.options[3]);
    currentBaseballQuestion = random;
};

//-------action on clicking NEXT button---------//


//clicking next button in football section
var nextFBQuestion = function(){
  if (questionNum<10){
    questionNum++;
  };
  console.log(questionNum);
  showFootballQuestion();
  correctFeedback.hide();
  incorrectFeedback.hide();
  nextSection.hide();
}

nextButtonFB.on('click', function(){
    nextFBQuestion();
 });

//clicking next button in baseball section
var nextBaseballQuestion = function(){
  if (questionNum<10){
    questionNum++;
  };
  console.log(questionNum);
  showBaseballQuestion();
  correctFeedback.hide();
  incorrectFeedback.hide();
  nextSection.hide();
}

nextButtonBaseball.on('click', function(){
    nextBaseballQuestion();
 });


//--FINAL SCORE DISPLAY--//

var displayFinalScoreFB = function(){
  if (currentScore>6 && currentScore<10){
    finalScore.delay(1800).append('<p>Your final score was '+currentScore+' out of 10. Excellent! <span id="fb-again" class="buzz-out">Play again?</span></p>').fadeIn(1000);
  }
  if (currentScore<=6){
    finalScore.delay(1800).append('<p>Your final score was '+currentScore+' out of 10. Better luck next time! <span id="fb-again" class="buzz-out">Play again?</span></p>').fadeIn(1000);
  }
  if (currentScore==10)
    finalScore.delay(1800).append('<p>Perfect score, you are the Rainman of Eagles trivia! <span id="fb-again" class="buzz-out">Play again?</span></p>').fadeIn(1000);
};

var displayFinalScoreBaseball = function(){
  if (currentScore>6){
    finalScore.delay(1800).append('<p>Your final score was '+currentScore+' out of 10. Excellent! <span id="baseball-again" class="buzz-out">Play again?</span></p>').fadeIn(1000);
  }
  if (currentScore<=6){
    finalScore.delay(1800).append('<p>Your final score was '+currentScore+' out of 10. Better luck next time! <span id="baseball-again" class="buzz-out">Play again?</span></p>').fadeIn(1000);
  }
};

/*-----FUNCTIONS FOR DISPLAYING FEEDBACK------*/

var displayCorrectFeedback = function(){
  correctFeedback.text('You got it!').fadeIn(1000);
  currentScore++;
  scoreDisplay.text(currentScore);
  answerList.append("<li>Question " + questionNum + ":       <span class='score-correct'>Correct</span></li>");
  nextSection.delay(800).fadeIn(500);     
}

var displayIncorrectFeedback = function(i){    
  incorrectFeedback.text( 'Nope! The correct answer was '+i).fadeIn(1000);
  answerList.append("<li>Question " + questionNum + ":       <span class='score-incorrect'>Incorrect</span></li>");
  nextSection.delay(800).fadeIn(500);  
}

/*---------------------------------------*/




//-----check user answer on submit----//
$('#fb-submit').click(function() {

  disableRadio();
  var response = $('input[name="selection"]:checked').siblings('span').text();
  if(currentFootballQuestion) {

    if(questionNum<10){

          if(currentFootballQuestion.answer == response) {
              displayCorrectFeedback();
              nextButtonFB.fadeIn(500); 
    			}

          else {
              displayIncorrectFeedback(currentFootballQuestion.answer);
              nextButtonFB.fadeIn(500); 
          }
        }

    }
    if(questionNum==10) {
        if(currentFootballQuestion.answer == response) {
                nextSection.hide();
                correctFeedback.text('You got it!').fadeIn(1000);
                correctFeedback.delay(300).fadeOut(300);
                currentScore++;
                scoreDisplay.text(currentScore);
                answerList.append("<li>Question " + questionNum + ":    <span class='score-correct'>Correct</span></li>");
                displayFinalScoreFB();

                $('#fb-again').on('click',function(){
                  resetScore();
                  footballQuestionIndex=0;
                  finalScore.empty();
                  finalScore.hide();
                  answerList.empty();
                  scoreDisplay.text('');
                  shuffleFootball();
                  showFootballQuestion();
                });
        }
        else {
              incorrectFeedback.text( 'Nope! The correct answer was '+currentFootballQuestion.answer).fadeIn(1000);
              incorrectFeedback.delay(300).fadeOut(300);
              answerList.append("<li>Question " + questionNum + ":    <span class='score-incorrect'>Incorrect</span></li>");
              displayFinalScoreFB();

              $('#fb-again').on('click',function(){
                  resetScore();
                  footballQuestionIndex=0;
                  finalScore.empty();
                  finalScore.hide();
                  answerList.empty();
                  scoreDisplay.text('');
                  shuffleFootball();
                  showFootballQuestion();
                });
        }
    }
    return false;
});


/*-----Baseball Submit-----*/
$('#baseball-submit').click(function() {

  disableRadio();
  var response = $('input[name="selection"]:checked').siblings('span').text();
  if(currentBaseballQuestion) {

    if(questionNum<10){

          if(currentBaseballQuestion.answer == response) {
              displayCorrectFeedback();    
              nextButtonBaseball.fadeIn(500); 
          }

          else {
              displayIncorrectFeedback(currentBaseballQuestion.answer);
              nextButtonBaseball.fadeIn(500); 
          }
        }
    }
    if(questionNum==10) {
        if(currentBaseballQuestion.answer == response) {
                nextSection.hide();
                correctFeedback.text('You got it!').fadeIn(1000);
                correctFeedback.delay(300).fadeOut(300);
                currentScore++;
                scoreDisplay.text(currentScore);
                answerList.append("<li>Question " + questionNum + ":    <span class='score-correct'>Correct</span></li>");
                displayFinalScoreBaseball();

                $('#baseball-again').on('click',function(){
                  resetScore();
                  baseballQuestionIndex=0;
                  finalScore.empty();
                  finalScore.hide();
                  answerList.empty();
                  scoreDisplay.text('');
                  shuffleBaseball();
                  showBaseballQuestion();
                });
        }
        else {
              incorrectFeedback.text( 'Nope! The correct answer was '+currentbaseballQuestion.answer).fadeIn(1000);
              incorrectFeedback.delay(300).fadeOut(300);
              answerList.append("<li>Question " + questionNum + ":    <span class='score-incorrect'>Incorrect</span></li>");
              displayFinalScoreBaseball();

              $('#baseball-again').on('click',function(){
                  resetScore();
                  baseballQuestionIndex=0;
                  finalScore.empty();
                  finalScore.hide();
                  answerList.empty();
                  scoreDisplay.text('');
                  shuffleBaseball();
                  showBaseballQuestion();
                });
        }
    }
    return false;
});




//--------------ACTIONS WHEN HOVERING/CLICKING ON EACH ELEMENT-------------//
//-------------------------------------------------------------------------//



	$('#home').on('click',function(){
		resetScore();
		hideAll();
		main.fadeIn(1000);
	});

  //football icon

  (footballIcon).on('click',function(){
  	hideAll();
  	currentFootballQuestion=0;
  	resetScore();
    football.fadeIn(1000);
    footballIcon.toggleClass('fb-active');
    shuffleFootball();
    showFootballQuestion();
    });

  (footballIcon).on('mouseenter',function(){
    baseballIcon.animate({opacity:0}, 200);
    hockeyIcon.animate({opacity:0}, 200);
    basketballIcon.animate({opacity:0}, 200);
  });

  (footballIcon).on('mouseleave',function(){
    baseballIcon.animate({opacity:1}, 100);
    hockeyIcon.animate({opacity:1}, 100);
    basketballIcon.animate({opacity:1}, 100);
  });

  //baseball icon

  (baseballIcon).on('click',function(){
  	hideAll();
    currentBaseballQuestion=0;
  	resetScore();
  	baseball.fadeIn(1000);
    shuffleBaseball();
    showBaseballQuestion();
  });

  (baseballIcon).on('mouseenter',function(){
    footballIcon.animate({opacity:0}, 200);
    hockeyIcon.animate({opacity:0}, 200);
    basketballIcon.animate({opacity:0}, 200);
  });

  (baseballIcon).on('mouseleave',function(){
    footballIcon.animate({opacity:1}, 100);
    hockeyIcon.animate({opacity:1}, 100);
    basketballIcon.animate({opacity:1}, 100);
  });

/*---------------------

    $('#hockey-icon').on('click',function(){
    	main.hide();
    	hideAll();
    	answerList.empty();
    	resetScore();
      questionNumberHeading.text('Question ' + questionNum); /*TEMP LINE
    	hockey.fadeIn(1000);
      showHockeyQuestion();
    });

    $('#basketball-icon').on('click',function(){
    	main.hide();
    	hideAll();
    	answerList.empty();
    	resetScore();
      questionNumberHeading.text('Question ' + questionNum); /*TEMP LINE
    	basketball.fadeIn(1000);
      showBasketeballQuestion();
    }); 
-------------------------*/

});
