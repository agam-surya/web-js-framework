const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require('./connections')
const response = require("./response")

app.use(bodyParser.json())

app.get('/get', (req, res) => {
  nama = req.query.nama
  const sql = 'select * from barang where nama = ' + db.escape(nama)
  db.query(sql, (error, result) => {
    response(200, result, "success", res)
  })
})
app.post('/post', (req, res) => {
  if (req.body.name === 'agam') {
    const sql = 'select * from barang'
    db.query(sql, (error, result) => {
      response(200, result, "success", res)
    })

  } else {
    res.send({
      "data": req.body,
      "message": "gagal"
    })
  }

})
app.put('/put', (req, res) => {
  data = {
    "msg": "success",
    'kata': 'hello world'
  }
  res.send(data)
})

app.delete('/delete', (req, res) => {
  data = {
    "msg": "success",
    'kata': 'hello world'
  }
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})