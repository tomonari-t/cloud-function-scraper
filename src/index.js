import 'babel-polyfill';
import osmosis from 'osmosis';



exports.main = (req, res) => {
  new Main().run();
  res.sendStatus(200);
};
