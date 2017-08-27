var express = require('express');
var app = express();

var users = [
    'Alice',
    'Bob',
    'Carol',
    'David',
    'Eve',
    'Isaac',
    'Mallory',
    'Oscar',
    'Peggy',
    'Trudy'
];

app.get('/user', function(req, res) {
    res.send(users.join('\n'));
});

app.listen(3001);
