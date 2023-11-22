/**
 * Array of images
 * @var - Array with name pictures
 */
let pictures = ['golf1.jpg', 'golf2.jpg', 'golf3.jpg', 'golf4.jpg', 'golf5.jpg', 'golf6.jpg', 'golf7.jpg', 'golf8.jpg', 'golf9.jpg', 'golf10.jpg', 'golf11.jpg', 'golf12.jpg', 'golf13.jpg', 'golf14.jpg', 'golf15.jpg', 'golf16.jpg', 'golf17.jpg', 'golf18.jpg'];


/**
 * function render() - to render the mainGallery in the main-section
 */
function render() {
    const mainGallery = document.getElementById('mainGallery');
    mainGallery.innerHTML = '';

    for (let i = 0; i < pictures.length; i++) {
        mainGallery.innerHTML += loadHtmlMainGallery(i);
    }
}


/**
 * loadHtmlMainGallery(i) - function return the HTML-code for the function render()
 * @param {number} i - position in the array
 * @returns - the html code to include into container
 */
function loadHtmlMainGallery(i) {
    let pictureNumber = i + 1;
    return /*html*/`<img class="main-gallery-picture" onclick="hideShowGalleryPicture();showSelectedPicture(${pictureNumber})" src="./img/${pictures[i]}" alt="">`;
}


/**
 * function hideShowGalleryPicture() - function toggle the css-class to show or hide the container, wich show the detail picture area
 * @const {string} galleryPicture - contains the position of the container to include code
 */
function hideShowGalleryPicture() {
    const galleryPicture = document.getElementById('detailGallery');
    galleryPicture.classList.toggle('d-none');
    galleryPicture.classList.toggle('detail-gallery');
}


/**
 * Function showSelectedPicture(pictureNumber) - show the selected Image from the mainGallery
 * @param {number} pictureNumber - contains the image-number of the image file
 * @const {string} detailGalleryPicture - contains the position of the container to include code
 * @var {number} pictureNumberPrevious - contains the image-number of the  previous image file
 * @var {number} pictureNumberNext - contains the image-number of the  next image file
 */
function showSelectedPicture(pictureNumber) {
    const detailGalleryPicture = document.getElementById('detailGalleryPicture');
    let pictureNumberPrevious = pictureNumber - 1;
    let pictureNumberNext = pictureNumber + 1;

    detailGalleryPicture.innerHTML = '';
    detailGalleryPicture.innerHTML += loadHtmlDetailGallery(pictureNumber, pictureNumberPrevious, pictureNumberNext);
    /* aspectRatio(); */
}


/**
 * function loadHtmlDetailGallery(pictureNumber, pictureNumberPrevious, pictureNumberNext) - function return the HTML-code for the function showSelectedPicture()
 * @param {number} pictureNumber - contains the image-number of the image file
 * @param {number} pictureNumberPrevious - contains the image-number of the previous image file
 * @param {number} pictureNumberNext - contains the image-number of the next image file
 * @returns - the html code to include into container
 */
function loadHtmlDetailGallery(pictureNumber, pictureNumberPrevious, pictureNumberNext) {
    return /*html*/`
    <div class="detail-picture-navigation">
    <img class="back-forward-icon" onclick="previousPicture(${pictureNumberPrevious})" src="./icon/back.png" alt="">
    <img id="image" class="detail-picture" src="./img/golf${pictureNumber}.jpg" alt="">
    <img class="back-forward-icon" onclick="nextPicture(${pictureNumberNext})" src="./icon/forward.png" alt="">
    </div>
   `;
}


/**
 * function previousPicture(pictureNumberPrevious) - check if the image is in the first position into the array pictures[] and call the 
 * function showSelectedPicture()
 * true - set pictureNumberPrevious = picture.length
 * @param {number} pictureNumberPrevious - contains the image-number of the previous image file
 * 
 */
function previousPicture(pictureNumberPrevious) {
    if (pictureNumberPrevious < 1) {
        pictureNumberPrevious = pictures.length
        showSelectedPicture(pictureNumberPrevious);
    } else {
        showSelectedPicture(pictureNumberPrevious);
    }
}


/**
 * function nextPicture(pictureNumberPrevious) - check if the image is in the last position into the array pictures[] and call the 
 * function showSelectedPicture()
 * true - set pictureNumberNext = 1 (first image-number of the image file)
 * @param {number} pictureNumberNext - contains the image-number of the next image file
 */
function nextPicture(pictureNumberNext) {
    if (pictureNumberNext > pictures.length) {
        pictureNumberNext = 1;
        showSelectedPicture(pictureNumberNext);
    } else {
        showSelectedPicture(pictureNumberNext);
    }
}