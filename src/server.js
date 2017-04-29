import React from 'react';
import express from 'express';
import path from 'path';
import { createTinyServer } from 'tiny-universal';

import App from './App';
import Routes from './Routes';
const indexTemplate = './../public/index.ejs';

const app = express();
const tinyServer = createTinyServer(App, Routes, indexTemplate);

app.use(tinyServer);

app.listen(8080);
