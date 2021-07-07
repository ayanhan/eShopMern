import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Takeshi',
    email: 'takeshi@test.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Suica',
    email: 'suica@test.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users