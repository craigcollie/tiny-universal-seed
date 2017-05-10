import React from 'react';
import express from 'express';
import { createTinyServer } from 'tiny-universal';

import config from './tinyConfig';

const app = express();
const tinyServer = createTinyServer(config);

app.use(tinyServer);

app.listen(8080);
