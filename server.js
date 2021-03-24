
  
const express = require('express');

const app = express();

app.use(express.static('./dist/champions'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/champions/'}),
);



app.listen(process.env.PORT || 8080);
