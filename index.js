const readLineSync = require('readline-sync');

const userResponse = parseInt(readLineSync.question('Welcome to RGB/Hex Converter. Which conversion would you like to use?\n1. RGB to Hex\n2. Hex to RGB\n'));

console.log(`You selected ${userResponse}`);

function utilrgbToHex(color)
{
   let hex;
   if (color <= 9)
     hex = '0'+color;
   else
     hex = color.toString(16);
   
   return hex;
}

function rgbToHex(red,green,blue)
{
   return '#'+utilrgbToHex(red)+utilrgbToHex(green)+utilrgbToHex(blue);
}

function hexToRgb(hex)
{
   let red = parseInt(hex[1]+hex[2],16);
   let green = parseInt(hex[3]+hex[4],16);
   let blue = parseInt(hex[5]+hex[6],16);
   const rgb = {red,green,blue};
   return rgb;
}

switch(userResponse)
{
   case 1:
     console.log('Please enter the RGB (red,green,blue one by one) to be converted to Hex\n');

     const red = parseInt(readLineSync.question('Please enter value (0 to 255) to represent red \n'));
  
     const green = parseInt(readLineSync.question('Please enter value (0 to 255) to represent green \n'));

     const blue = parseInt(readLineSync.question('Please enter value (0 to 255) to represent blue \n'));
   
     if((red>=0 && red <=255) && (green>=0 && green <=255) && (blue>=0 && blue <=255))
         console.log(rgbToHex(red,green,blue));
     else
         console.log('Please enter correct valid values for red,green,blue !!\n');
     break;

   case 2:
     const hex = readLineSync.question('Please enter the hex to be converted to RGB\n');
     console.log(hexToRgb(hex));
     break;

   default:
     console.log('Invalid option');
}
