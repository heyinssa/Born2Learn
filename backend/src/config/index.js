import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();
const env_file =
  process.env.NODE_ENV === 'production'
    ? './env/.env.production'
    : 'env/.env.development';
dotenv.config({ path: path.join(__dirname, env_file) });

function configCheck(key) {
  const value = process.env[key];

  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }

  return value;
}

export default {
  host: {
    port: parseInt(configCheck('HOST_PORT')),
  },
  upload: {
    path: configCheck('UPLOAD_PATH'),
  },
  db: {
    host: configCheck('DB_HOST'),
    port: parseInt(configCheck('DB_PORT')),
    user: configCheck('DB_USER'),
    database: configCheck('DB_DATABASE'),
    password: configCheck('DB_PASSWORD'),
    log: configCheck('DB_LOG'),
  },
};
