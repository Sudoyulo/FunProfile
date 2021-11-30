const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

let rl = readline.createInterface({ input, output });

let responseList = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  responseList.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    responseList.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      responseList.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        responseList.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          responseList.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            responseList.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! I... ", (answer) => {
              responseList.push(answer);

              console.log(` \n ${responseList[0]} likes to ${responseList[1]} while listening to ${responseList[2]} and also like to eat ${responseList[4]}, for ${responseList[3]}, plays ${responseList[5]}, and can ${responseList[6]}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});
