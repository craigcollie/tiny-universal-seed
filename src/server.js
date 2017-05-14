import express from 'express';
import { createTinyServer } from 'tiny-universal';
import path from 'path';

import config from './tinyConfig';

const app = express();
const tinyServer = createTinyServer(config);
const port = process.env.PORT || 8080;

app.use(tinyServer);
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Express is running on ${port}`);
});
