function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const osmosis = require('osmosis');
class Main {
  constructor() {
    var _this = this;

    this.run = _asyncToGenerator(function* () {
      const data = yield _this.get();
      console.log(data);
    });

    this.get = () => {
      return new Promise(resolve => {
        osmosis.get('https://www.google.com/').set({ title: 'title' }).data(d => {
          resolve(d);
        });
      });
    };
  }

}

_asyncToGenerator(function* () {
  yield new Main().run();
})();