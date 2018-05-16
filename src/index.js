import client from 'cheerio-httpcli';
class Main {
  constructor() {
    client.fetch('https://www.google.com/').then(({response}) => {
      console.log(response);
    })
  }
}

global.main =  () => {
  new Main();
};