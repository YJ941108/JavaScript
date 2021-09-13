const express = require('express');
const { restart } = require('nodemon');
const path = require('path');

let value = 0;
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    
});

app.get('/', (req, res, next) => {
    console.log('GET / 요청시에서만 실행됩니다.');
    next();
}, (req, res) => {
    ++value
    throw new Error(`${value} 에러는 에러 처리 미들웨어로 갑니다.`)
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'),'번 포트에서 대기 중');
});