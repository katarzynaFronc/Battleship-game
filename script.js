const view = {
  displayMessage: function (msg) {
    const messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function (location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

view.displayMiss("board--00");
view.displayHit("board--34");
view.displayMiss("board--55");
view.displayHit("board--12");
view.displayMiss("board--25");
view.displayHit("board--26");
