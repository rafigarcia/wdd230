

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetsData() {
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let portrait = document.createElement('img');
        let children = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.surname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        children.textContent = `Prophet ${prophet.name} had ${prophet.numofchildren} Children`;

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(portrait);
        card.appendChild(children);
        cards.appendChild(card);
    });
}

getProphetsData();