import 'babel-polyfill';
import dotenv from 'dotenv';
import runner from './runner';
dotenv.config();

runner();
exports.main = async (req, res) => {
  await runner();
  res.sendStatus(200);
};
