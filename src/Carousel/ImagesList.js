import coder from "./Images/Coder.jpg";
import robo from "./Images/Robo.jpg";
import service from "./Images/Services.jpg";
import feedback from "./Images/Feedback.jpg";

var Images = [coder, robo, service, feedback];
var Image;
var counter = 0;

function ImagesList(val) {
  const minVal = 0;
  const maxVal = 4; // no. of images -1

  if (val === "true") {
    counter = counter + 1;
    console.log(counter);
    if (counter === maxVal) counter = minVal;

    Image = Images[counter];
    console.log(Image);
  } else if (val === "false") {
    counter = counter - 1;
    if (counter < minVal) counter = maxVal - 1;

    console.log(counter);
    Image = Images[counter];
    console.log(Image);
  } else if (val === "reset") {
    counter = minVal;
    Image = Images[counter];
  } else {
    Image = Images[0];
  }

  return Image;
}
export default ImagesList;
