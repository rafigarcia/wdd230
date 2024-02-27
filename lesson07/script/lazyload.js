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