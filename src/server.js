import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createTinyServer } from 'tiny-universal';

import App from './App';
import Routes from './Routes';

const template = fs.readFileSync('./index.html');

const app = express();

app.use(createTinyServer(App, Routes, template));

app.listen(8080);
