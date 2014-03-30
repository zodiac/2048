var gm;
window.requestAnimationFrame(function () {
  gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
