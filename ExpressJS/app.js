console.clear();
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(4000, () => console.log("Server Started"));


