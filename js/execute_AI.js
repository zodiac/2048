importScripts('tile.js', 'grid.js');

function send_debug(m) {
  postMessage({
    debug: m
  });
}

onmessage = function (e) {
  if (e.data.command == 'get_ai_move') {
    var grid = new Grid(4, e.data.cells);
    postMessage({
      move: next_move(grid, send_debug)
    });
  } else if (e.data.command == 'move') {
    e.data.grid.__proto__ = Grid.prototype;
    on_move(e.data.grid, send_debug);
  } else if (e.data.command == 'reload') {
    eval.apply(self, [e.data.source_code]);
    send_debug("loaded " + e.data.source_code.length + ' bytes of source');
  }
};