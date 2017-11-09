
$("#user_input").keyup(function(event) {
  if (event.keyCode === 13) {
      button.mousePressed(chat);
  }
});


function setup() {                          //  FORM
  // put setup code here
  noCanvas();
// attemp infinity
  let bot = new RiveScript();
  bot.loadFile("brain/disorders.rive", brainReady, brainError);
  function brainReady(){
    console.log('chatbot ready!')
    bot.sortReplies();
  }
  function brainError(){
    console.log('chatbot error?!')
  }
  let button = select('#send');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);


  function chat() {
    let input = user_input.value();
    let reply = bot.reply("local-user", input);
    output.html(reply);
  }
  //button = createButton('Key Codes');
  //button.mousePressed(keyCodes);
}
/*
function keyCodes() {
  keyCodeDiv = document.getElementById('keycode');
  if (keyCodeDiv.style.display === "block") {
    keyCodeDiv.style.display = "none";
  } else {
    keyCodeDiv.style.display = "block";
  }
}
function changeStyle(){
  //txt.style("background-color", "pink");
  //txt.style("padding", "24px");
} 
*/


