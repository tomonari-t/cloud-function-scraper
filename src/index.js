const osmosis = require('osmosis');
class Main {
  run = async () => {
    const data = await this.get();
    console.log(data);
  }

  get = () => {
    return new Promise((resolve) => {
      osmosis.get('https://www.google.com/')
      .set({ title: 'title' })
      .data((d) => {
        resolve(d);
      });
    })
  }
}

(async () => {
  await new Main().run();
})()