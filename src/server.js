import React from 'react';
import express from 'express';
import { createTinyServer } from 'tiny-universal';

import App from './App';
import Routes from './routes/Routes';
const indexTemplate = './../templates/index.ejs';

const app = express();
const tinyServer = createTinyServer(App, Routes, indexTemplate);

app.use(tinyServer);

app.get('/diagnostic', (req, res) => {
  res.send('UP!');
});

app.listen(8080, () => {
  console.log('Server is running on 8080');
});
