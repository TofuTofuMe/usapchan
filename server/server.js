const express = require('express');
const config = require('./config.json');
const app = express();
const port = 3000;

const sql = require('./utils/sqlHandler');

app.set('view engine', 'ejs');

routes = __dirname + '/routes/';
assets = __dirname + '/assets/';

app.get('/', (req, res) => {
    res.render('index.ejs', {college_name: config.college_name});
});

app.use('/college', require(routes + 'collegeRouter'));
app.use('/forum', require(routes + 'forumRouter'));

app.use(express.static(assets));
app.use(express.static(assets + 'images'));
app.use(express.static(assets + 'scripts'));

app.listen(port, () => {
    console.log('Syncing databases...');
    sql.initDb();
    console.log(`Server listening on ${port}`);
});