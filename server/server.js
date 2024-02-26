const express = require('express');
const config = require('./config.json');
const app = express();
const port = 3000;

const sql = require('./utils/sqlHandler');
const nlp = require('./utils/nlpHandler');

app.set('view engine', 'ejs');

routes = __dirname + '/routes/';
assets = __dirname + '/assets/';

app.get('/', (req, res) => {
    res.render('index.ejs', {collegeName: config.collegeName});
});

app.use('/college', require(routes + 'collegeRouter'));
app.use('/forum', require(routes + 'forumRouter'));
app.use('/chat', require(routes + 'chatRouter'));

app.use(express.static(assets));
app.use(express.static(assets + 'images'));
app.use(express.static(assets + 'scripts'));

app.listen(port, async () => {
    console.log('Syncing databases...');
    await sql.initDb();
    await nlp.initNlp();
    console.log(`Server listening on ${port}`);
});
