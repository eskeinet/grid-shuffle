(() => {
  const shuffleTiles = (grid) => {
    grid.forEach((tile) => {
      tile.style.order = Math.ceil(Math.random() * grid.length);
    });
  };

  const sortTiles = (grid) => {
    grid.forEach((tile) => (tile.style.order = 1));
  };

  window.onload = () => {
    const shuffle = document.querySelector("#shuffle");
    const sort = document.querySelector("#sort");
    const tiles = document.querySelectorAll("#grid li");

    shuffle.onclick = () => shuffleTiles(tiles);
    sort.onclick = () => sortTiles(tiles);
  };
})();
