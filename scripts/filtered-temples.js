document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const templeCards = document.getElementById('temple-cards');
  const menuLinks = document.querySelectorAll('#menu li a');

  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.textContent = menu.classList.contains('open') ? '✖' : '☰';
  });

  const temples = [
      {
          name: "Temple 1",
          location: "Location 1",
          dedicated: "1899-01-01",
          area: 95000,
          imageUrl: "images/temple1.jpg"
      },
      {
          name: "Temple 2",
          location: "Location 2",
          dedicated: "2001-01-01",
          area: 85000,
          imageUrl: "images/temple2.jpg"
      },
      {
          name: "Temple 3",
          location: "Location 3",
          dedicated: "1999-01-01",
          area: 5000,
          imageUrl: "images/temple3.jpg"
      },
      {
          name: "Temple 4",
          location: "Location 4",
          dedicated: "1888-06-15",
          area: 120000,
          imageUrl: "images/temple4.jpg"
      },
      {
          name: "Temple 5",
          location: "Location 5",
          dedicated: "2005-03-12",
          area: 8000,
          imageUrl: "images/temple5.jpg"
      },
      {
          name: "Temple 6",
          location: "Location 6",
          dedicated: "2015-05-25",
          area: 110000,
          imageUrl: "images/temple6.jpg"
      }
  ];

  const displayTemples = (templeList) => {
    templeCards.innerHTML = '';
    templeList.forEach(temple => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      img.src = temple.imageUrl;
      img.alt = temple.name;
      img.loading = "lazy";

      figcaption.innerHTML = `
        <h3>${temple.name}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      `;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      templeCards.appendChild(figure);
    });
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = e.target.getAttribute('data-filter');

      let filteredTemples = temples;

      if (filter === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
      } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
      } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      }

      displayTemples(filteredTemples);
    });
  });

  displayTemples(temples); // Display all temples initially
});
