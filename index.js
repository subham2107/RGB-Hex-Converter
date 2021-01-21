const readLineSync = require('readline-sync');

const user_response = parseInt(readLineSync.question('Welcome to RGB/Hex Converter. Which conversion would you like to use?\n1. RGB to Hex\n2. Hex to RGB\n'));

console.log(`You selected ${user_response}`);
logic(user_response);

function utilrgbToHex(color)
{
  let hex;
  if (color<=9)
  hex='0'+color;
  else
  hex= color.toString(16);
  return hex;
}

function rgbToHex(red,blue,green) //(50, 168, 82)→ #32a852
{
 return '#'+utilrgbToHex(red)+utilrgbToHex(blue)+utilrgbToHex(green);
}

function hexToRgb(hex)//"#32a852" → {red: 50, blue: 168, green: 82}
{
 let red=parseInt(hex[1]+hex[2],16);
 let blue=parseInt(hex[3]+hex[4],16);
 let green=parseInt(hex[5]+hex[6],16);
 const rgb={red,blue,green};
 return rgb;
}

function logic(user_response)
{
if(user_response===1)
{
  console.log('Please enter the RGB (red,green,blue one by one) to be converted to Hex\n');

  const red = parseInt(readLineSync.question('Please enter value (0 to 255) to represent red \n'));
  
  const blue = parseInt(readLineSync.question('Please enter value (0 to 255) to represent blue \n'));
  
  const green = parseInt(readLineSync.question('Please enter value (0 to 255) to represent green \n'));

  console.log(rgbToHex(red,blue,green));
}
else if(user_response===2)
{
  const hex = readLineSync.question('Please enter the hex to be converted to RGB\n');
  console.log(hexToRgb(hex));
}
else
{
  console.log('Invalid option');
}
}
