function User(email, name) {
  this.email = email
  this.name = name
}

function Admin(...args) {
  User.apply(this, args)
}

User.prototype.speak = function() {
  console.log(this.name)
}
const userOne = new User("user@ad.com", "Sauce")
const admin = new Admin("saura@ad.com", "Red")

Admin.prototype = Object.create(User)

console.log(userOne.name.length)