function greeting(req, res) {
    let fn = req.query.firstName;
    res.send("Greetings," + fn);
}

function addition(req, res) {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    sum = parseInt(n1) + parseInt(n2);
    res.send(`${n1} plus ${n2} is equal to ${sum}`);
}

const attachService = function (app) {
    app.get('/svc/greeting', greeting);
    app.post('/svc/add', addition);
};

exports.attachService = attachService;