//your JS code here. If required.

let btn = document.getElementById('btn');

btn.addEventListener('click', async function(e){
	e.preventDefault();
	const text = document.getElementById('text').value;
	const delay = parseInt(document.getElementById('delay').value);
	const output = document.getElementById('output');
	

	if(!text || isNaN(delay) || delay < 0) {
		output.textContent = 'Please provide valid input values.'
		return;	
	}
	output.textContent = 'Waiting...';

	await delayMessage(delay);
	output.textContent = text;
});
await new Promise(resolve => setTimeout(resolve, delay));
  
  output.textContent = text;
});




