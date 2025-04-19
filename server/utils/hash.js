const bcryptjs = require('bcryptjs')

const hash = async (password) => {
    const hashed = bcryptjs.hashSync(password, 20)
    return hashed
}

const compare = (row, hashed) => {
    return bcryptjs.compareSync(row, hashed)
}

const bcrypt = {
    compare,
    hash
}

module.exports = bcrypt