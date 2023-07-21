// A Personality Quiz

function revealAns() {
	// For each group, find the value that is active
	document.querySelector('.results').classList.remove('hide');
	document.querySelector('.results').classList.add('show');
	
	// Hide the quiz after they submit their results
	document.querySelector('#quiz').classList.add('hide');
	document.querySelector('#submit-btn').classList.add('hide');
	document.querySelector('#retake-btn').classList.remove('hide');
}

// Refresh the screen to show a new quiz if they click the retake quiz button
function retakeQuiz() {
	document.querySelector('#quiz').classList.remove('hide');
	document.querySelector('#submit-btn').classList.remove('hide');
	document.querySelector('#retake-btn').classList.add('hide');

	document.querySelector('.results').classList.add('hide');
	document.querySelector('.results').classList.remove('show');

	// this line clears the selections in the quiz
	document.getElementById("quiz").reset();
	// Comment out the line below if you want the page to refresh as well. 
	//window.location.reload();
};

const retakeButton = document.querySelector('#retake-btn');
retakeButton.addEventListener('click', retakeQuiz);

// Tally up the results and add them to an array 
const subButton = document.querySelector('#submit-btn');
const theForm = document.querySelector('#quiz');

theForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const checked = theForm.querySelectorAll(':checked');
  
  const colors = [...checked].reduce(
    (obj, input) => {
      color = obj[input.value];
      color.count += color.multiplier;
      
      return obj;
    },
    {
      'red': { multiplier: 1, count: 0 },
      'green': { multiplier: 1.38, count: 0 },
      'blue': { multiplier: 1.39, count: 0 },
      'yellow': { multiplier: 1.22, count: 0 },
    }
  );
  
  const result = Object.entries(colors).reduce(
    ([key, val], entry) => entry[1].count > val.count ? entry : [key, val],
    ['', { count: -1 }]
  );
  
  console.log(result[0], result[1].count);
  const personality = result[0];

	revealAns();

if(personality == "red") {
	document.getElementById('results').innerHTML = '<b>Commanding Red</b><br><br>\
	You use rational thought and analysis to make objective decisions easily. You are logical, competitive, and tough';
	console.log("This person is red");
} else if(personality == "blue") {
	document.getElementById('results').innerHTML = '<b>Conscientious Blue</b><br><br>\
    You like to keep your thoughts private at least until you are sure about what you&rsquo;re going to say. You are cautious, practical and evidence-based.';
	console.log("This person is blue");
} else if(personality == "yellow") {
	document.getElementById('results').innerHTML = '<b>Inspiring Yellow</b><br><br>\
	You make quick decisions and take actions based on your gut instincts. You are conceptual, imaginative, and radical.';
	console.log("This person is yellow");
} else {
	document.getElementById('results').innerHTML = '<b>Grinning Green</b><br><br>\
	You make decisions that a green type would make - TBD'
	console.log("This person is green");
}

});