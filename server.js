const express = require('express')
const app = express()
const port = 3001

const merchant_model = require('./merchant_model')

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.3:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
//PUT
app.get('/', (req, res) => {
  merchant_model.getMerchants()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(404).send(error);
    })
})

//GET

app.get('/merchants/:id', (req, res) => {
  merchant_model.getMerchantById(req, res)
    .then(response => {
      res.status(200).json(response)
    }).catch(error => {
      res.status(404).send('Sorry, cant find that')
    })
})


//POST
app.post('/merchants', (req, res) => {
  merchant_model.createMerchant(req.body)
    .then(response => {
      res.status(200).end()
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

//DELETE
app.delete('/merchants/:id', (req, res) => {
  merchant_model.deleteMerchant(req, res)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})


//UPDATE
app.put('/merchants/:id', (req, res) => {
  merchant_model.updateMerchant(req, res).then(response => {
    res.status(200).send('User modified')
  }).catch(err => {
    res.status(500).send(err);
  })
})


app.listen(port, '192.168.1.3', () => {
  console.log(`App running on port ${port}. 
     http://192.168.1.3:3001
    `)
})