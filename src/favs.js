displayFavPokemon()

async function displayFavPokemon(){
    pokemon = {
        "normal": "eevee",
        "water": "floatzel",
        "fire": "charizard",
        "grass": "lurantis",
        "flying": "corviknight",
        "fighting": "mienshao",
        "fairy": "sylveon",
        "bug": "scizor",
        "psychic": "mewtwo",
        "ghost": "mimikyu-disguised",
        "dark": "grimmsnarl",
        "ice": "froslass",
        "ground": "clodsire",
        "rock": "tyrantrum",
        "steel": "tinkaton",
        "dragon": "dragapult",
        "electric": "zeraora",
        "posion": "toxtricity-amped"
    }

    const typesDiv = document.getElementById("types");

    for (const type in pokemon) {
        if (pokemon.hasOwnProperty(type)) {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon[type]}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                const pokemonName = data.species.name;

                const typeDiv = document.createElement("div");
                typeDiv.className = "type";

                const img = document.createElement("img");
                img.src = data.sprites.front_default;
                img.alt = pokemonName;

                const typeTitle = document.createElement("p");
                typeTitle.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}`;
                typeTitle.className = "typeTitle";

                const pokeName = document.createElement("p");
                pokeName.textContent = `${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}`;
                pokeName.className = "pokeTitle";

                const typeText = document.createElement("p");
                typeText.textContent = data.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join('/')

                typeDiv.appendChild(typeTitle);
                typeDiv.appendChild(pokeName);
                typeDiv.appendChild(img);
                typeDiv.appendChild(typeText);
                typesDiv.appendChild(typeDiv);

            } catch (error) {
                console.error(`Error fetching data for ${pokemonName}:`, error);
            }
        }
    }
}