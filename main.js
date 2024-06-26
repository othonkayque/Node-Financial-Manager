const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/assets'))
app.use(express.urlencoded({ extended:true }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/html/index.html');
})

app.get('/data', (req, res) => {
    res.sendFile(__dirname + '/data.json')
})

app.post('/upload', (req, res) => {
  var titulo_despesa = req.body.titulo_despesa;
  var valor_despesa = req.body.valor_despesa;
  const filePath = 'data.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          return res.status(500).json({ message: 'Erro ao ler o arquivo' });
      }

      let jsonData = [];
      if (data) {
          jsonData = JSON.parse(data);
      }

      jsonData.push({ despesa: titulo_despesa, valor:valor_despesa });

      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
          if (err) {
              return res.status(500).json({ message: 'Erro ao salvar o arquivo' });
          }
          res.redirect('/')
      });
  });
});

app.listen(3333)