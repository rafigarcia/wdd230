
const linksURL = 'data/links.json';
const cards = document.getElementById('activities');
var count = 0;

async function getLessons() {
    const request = new Request(linksURL);
    const response = await fetch(request);
    const data = await response.json();
    displayLinks(data.lessons);
}


const displayLinks = (lessons) => {
    lessons.forEach(lesson => {
        count++;
        lesson.links.forEach(link => {
            let hold = document.createElement('li');
            let url = document.createElement('a');

            url.setAttribute('href', link.url);
            url.setAttribute('target', '_blank');

            url.textContent = `${count}: ${link.title}`;

            hold.appendChild(url);
            cards.appendChild(hold);
        });
    });
}


getLessons();

