// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
// route, ananymous function


//Hello from lab 4!
fastify.get("/", (request, reply) => {
console.log(request.query)                     
  reply
    .code(200)
    .header("Content-Type", "text/html", "charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
}); 


//Hello, send!
fastify.get("/name", (request, reply) => {
  console.log(request.query); 
  const first = request.query.first;
  const last = request.query.last;
  let name = ((last && first) ? `${first} ${last}` : "Guest")
  const send = `Hello, ${name}`
    reply
      .code(200)
      .header("Content-Type", "text/html", "charset=utf-8")
      .send(`<h1>${send}!</h1>`);
  });

  

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
