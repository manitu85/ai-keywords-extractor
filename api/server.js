/* eslint-disable unicorn/prefer-module */
import path from 'node:path';

import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { Configuration, OpenAIApi } from 'openai';

if (process.env.NODE_ENV !== 'production') dotenv.config();
console.log('OPENAI_API_SECRET', process.env.OPENAI_API_KEY);

//* Open AI Config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

export const openai = new OpenAIApi(configuration);

//* Express config
const app = express();
app.use(express.json()); // I think you don't need when you have bodyParser
//* Middlewares
app.use(helmet());
app.use(helmet.crossOriginResourcesPolicy({ policy: 'cross-origin' }));
app.use(morgan('common')); // logger
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
//* Cors
app.use(cors());
app.options('*', cors());

// App Routes
// app.use('/api', aiRoutes);

app.get('/api/test', async (req, res) => {
  res.status(200).send({
    message: `Hello from Openai API + ${Date.now()}`
  });
});

// route: api/keywords

app.post('/api/keywords', async (req, res) => {
  try {
    const { prompt } = req.body; // from front-end
    console.log('PROMPT', prompt); // >> text

    if (!prompt) {
      return res.sendStatus(400);
    }

    const gptResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Act as/Take a role as Marketing Expert persona with 5 years of experience. Make me... ${prompt}`,
      temperature: 0.5,
      max_tokens: 64, // 32
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    });

    // axios.post("/https/openai/v1/completion", gptResponse);

    console.log('Bot', gptResponse.data);
    const botResponse = gptResponse.data.choices[0].text;

    if (botResponse) {
      res.status(200).send({
        prompt: botResponse
      });
    }
  } catch (error) {
    console.error('Error:', error?.response.data.error.message);
    res.status(500).send({ error }); // to know what happen on server
    // res.status(500).json({ error: error.message });
  }
});

// Serving static content
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'build')));
  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

//* Server Setup
// const PORT = 8080;
const PORT = process.env.PORT || 8080; // 5000

app.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

// api/
// routes - for api routes
// controllers - for the endpoints
// models - for the schema
// server.js - or index.js
