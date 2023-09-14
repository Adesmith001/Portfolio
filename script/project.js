const images = ["/images/mw 2 logo.png", "/images/Xpose Redesign(2).png", "/images/Bag.png", "/images/11.jpg", "/images/1.jpg", "/images/2.jpg"];
let currentImageIndex = 0;

const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const imageCounter = document.getElementById("image-counter");
const thumbnailContainer = document.getElementById("thumbnail-container");

function updateImage(index) {
    currentImage.src = images[index];
    currentImage.alt = `Image ${index + 1}`;
    imageCounter.textContent = `${index + 1} / ${images.length}`;
    highlightThumbnail(index);
}

function highlightThumbnail(index) {
    const thumbnails = thumbnailContainer.querySelectorAll("img");
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add("selected-thumbnail");
        } else {
            thumbnail.classList.remove("selected-thumbnail");
        }
    });
}

prevButton.addEventListener("click", () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage(currentImageIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage(currentImageIndex);
    }
});

images.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.addEventListener("click", () => {
        currentImageIndex = index;
        updateImage(currentImageIndex);
    });
    thumbnailContainer.appendChild(thumbnail);
});

updateImage(currentImageIndex);

//For Github Repositories 
const repositoryData = [
    { url: "https://github.com/Adesmith001/Canva-Visuals-Remastered-", name: "Canvas Visuals" },
    { url: "https://github.com/Adesmith001/Ochexagon-Clone", name: "Ochexagon-Clone" },
    { url: "https://github.com/Adesmith001/Walls-and-Gates-Clone", name: "Walls and Gates clone" },
    { url: "https://github.com/Adesmith001/Contact-Form", name: "Contact Form" },
    { url: "https://github.com/Adesmith001/To-do-list", name: "To do List" }
];

let currentRepoIndex = 0;

const prevRepoButton = document.getElementById("prev-repo-button");
const nextRepoButton = document.getElementById("next-repo-button");
const repoCounter = document.getElementById("repo-counter");
const repositoryName = document.getElementById("repository-name");

function updateRepository(index) {
    const repoData = repositoryData[index];
    repoCounter.textContent = `${index + 1} / ${repositoryData.length}`;
    repositoryName.textContent = repoData.name;
    repositoryName.href = repoData.url;
}

prevRepoButton.addEventListener("click", () => {
    if (currentRepoIndex > 0) {
        currentRepoIndex--;
        updateRepository(currentRepoIndex);
    }
});

nextRepoButton.addEventListener("click", () => {
    if (currentRepoIndex < repositoryData.length - 1) {
        currentRepoIndex++;
        updateRepository(currentRepoIndex);
    }
});

updateRepository(currentRepoIndex);
//Hamburger Icon
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', function() {
        console.log('Hamburger menu clicked');
        navbar.classList.toggle('open');
    });
});