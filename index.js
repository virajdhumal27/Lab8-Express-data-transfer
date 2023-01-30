const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const service = require('./node1/service.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 3333;

app.use(express.static('./public'));
service.attachService(app);

app.listen(port, () => {
    console.log('Server running at http://localhost:3333');
})