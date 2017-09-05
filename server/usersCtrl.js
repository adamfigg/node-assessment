const userData = require('../userData.json');

module.exports = {

    // //1.
    getAll: (req, res) => {
        if (Object.keys(req.query).length == 0) {
            res.status(200).send(userData)
        }

        let key = Object.keys(req.query);
        // create an empty arr
        let fav = []
        let age = []
        let lastname = []
        let email = []

        if (key[0] === 'lastname') {
            userData.map(function (user) {
                if (user.last_name == req.query.lastname) {
                    lastname.push(user)
                }
            })
            setTimeout(function () {
                res.status(200).send(lastname)
            }, 300)
        }

        if (key[0] === 'email') {
            userData.map(function (user) {
                if (user.email == req.query.email) {
                    email.push(user)
                }
            })
            setTimeout(function () {
                res.status(200).send(email)
            }, 300)
        }
        if (key[0] === 'age') {
            userData.map(function (user) {
                if (user.age < req.query.age) {
                    age.push(user)
                }
            })
            setTimeout(function () {
                res.status(200).send(age)
            }, 300)
        }
        if (key[0] === 'favorites') {
            userData.map(function (user) {
                if (user.favorites.includes(req.query.favorites)) {
                    fav.push(user)
                }
            })
            setTimeout(function () {
                res.status(200).send(fav)
            }, 300)
        }
    },


    //2.
    getUserById: (req, res) => {
        if ((userData[req.params.id - 1]) !== undefined) {
            res.status(200).send(userData[req.params.id - 1])
        } else {
            if (userData[req.params.id - 1] == undefined) {
                res.status(404).json(null)
            }
        }
        //     
    },


    //3.
    getAdmins: (req, res) => {
        let admins = []
        userData.filter(function (user) {
            if (user.type === "admin") {
                admins.push(user)
            }
        })
        setTimeout(function () {
            res.status(200).send(admins)
        }, 3000)
    },


    //4.
    getNonAdmins: (req, res) => {
        let nonadmins = []
        userData.filter(function (user) {
            if (user.type !== "admin") {
                nonadmins.push(user)
            }
        })
        setTimeout(function () {
            res.status(200).send(nonadmins)
        }, 3000)
    },


    //5.
    getUsersByType: (req, res) => {
        let lotsOfUsers = []
        userData.filter(function (user) {
            if (user.type == req.params.usertype) {
                lotsOfUsers.push(user)
            }
        })
        setTimeout(function () {
            res.status(200).send(lotsOfUsers)
        }, 300)
    },


    //6.
    putUsersId: (req, res) => {
        let initialUser = userData[req.params.id - 1]
        let updatedUser = Object.assign(initialUser, req.body)
        res.status(200).send(userData)
    },

    //7.
    postUsers: (req, res) => {
        let newPersonid = userData.length + 1
        let newPerson = req.body
        let newPersonAdded = Object.assign({ id: newPersonid }, newPerson)
        userData.push(newPersonAdded)
        res.status(200).send(userData)

    },

    //8.
    deleteUsers: (req, res) => {
        let removed = userData.splice(req.params.id - 1, 1);
        res.status(200).send(removed[0])
    }

}