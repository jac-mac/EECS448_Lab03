var arrayOfCatPictures = new Array(); //array of cat images
var index = 0; //index tracker for onClick functions

//populating the array with 5 new images and setting each of their srcs
//Image() could take a height and width as parameters, but html already sets the desired dimensions of the pictures in its img tag
arrayOfCatPictures[0] = new Image();
arrayOfCatPictures[0].src = 'greenEyes.jpeg'

arrayOfCatPictures[1] = new Image()
arrayOfCatPictures[1].src = 'whereAmI.jpg'

arrayOfCatPictures[2] = new Image()
arrayOfCatPictures[2].src = 'quizzical.jpg'

arrayOfCatPictures[3] = new Image()
arrayOfCatPictures[3].src = 'astonished.jpg'

arrayOfCatPictures[4] = new Image()
arrayOfCatPictures[4].src = 'small.jpg'

//getting tags from html document
let visiblePicture = document.getElementById('catPicture');
let nextButton = document.getElementById('nextButton');
let prevButton = document.getElementById('prevButton');

//initial picture to appear in html document
visiblePicture.src = arrayOfCatPictures[0].src

//@pre Next button is pressed
//@post Shows the next image in the array of cat pictures on the hmtl document
//@param None.
//@return None.
nextClick = function() {
  if(index < 4)
    index++;
  else if(index == 4)
    index = 0;

  visiblePicture.src = arrayOfCatPictures[index].src
}

//@pre Next button is pressed
//@post Shows the next image in the array of cat pictures on the hmtl document
//@param None.
//@return None.
prevClick = function() {
  if(index > 0)
    index--;
  else if(index == 0)
    index = 4;

  visiblePicture.src = arrayOfCatPictures[index].src
}
