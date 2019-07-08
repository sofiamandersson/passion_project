/* --- SHOWING NEXT SECTION AND PROGRESS ON CLICK ---*/


let sectionsShowing = [1, 0, 0, 0, 0];
let sectionsAll = ['.firtssection', '.secondsection', '.thirdsection', '.foutrhsection', '.fifthsection'];
let currentStep = document.querySelector('.currentStep');
let stepDone = document.querySelector('section > h3');


function showNextSection() {
	
	let sectionElements = [];
	
	for (var i = 0; i < sectionsAll.length; i++) {
		sectionElements.push(document.querySelector(sectionsAll[i]))
	}
	
	for (var i = 0; i < sectionsShowing.length; i++) {
		
		if (sectionsShowing[i] == 1) {
			sectionsShowing[i] = 0;
			
			if (i == sectionsShowing.length - 1) {
				document.querySelector('.showNextSection').disabled = 'disabled';
				currentStep.textContent = '5';
				
			} else {
				sectionElements[i + 1].style.display = 'block';
				sectionsShowing[i + 1] = 1;
				currentStep.textContent = [i + 2];
				
				//stepDone[i + 1].style.textDecoration = 'line-through';
				
				/*-- not done --*/
				//document.querySelector('section > h3').style.textDecoration = 'line-through';
				
			}
			break;
		}	
	}	
}

console.table(sectionsAll);



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
		
		//do something later when date is reached
      	//if (distance < 0) {
		//  clearInterval(x);
		//  'time is over!;
		//}
	
	}, mySecond)




/*---------BELLOW IS FOR REFERENSE AND LEARNING-----------*/




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


