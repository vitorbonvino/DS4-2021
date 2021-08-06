const app = require('express')();

app.listen(3000, (req, res) => {
  console.log('Executando Servidor');
});

app.get('/math/soma', (req, res) => { 
  let a = parseInt(req.query['A']);
  let b = parseInt(req.query['B']);
  let result = 0;
  if ((isNaN(a)) || (isNaN(b))) {
    res.status(400).send('Parâmetro não informado corretamente!');
  } else {
    let result = a + b;
    res.send('Resultado da soma é: ' + result);
  }
});

app.get('/math/divide', (req, res) => {
  let a = parseInt(req.query['A']);
  let b = parseInt(req.query['B']);
  if ((isNaN(a)) || (isNaN(b))) {
    res.status(400).send('Parâmetro não informado corretamente!' + a, b);
  } else {
    try {
      result = (a/b); 
      if (result === Number.POSITIVE_INFINITY) {
         throw new Error(Number.POSITIVE_INFINITY);
      } else {
        res.send('Resultado da divisão é: ' + result);
      }
    }
    catch (e) {
      res.status(500).send('Divisão por 0: ' + e);
    }
  } 

})