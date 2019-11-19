
/* --- SHOWING NEXT SECTION --- */

let sectionsShowing = [1, 0, 0, 0, 0];
let sectionsAll = ['.firtssection', '.secondsection', '.thirdsection', '.foutrhsection', '.fifthsection'];

function showNextSection() {
	
	let sectionElements = [];
	
	for (var i = 0; i < sectionsAll.length; i++) {
		sectionElements.push(document.querySelector(sectionsAll[i]));
	}
	
	for (var i = 0; i < sectionsShowing.length; i++) {
		
		if (sectionsShowing[i] == 1) {
			sectionsShowing[i] = 0;
			
			if (i == sectionsShowing.length - 1) {
				document.location.href = 'summary.html';
				
			} else {
				//show next section
				sectionElements[i + 1].style.display = 'block';
				sectionsShowing[i + 1] = 1;
				
				//hide privious section
				sectionElements[i - 0].style.display = 'none';
				
			}
			break;
		}	
	}
}



	//sconsole.log('hej')
	console.log(sectionsAll[3])
	
	console.log(sectionsAll[0] == 1)
	
	
	
/* --- BACK TO PREVIOUS SECTION ---*/

function showPreviousSection() {
	
	let sectionElements = [];
	
	for (var i = 0; i < sectionsAll.length; i++) {
		sectionElements.push(document.querySelector(sectionsAll[i]))
	}
	
	for (var i = 0; i < sectionsShowing.length; i++) {
		
		if (sectionsShowing[i] == 1) {
			sectionsShowing[i] = 0;
			
			if (i == sectionsShowing.length - 5) {
				//change to showing just first section instead of reloading page? 
				document.location.href = 'tool.html';
				
			} else {
				//show privious section
				sectionElements[i - 1].style.display = 'block';
				sectionsShowing[i - 1] = 1;
				
				//hide current section
				sectionElements[i + 0].style.display = 'none';
			
			}
			break;
		}	
	}
	
}

/* ---- SOFIA GUIDE ---*/



/* --- SHOW PROGRESS ON CLICK ---*/

let progressShowing = [1, 0, 0, 0, 0];
let progressAll = ['.firstprogress', '.secondprogress', '.thirdprogress', '.fourthprogress', '.fifthprogress'];

function showProgress() {
	
	let progressElements = [];
	
	for (var i = 0; i < progressAll.length; i++){
		progressElements.push(document.querySelector(progressAll[i]))
	}
	
	for (var i = 0; i < progressShowing.length; i++) {
		
		if (progressShowing[i] == 1){
			progressShowing[i] = 0;
			
			if (i == progressShowing.length - 1){
				//do something?
				
			} else {
				progressElements[i + 1].style.backgroundColor = "#f1582e";
				progressShowing[i + 1] = 1;
				
			}
			break;
		}
	}
}

/*-- 1,5 COUNT DOWN TIMER -- */

const mySecond = 1000,
	  myMinute = mySecond * 60,
	  myHour = myMinute * 60,
	  myDay = myHour * 24;

let myCurrentTime = new Date().getTime();
let myCountDown = new Date(myCurrentTime + (myHour * 1.5)).getTime();

let x2 = setInterval(function(){
				
		let myNow = new Date().getTime();
		let myDistance = myCountDown - myNow;
		
		document.querySelector('.myHours').innerText = Math.floor((myDistance % (myDay)) / (myHour));
		document.querySelector('.myMinutes').innerText = Math.floor((myDistance % (myHour)) / (myMinute));
		document.querySelector('.mySeconds').innerText = Math.floor((myDistance % (myMinute)) / mySecond);
		
		if (myDistance < (myMinute*10)){
			alert("Only 10 minutes left. Time to head to the final step and check out");
		}

		
      	if (myDistance < 0) {
			
			document.querySelector('.myHours').innerText = 0;
			document.querySelector('.myMinutes').innerText = 0;
			document.querySelector('.mySeconds').innerText = 0;
			
		}
	
	}, mySecond)

/*-- HIDE TIMER -- */

function hideTimer() {
	
	//document.querySelector(".hidetimer").innerText = 'Show timer';
	
	
	var timerButtonText = document.querySelector('.hidetimer');
	var actuallTimer = document.querySelector('.actualltimer');
	
	if (timerButtonText.innerHTML == 'Hide Timer') {
		timerButtonText.innerHTML = 'Show Timer';
		actuallTimer.style.visibility = 'visible';
		
		
	} else {
		timerButtonText.innerHTML = 'Hide Timer';
		actuallTimer.style.visibility = 'hidden';
	}
	
	
}


/*---- MODAL ----*/

	
var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var closeButton = document.querySelector('.close-button');

var ppp = document.querySelector('.ppp');
var imessage = document.querySelector('.imessage');


function toggleModal() {
        modal.classList.toggle('show-modal');
 }

function closeModal() {
	if (event.target === modal) {
		toggleModal();
    }
}

function windowOnClick(event) {
       
	if (sectionsShowing[1] == 1) {
		toggleModal();
		imessage.style.display = 'none';
		ppp.style.display = 'block';
	}
		
	if (sectionsShowing[3] == 1) {
		toggleModal();
		imessage.style.display = 'block';
		ppp.style.display = 'none';
	}
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', windowOnClick);


/*---------BELLOW IS FOR REFERENSE AND LEARNING-----------*/


//let currentStep = document.querySelector('.currentStep');
//check mark when done -- NOT DONE --
//let checkCheckBox = document.querySelector('.checkbox');
//document.querySelector(".disabled").disabled = true;


				//show progress aka current step 'x out of 5'
				//currentStep.textContent = [i + 2];
				//check mark when done -- NOT DONE --
				//checkCheckBox.checked = true;



/*
const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
*/

/*------*/



