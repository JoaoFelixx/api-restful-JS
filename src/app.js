const express    = require('express');
const { router } = require('./routes/router');
const app        = express();
const PORT       = 3000;

app.use(express.json());
app.set('json spaces', 2);
app.use(router);

app.listen(PORT, () => console.log('Server on at: ', PORT));