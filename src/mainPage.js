generateGameList();

function generateGameList(){
  fetch('src/games.json')
  .then(response => response.json())
  .then(gamesData => {
      var table = document.getElementById("gamesList");

      for (var key in gamesData) {
          if (gamesData.hasOwnProperty(key)) {
              var game = gamesData[key];
              

              var row = table.insertRow();

              var genCell = row.insertCell(0);
              var picCell = row.insertCell(1)
              var nameCell = row.insertCell(2);
              var consoleCell = row.insertCell(3);

             
              genCell.textContent = game.gen;
              nameCell.textContent = game.name;
              consoleCell.textContent = game.console;

              var img = document.createElement("img");
              img.src = "res/"+ game.link;
              img.alt = "Game Cover";
              picCell.appendChild(img);
          }
      }
  })
  .catch(error => {
      console.error('Error loading the JSON file:', error);
  });
}