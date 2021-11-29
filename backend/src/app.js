import express from 'express';
import https from 'https'; //http 모듈 대신 https 모듈을 사용합니다.
import fs from 'fs';

import config from './config/index.js';
import { Sequelize } from './models/database.js';
import routes from './routes/index.js';

import expressLoader from './loaders/express.js';
import errorLoader from './loaders/error.js';

import cookieParser from 'cookie-parser';

const app = express();

app.use(...expressLoader);
app.use(cookieParser());
app.use(function (req, res, next) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header(
      'Access-Control-Allow-Methods',
      'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    );
    res.header('Access-Control-Expose-Headers', 'Set-Cookie');
    next();
  });
  next();
});
app.use('/api', routes());

app.use(...errorLoader);

Sequelize.sync();

var sslOptions = {
  //   1. PEM을 사용하여 인증하는 경우(cert, ca, key파일을 사용하여 인증하는 경우)
  //  확장자명이 .pem인 경우도 있습니다.
  ca: fs.readFileSync('src/certificate.crt'),
  key: fs.readFileSync('src/private.key'),
  cert: fs.readFileSync('src/certificate.crt'),
};

https
  .createServer(sslOptions, app, (req, res) => {
    console.log('필요한 코드 넣기');
  })
  .listen(config.host.port, () => {
    console.log(`서버 포트: ${config.host.port} ...`);
  });

//app.listen(config.host.port);
