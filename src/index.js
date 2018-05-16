class Main {
  constructor() {
    Logger.log('hello');
  }
}

global.main =  () => {
  new Main();
};