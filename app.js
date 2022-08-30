

'use strict'

//Instructions
//display three unique products by chance so that the viewers can pick a favorite.
let container = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector('sections img:first-child');
let image2 = document.querySelector("sections img:nth-child(2)");
let image3 = document.querySelector("sections img:nth-child(3)");

let uniqueProd1 = "uniqueProd1";
let uniqueProd2 = "unqueProd2";
let uniqueProd3 = "uniqueProd3";
//Create a constructor function that creates an object associated with each product, and has the following properties:
//Name of the product
//File path of image
//Times the image has been shown


//Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

//For each of the three images, increment its property of times it has been shown by one.

//Attach an event listener to the section of the HTML page where the images are going to be displayed.

//Once the users ‘clicks’ a product, generate three new products for the user to pick from.
let clicks = 0;
let maxClicksAllowed = 25;

function Image(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
    Image.allImageArray.push(this);
}

Image.allImagesArray = [];

//Allow the user to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
function getRandomNumber() {
    return Math.floor(Math.random() * Image.allImagesArray.lenght);
}

function renderImages() {
    let image1 = getRandomNumber();
    let image2 = getRandomNumber();
    let image3 = getRandomNumber();


while (image1 === image2) {
    image2 = getRandomNumber();
  }
  image1.src = Image.allImagesArray[image1].src;
  image2.src = Image.allImagesArray[image2].src;
  image3.src = Image.allImagesArray[image3].src;
  image1.alt = Image.allImagesArray[image1].name;
  image2.alt = Image.allImagesArray[image2].name;
  image3.alt = Image.allImagesArray[image3].name;
  Image.allImagesArray[image1].views++;
  Image.allImagesArray[image2].views++;
  Image.allImagesArray[image2].views++;
}
//Allow the user to track the selections made by viewers so that I can determine which products to begin production on.



//After every selection by the viewer, update the newly added property to reflect if it was clicked.

//Allow the User to control the number of rounds a user is presented with so that I can control the voting session duration.



//By default, the user should be presented with 25 rounds of voting before ending the session.


//Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.


//Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.




//Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.
function handleImageClick(event) {
    if (event.target === imageContainer) {
        alert ("Click An Image");
    }
    clicks++;
    let clickImage = event.target.alt;
    for (let i = 0; i < Image.allImagesArray.length; i++) {
        if (clickImage === Image.allImagesArray[i].name {
            Image.allImagesArray[i].clicks++;
            break;
        }
    }
//After voting rounds have been completed, remove the event listeners on the product.
if (clicks === maxClicksAllowed) {
    imageContainer.removeEventListener('click', handleImageClick);
    resultButton.addEventListener('click', renderResults);
    resultsButton.className = 'clicks-allowed';
    imageContainer.className = 'no=voting';
} else {
    renderImages();
}

function renderResults() {
    let ul = document.querySelector('ul');
    for (let i = 0; i < Image.allImagesArray.length; i++) {
        let li = document.createElement('li');
        li.textContext = `$(Image.allImagesArray[i].name} had ${Image.allImages}[i].views} view and was clicked)`;
        ul.appendChild(li);
    }

    new Image('bag Image', './assets/bag.jpg');
    new Image('banana Image', './assets/banana.jpg');
    new Image('bathroom Image', './assets/bathroom.jpg');
    new Image('boots Image', './assets/boots.jpg');
    new Image('breakfast Image', './assets/breakfast.jpg');
    new Image('bubblegum Image', './assets/bubblegum.jpg');
    new Image('chair Image', './assets/chair.jpg');
    new Image('cthulhu Image', './assets/cthukhu.jpg');
    new Image('dog-duck Image', './assets/dog-duck.jpg');
    new Image('dragon Image', './assets/dragon.jpg');
    new Image('pen Image', './assets/pen.jpg');
    new Image('pet-sweep Image', './assets/pet-sweep.jpg');
    new Image('scissors Image', './assets/scissors.jpg');
    new Image('sharkImage', './assets/sharkImage.jpg');
    new Image('sweeep Image', './assets/sweep.jpg');
    new Image('tauntaun Image', './assets/tatutaun.jpg');
    new Image('unicorn Image', './assets/unicorn.jpg');
    new Image('water Image', './assets/water.jpg');
    new Image('wine-glass Image', './assets/wine-glass.jpg');
    
renderImages();
imageContainer.addEventListener('click', handelEmageClick);

//Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.