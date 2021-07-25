const express    = require('express');
const { router } = require('./routes/router');
const app        = express();
const PORT       = 3000;

require('./connection/mysqlConnection');

app.use(router)

app.listen(PORT, () => console.log('Server on at: ',PORT))