function setup() {
  noCanvas();

  let bot = new RiveScript();
  bot.loadFile("brain/disorders.rive", brainReady, brainError)

  function brainReady() {
    console.log('Chatbot ready!')
    bot.sortReplies();
  }

  function brainError() {
    console.log('Chatbot Error!')
  }

  let button = select('#submitNow');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    let reply = bot.reply("local-user", input);

    output.html(reply);
  }

}
