const url = 'data/rental.json';
const cards = document.querySelector('.cards');
const tabla = document.querySelector('#rentalTableBody');

async function getRentals() {
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    displayRentals(data.rentals);
    displayTable(data.rentals);
}

const displayRentals = (rentals) => {
    rentals.forEach(rental => {
    let card = document.createElement('div');
    let cardImg = document.createElement('div');
    let img = document.createElement('img');
    let info = document.createElement('div');
    let name = document.createElement('h2');
    let people = document.createElement('p');
    let disp = document.createElement('p');
    let start = document.createElement('p');

    img.setAttribute('src', rental.image);
    img.setAttribute('alt', `Picture ${rental.name}`);
    img.setAttribute('width', '490');
    img.setAttribute('loading', 'lazy');
    name.textContent = rental.name;
    people.textContent = `Max People : ${rental.max_person}`;
    disp.textContent = rental.description;
    start.textContent = `Start at ${rental.reservation_half_day}`;
    
    card.className = 'card';
    cardImg.className = 'card-img';
    info.className = 'content'
    
    info.appendChild(name);
    info.appendChild(people);
    info.appendChild(disp);
    info.appendChild(start);

    cardImg.appendChild(img);
    cardImg.appendChild(info);
    card.appendChild(cardImg);
    cards.appendChild(card);
    });
}



const displayTable = (rentals) => {
    let out = "";

    for(let vehicle of rentals) {
        out += `
      <tr>
        <td>${vehicle.name}</td>
        <td>${vehicle.max_person}</td>
        <td>${vehicle.colors}</td>
        <td>${vehicle.vehicles_available}</td>
        <td>$${vehicle.reservation_half_day}</td>
        <td>$${vehicle.reservation_full_day}</td>
        <td>$${vehicle.walk_in_half_day}</td>
        <td>$${vehicle.walk_in_full_day}</td>
      </tr> `;
    }

    tabla.innerHTML = out;
}


getRentals();