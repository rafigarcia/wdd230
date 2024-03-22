 
 const url = 'data/members.json';
 const cards = document.querySelector('.cards');

const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');


 async function getMembers() {
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    displayMembers(data.members);
 }

 const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let cardText = document.createElement('div');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let image = document.createElement('img');
        let url = document.createElement('a');
        let info = document.createElement('p');
        
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        image.setAttribute('src', member.image_url);
        image.setAttribute('alt', `Portrait of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '490');
        image.setAttribute('height', '350');
        
        url.setAttribute('href', member.website_url);
        url.setAttribute('target', '_blank');

        info.textContent = member.description;
    
        
        card.appendChild(image);
        cardText.appendChild(name);
        cardText.appendChild(address);
        cardText.appendChild(phone);
        cardText.appendChild(info);
        card.appendChild(cardText);
        cards.appendChild(card);    
    });

 }

 getMembers();


 gridButton.addEventListener('click', () => {
   cards.classList.add('gridDirectory');
   cards.classList.remove('list');
 });
 
 listButton.addEventListener('click', () => {
   cards.classList.add('list');
   cards.classList.remove('gridDirectory');
 });