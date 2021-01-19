import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('56789', 10),
    isAdmin: true,
  },
  {
    name: 'Ahmed Ali',
    email: 'Ahmed@example.com',
    password: bcrypt.hashSync('56789', 10),
  },
  {
    name: 'Hassan Omar',
    email: 'Hassan@example.com',
    password: bcrypt.hashSync('56789', 10),
  },
]

export default users