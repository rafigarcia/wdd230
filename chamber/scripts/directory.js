 
 const url = 'data/members.json';
 const cards = document.getElementById('cards');

 async function getMembers() {
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    displayMembers(data.members);
 }

 const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
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
    
        image.appendChild(url);

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(image);
        card.appendChild(info);
        cards.appendChild(card);    
    });

 }

 getMembers();