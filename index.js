const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/sum/:a-:b', function(req, res)
{
  let sum = Number(req.params.a) + Number(req.params.b);
  res.send(String(sum))
})
app.listen(3000);
//asdasda