const express    = require('express');
const userRouter  = require('./routes/userRouter');
// const phoneRouter = require('./routes/phoneRouter');
const app         = express();
const PORT        = 3000;

app.use(express.json());
app.set('json spaces', 2);

app.use(userRouter);
// app.use(phoneRouter);

app.listen(PORT, () => console.log('Server on at: ', PORT));