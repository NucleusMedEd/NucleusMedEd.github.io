function setup() {                          //  FORM

  noCanvas();
// attemp infinity
  let bot = new RiveScript();
  bot.loadFile([
          "brain/disorders.rive",
          "brain/drugs.rive",
          "brain/muscles.rive",
          "brain/testsuite.rive",
          "brain/rs-standard.rive"
  ], brainReady, brainError);

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
  // test console.log(output);

  function chat() {
    let input = user_input.value();
    console.log(input);
    let reply = bot.reply("local-user", input);
    output.html(reply);

    console.log(reply);
  }

}
