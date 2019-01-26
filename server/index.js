const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(cors());
app.use(bodyParser());

app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));

app.use('/api/restaurants/', proxy({ target: 'http://3.16.186.40:3003', changeOrigin: true}));

// app.get('/restaurants/:id/menu', (req, res) => {
//   // get all the menu items from the menu server
//   axios.get(`http://ec2-3-16-186-40.us-east-2.compute.amazonaws.com:3003/restaurants/${req.params.id}/menu`)
//   .then(function (req) {
//     res.status(200).send(req.data);
//   })
//   .catch(function (error) {
//     res.status(501).send(error);
//   });
// });

const port = 1337;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


