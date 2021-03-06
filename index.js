const randomColor = require('randomcolor'); // import the script randomcolor
const chalk = require('chalk'); // import the script chalk

// define user inputs as variables
const userInputHue = process.argv[2];
const userInputLuminosity = process.argv[3];

// generate a random color based on user inputs
// if user doesn't input values, then the values are undefined and the color is generated randomly
// supported by library
const color = randomColor({
  luminosity: userInputLuminosity,
  hue: userInputHue,
});

const str = `###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`;

console.log(chalk.hex(color).bold(str));
