let hoveredTile = null;

        // Listen for the hover effect and keep track of the hovered tile
        const tiles = document.querySelectorAll('.x1');
        tiles.forEach(tile => {
          tile.addEventListener('mouseenter', () => {
            hoveredTile = tile;
          });
          tile.addEventListener('mouseleave', () => {
            hoveredTile = null;
          });
        });

        // Listen for keypress (X and O)
        window.addEventListener('keydown', (event) => {
          if (hoveredTile && hoveredTile.textContent === '') {
            if (event.key.toUpperCase() === 'X') {
              hoveredTile.textContent = 'X';
            } else if (event.key.toUpperCase() === 'O') {
              hoveredTile.textContent = 'O';
            }
            checkWinner();
          }
        });

        // Check for a winner
        function checkWinner() {
          const tilesArray = [
            tile1.textContent,
            tile2.textContent,
            tile3.textContent,
            tile4.textContent,
            tile5.textContent,
            tile6.textContent,
            tile7.textContent,
            tile8.textContent,
            tile9.textContent
          ];

          const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6]  // Diagonal from top-right to bottom-left
          ];

          for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (tilesArray[a] && tilesArray[a] === tilesArray[b] && tilesArray[a] === tilesArray[c]) {
              alert(`Player ${tilesArray[a]} wins!`);
              resetBoard();
              return;
            }
          }

          if (tilesArray.every(tile => tile !== '')) {
            alert("It's a draw!");
            resetBoard();
          }
        }

        function resetBoard() {
          tiles.forEach(tile => {
            tile.textContent = '';
          });
        }