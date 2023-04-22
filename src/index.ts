import express from 'express';
import strategy from './gof/strategy/TestController';
import cor from './gof/chain-of-responsability/CorController';
const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        "message": "hello world"
    })
})

app.use('/', strategy);
app.use('/', cor);
app.listen(3000);