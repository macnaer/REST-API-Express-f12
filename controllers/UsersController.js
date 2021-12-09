
let usersDB = [
    {
        Id: 1,
        Name: "Bill",
        Surname: "Gates",
        Role: "Administrator"
    },
    {
        Id: 2,
        Name: "Bart",
        Surname: "Simpson",
        Role: "User"
    }
]


exports.getUsers = async(req, res, next) => {
    try {
        res.status(200).json(usersDB);
    } catch (error) {
        res.status(400).json({message: "Bad request"})
    }
}
