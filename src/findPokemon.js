const form = document.getElementById("pokemonForm");
const pokemonInfoDiv = document.getElementById("pokemonInfo");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const pokemonName = document.getElementById("pokename").value;
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

  fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
          const pokemonInfo = `
              <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
              <img src="${data.sprites.front_default}" alt="${data.name}">
              <p>Typy: ${data.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')}</p>
              <p>Numer w pokedexie: ${data.id}</p>
              <p>Wzrost: ${data.height/10} m</p>
              <p>Waga: ${data.weight/10} kg</p>
          `;
          pokemonInfoDiv.innerHTML = pokemonInfo;
      })
      .catch(error => {
          pokemonInfoDiv.innerHTML = `<p>Pokemon not found.</p>`;
      });
});