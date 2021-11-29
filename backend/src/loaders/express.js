import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

export default [
  express.json(), //
  cors({
    origin: true,
    credentials: true,
  }),
  morgan('combined'),
];

// helmet(),
