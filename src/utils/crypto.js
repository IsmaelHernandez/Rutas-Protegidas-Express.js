const bcrypt = require('bcrypt') //para encryptar y comparar 

//? funcion para encryptar password
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

//? funcion para comparar password
const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword)
}



module.exports = {
    hashPassword,
    comparePassword,
}