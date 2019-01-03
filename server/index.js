const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});