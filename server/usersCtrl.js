const userData = require('../userData.json');

module.exports = {

//1.
getAll: (req, res)=> {
    res.status(200).send(userData)
} ,


//3.
getAdmins: (req, res)=> {
    res.status(200).send(user.type)
}





};

//THIS IS AN EXAMPLE OF WHAT THESE FUNCTIONS SHOULD LOOK LIKE
// app.get('/auth/me', function (req, res) {
//     if (!req.user) {
//       return res.status(200).send("");
//     }
//     else {
      
//       res.status(200).send(req.user);
//     }
//   });