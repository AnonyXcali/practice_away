class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  login() {
    console.log(this.email)
    return this //for chaining.
  }
}

class Admin extends User {
  deleteUser(user) {
    return users.filter(u => u.email !== user.email)
  }
}

let users = [newUser]
const newUser = new User("Saurav", "hahah@asd.com")
newUser.login()