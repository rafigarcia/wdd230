//get the date and display last modified


const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

const todaysdate = new Date();
const year = todaysdate.getFullYear();

document.getElementById("year").textContent = year;

const lastModifiedTimestamp = document.lastModified;
const lastmodifiedDate = new Date(lastModifiedTimestamp);

document.getElementById("lastModified").textContent = lastmodifiedDate.toLocaleDateString("en-US", options);



// set banner to meetings wednesday

const currentDate = new Date().getDay();
const banner = document.getElementById("banner");


var displayBanner = function() {
    if (currentDate < 4) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

displayBanner();


// Get the close button in the banner
const closeButton = document.getElementById("closeBtn");

closeButton.addEventListener('click', function() {
    banner.style.display = "none";
});