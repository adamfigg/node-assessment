const express = require('express');
const bodyParser = require('body-parser');
const usersCtrl = require('./usersCtrl');

const app = express();
app.use(bodyParser.json());

//1.
app.get('/api/users', usersCtrl.getAll)

//2.
app.get('./api/users:id', usersCtrl.getAll)

//3.
app.get('./api/admins', usersCtrl.getAdmins)

//4.
app.get('./api/nonadmins', usersCtrl.getNonAdmins)

//5.
app.get('./api/user_type/usertype:', userCtrl.getUsersByType)

//.6
app.put('./api/users/id:', usersCtrl.putUsersId)

//.7
app.post('./api/users', usersCtrl.postUsers)

//8.
app.delete('./api/users/id:', usersCtrl.deleteUsers)

const port = 3000;
app.listen(port, () => { console.log(`Server be listening on port ${port}.`)});