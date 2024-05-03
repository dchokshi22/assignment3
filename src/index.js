<<<<<<< HEAD
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 * 
*/

// src/index.js
var src_default= {
	async fetch(request, env, ctx) {
  console.log("Logging:" + request.url) //logging request URL
  
  
  const fruit_table = {                 //created lookup table  
	1 : "Apple",
	2 : "Banana",
	3 : "Kiwi",
	4 : "Grapes",
	};
  
	//creating random integer function
	function getRandomInt(min, max) 
  {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }
  const n = getRandomInt(1,4);            //n: number | picks random number using the funtion 
  const nr = fruit_table[n];              //nr: number response | response value for the number choosen above 
  
	if(request.method == 'GET')           //conditional statement
	{
	  return new Response ( "Random number" + " " + n + " " + "is a " + " " + nr );   
	  }
  
	else {
	  return new Response('Hello folks! Please use GET method', 
	  {
	   headers: {
	 'Content-Type':'application/json',
				},
	  });
	} 
	}
			  
  };
  
	export {
	  src_default as default
  };
  
 
  
>>>>>>> abe0613 (assignment 2)
