// Create a resolved javascript Promise that will return 'Hello World!'.

function promiseHelloWorld() {
  return Promise.resolve("Hello World!")
  
}
promiseHelloWorld();


// function promiseHelloWorld() {
//   Promise.resolve("Hello World!").then((message) =>{
//     console.log(message);
//   });
// }
// promiseHelloWorld();

// async function promiseHelloWorld(){
//     const message = await Promise.resolve("Hello World!");
//     console.log(message);
// }
// promiseHelloWorld();