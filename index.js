//importar vaiaveis do server
var server = require('./config/server');
var app = server.app;
var porta = server.porta;

//setar ejs como engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setar rota index.ejs
app.get('/',(req, res)=>{
    res.render('index');
});


app.listen(porta);