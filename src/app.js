const express = require('express');
const router  = require('./routes');
const { mysqlConnection: MySql } = require('./connection')
const app     = express();
const PORT    = 3000;

app.use(express.json());
app.set('json spaces', 2);

MySql.connect((err) => {
  if (err) throw new Error('Connection refused')

  console.log('Successful connection')
});

app.use(router);

app.listen(PORT, () => console.log('Server on at: ', PORT));