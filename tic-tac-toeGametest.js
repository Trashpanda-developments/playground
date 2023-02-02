var game = es2022.createGame();
game.addPlayer('X');
game.addPlayer('O');
game.addBoard(3, 3);
game.addRule(function(game) {
  var board = game.getBoard();
  var player = game.getCurrentPlayer();
  var move = game.getCurrentMove();
  if (board[move.x][move.y] !== null) {
    return false;
  }
  board[move.x][move.y] = player;
  return true;
});
game.addRule(function(game) {
  var board = game.getBoard();
  var player = game.getCurrentPlayer();
  var move = game.getCurrentMove();
  var x = move.x;
  var y = move.y;
  var i;
  var j;
  var count;
  var win = false;
  // Check horizontal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][y] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check vertical
  count = 0;
  for (i = 0; i < board[x].length; i++) {
    if (board[x][i] === player) {
      count++;
    }
  }
  if (count === board[x].length) {
    win = true;
  }
  // Check diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check anti-diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  if (win) {
    game.setWinner(player);
  }
  return true;
});
/*   var y = move.y;
  var i;
  var j;
  var count;
  var win = false;
  // Check horizontal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][y] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check vertical
  count = 0;
  for (i = 0; i < board[x].length; i++) {
    if (board[x][i] === player) {
      count++;
    }
  }
  if (count === board[x].length) {
    win = true;
  }
  // Check diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check anti-diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  if (win) {
    game.setWinner(player);
  }
  return true;
});
game.addRule(function(game) {
  var board = game.getBoard();
  var player = game.getCurrentPlayer();
  var move = game.getCurrentMove();
  var x = move.x;
  var y = move.y;
  var i;
  var j;
  var count;
  var win = false;
  // Check horizontal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][y] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check vertical
  count = 0;
  for (i = 0; i < board[x].length; i++) {
    if (board[x][i] === player) {
      count++;
    }
  }
  if (count === board[x].length) {
    win = true;
  }
  // Check diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check anti-diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  if (win) {
    game.setWinner(player);
  }
  return true;
});
game.addRule(function(game) {
  var board = game.getBoard();
  var player = game.getCurrentPlayer();
  var move = game.getCurrentMove();
  var x = move.x;
  var y = move.y;
  var i;
  var j;
  var count;
  var win = false;
  // Check horizontal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][y] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check vertical
  count = 0;
  for (i = 0; i < board[x].length; i++) {
    if (board[x][i] === player) {
      count++;
    }
  }
  if (count === board[x].length) {
    win = true;
  }
   // Check diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check anti-diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  if (win) {
    game.setWinner(player);
  }
  return true;
});
game.addRule(function(game) {
  var board = game.getBoard();
  var player = game.getCurrentPlayer();
  var move = game.getCurrentMove();
  var x = move.x;
  var y = move.y;
  var i;
  var j;
  var count;
  var win = false;
  // Check horizontal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][y] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check vertical
  count = 0;
  for (i = 0; i < board[x].length; i++) {
    if (board[x][i] === player) {
      count++;
    }
  }
  if (count === board[x].length) {
    win = true;
  }
  // Check diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check anti-diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  if (win) {
    game.setWinner(player);
  }
  return true;
});
game.addRule(function(game) {
  var board = game.getBoard();
  var player = game.getCurrentPlayer();
  var move = game.getCurrentMove();
  var x = move.x;
  var y = move.y;
  var i;
  var j;
  var count;
  var win = false;
  // Check horizontal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][y] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check vertical
  count = 0;
  for (i = 0; i < board[x].length; i++) {
    if (board[x][i] === player) {
      count++;
    }
  }
  if (count === board[x].length) {
    win = true;
  }
  // Check diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  // Check anti-diagonal
  count = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - i - 1] === player) {
      count++;
    }
  }
  if (count === board.length) {
    win = true;
  }
  if (win) {
    game.setWinner(player);
  }
  return true;
});
 */