const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');



const app = express();

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact');
const successRouter = require('./routes/success');
const errorcontroller =require ('./controllers/error')


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRouter);
app.use('/contact',contactRouter);
app.use('/success',successRouter);

app.use(express.static(path.join(__dirname,'public')));

app.use('/', errorcontroller.geterror);

app.listen(5000);