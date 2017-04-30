import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createTinyServer } from 'tiny-universal';

import App from './App';
import Routes from './Routes';

const templateString = fs.readFileSync('./index.html');

const app = express();

app.use(
  createTinyServer({
    clientApp: App,
    routes: Routes,
    template: templateString,
  })
);

app.listen(8080);
