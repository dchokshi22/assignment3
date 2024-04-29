/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
export default {
	async fetch(request, env, ctx) {
		return new Response('Hello World!');
	},
}; 
*/

var src_default= {
	async fetch(request, env, ctx) {
console.log('Logging: '+ request.url)
if(request.method == 'POST') {
      return new Response('Hello World!This is POST method', {
       headers: {
     'Content-Type':'application/json',
         },
    });
}
else{
return new Response('Only POST method allowed',{
        headers:{    
              'Content-Type': 'application/json',
                },
     });
   }
}
};
export {
src_default as default
	};
