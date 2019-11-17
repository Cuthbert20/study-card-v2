const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res, next){
        try{
            const db = req.app.get('db')
            const { username } = req.body
            console.log(req.body)
            res.status(200).send({message: "logged In"})
        }
        catch (err){
            res.status(500).send({message: "failed to Register"})
        }
    }
};
