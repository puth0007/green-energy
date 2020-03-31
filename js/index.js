const p = console.log; // Creating a shortcut for printing

// Get references to interactive HTML elements
const controlButtons = document.querySelectorAll('.controls button');
p(controlButtons);
const container = document.querySelector('.container');
let buttonsArray = [
	controlButtons[0],
	controlButtons[1],
	controlButtons[2]
	]; 

let pages = [
	{
		heading: "<h2>Energy for the future</h2>",
		bodyText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
		thumb: "http://via.placeholder.com/300/ff3377/fff"
	},
	{
		heading: "<h2>A revolution for a healthier future</h2>",
		bodyText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
		thumb: "http://via.placeholder.com/300/ff3377/000"
	},
	{
		heading: "<h2>Clear Water for a clear future</h2>",
		bodyText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
		thumb: "http://via.placeholder.com/300/ff3377/fff"
	},
];

// Create a funtion that handles the click-event
function clickButton(eve) {
	let clickedButton = eve.target; // Reference: Brightspace Week 6
	let index = buttonsArray.indexOf(clickedButton); // Reference: MDM
	p(index); // Node list and arrays are very similar, but this function only works for a node list. We need to create a new array.

	
	// Handle moving id-active to the currently clicked button
		// Remove currently present id "active" in the list of buttons
		for (let i=0; i<controlButtons.length; i++) {
			if (controlButtons[i].id) {
				
				controlButtons[i].removeAttribute('id'); // MDM reference: mozilla reference: remove attribute
			}
		}
		
		// Assign id="active" to the currently selected button
		clickedButton.id='active';
	
	// Load the corresponding data into <div class="container"></div>
	container.innerHTML = `<h2>${pages[index].heading}</h2>
	<figure>
		<img src="${pages[index].thumb}" alt="${pages[index].heading}"
	</figure>
	<p>${pages[index].bodyText}</p>`;
}

// Register clickable objects (buttons) for click-event
for (let i=0; i<controlButtons.length; i++) {
controlButtons[i].addEventListener("click", clickButton);
}