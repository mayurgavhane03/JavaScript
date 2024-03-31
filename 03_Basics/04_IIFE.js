(function chai() {
  console.log("db connected");
})();
//imediatly invoke function expresstion
/* 
()()

*/


((name)=>{
    console.log(`db connected  2 ${name}`);
})("mayur")
// ()  first param function defination  
// () second param invoke function 
// to IIFE functin start to execute it dont when to stop context  that why we need ; to stop 