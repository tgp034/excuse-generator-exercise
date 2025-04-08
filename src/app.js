window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excuse = "";
  excuse += who[Math.floor(Math.random()*who.length)] + " ";
  excuse += action[Math.floor(Math.random()*action.length)] + " ";
  excuse += what[Math.floor(Math.random()*what.length)] + " ";
  excuse += when[Math.floor(Math.random()*when.length)];
  document.querySelector("#excuse").innerHTML = excuse;
  console.log(excuse);
};
