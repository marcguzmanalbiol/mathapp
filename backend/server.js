const bodyParser = require('body-parser');
const app = require('./app');
const config = require('./config');

app.use(bodyParser.json());

if(process.env.NODE_ENV === "test") {
    app.set('port', config.test_port);
    app.listen(app.get('port'), err => {
        if(err) console.error(err);
        console.log(`Server listening on port ${app.get('port')}...`);
    });
} else {
    app.set('port', config.port);
    app.listen(app.get('port'), err => {
        if(err) console.error(err);
        console.log(`Server listening on port ${app.get('port')}...`);
    });
}
