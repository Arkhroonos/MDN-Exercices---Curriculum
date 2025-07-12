const displayedImage = document.querySelector('.displayed-img'); /* */
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images =["pic1","pic2","pic3","pic4","pic5"]

/* Declaring the alternative text for each image file */
const altText = {
    "pic1": "image 1",
    "pic2": "image 2",
    "pic3": "image 3",
    "pic4": "image 4",
    "pic5": "image 5"
}

/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}.jpg`);
    newImage.setAttribute('alt', altText[image]);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    });
    thumbBar.appendChild(newImage);
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => { // Correction is needed about the overlay.
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
});