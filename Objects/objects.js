let userOne  ={
  email: "ryu@ninjas.com",
  name: "ryu",
  login() {
    console.log(this.email, this.name)
    //this refers to object
  }
} // encapsulation


userOne.name = "blank"
userOne.login()