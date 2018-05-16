import client from 'cheerio-httpcli';

const runner = async () => {
  client.set('debug', true);
  try {
    const URL = process.env.URL;
    const uname = process.env.USER_NAME;
    const pass = process.env.PASS;
    const loginpage = await client.fetch(process.env.URL);
    const loginForm = loginpage.$('m-gheaderReadTxt__text');
    loginForm.each((index, el) => {
      console.log(index);
      console.log(el.text());
    });
    // console.log(loginForm.find('input'));
    // const loginedPage = await loginForm.submit({
    //   login_name: uname,
    //   password: pass
    // });
    // console.log(loginedPage.$('title'));
  } catch (e) {
    console.error(e);
  }
};

export default runner;
