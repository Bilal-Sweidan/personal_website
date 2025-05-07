const bcryptjs = require('bcryptjs')

const hash = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    const hashed = bcryptjs.hashSync(password, salt)
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