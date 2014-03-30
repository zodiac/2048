function send_debug(m) {
  postMessage({
    debug: m
  });
}

onmessage = function (e) {
  if (e.data.command == 'turn') {
    postMessage({
      move: next_move(e.data.grid, send_debug)
    });
  } else if (e.data.command == 'reload') {
    eval.apply(self, [e.data.source_code]);
    send_debug("loaded " + e.data.source_code.length + ' bytes of source');
  }
};