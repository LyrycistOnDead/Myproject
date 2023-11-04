const express = require('express');
const app = express();
const port = 5000;

const routes = require('./routes');

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Сервер Express запущен на порту ${port}`);
});