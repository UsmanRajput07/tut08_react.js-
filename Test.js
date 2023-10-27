class A {
  // 1 properties/variable
  name = "sahil"; // variable declaration + initialization
  course = ""; // variable declare + initialize
  surname; // only ariable declare
  state;

  // 2 constructor() fun
  constructor() {
    // the role of the constructor is to initilize the properties
    this.address = "hakamshah"; // this is fun we can declare + initialize the variable by using this keyword
    this.surname = "siddiqui";
    this.course = "BCA";
    this.year = "3";
  }

  // 3 metthod
  show() {
    console.log(`${this.name} ${this.surname}`); // this is internal obj of the class
  }
  setstate(data) {
    this.state = data;
  }
  showdata() {
    console.log(this.state);
  }
}

class B extends A {
  // 1 properties/variable
  friend1;
  friend2 = "";

  // 2 constructor() fun
  constructor(frnd4) {
    // friend 3 this a formal parameter
    super();
    this.friend1 = "usmanRajput";
    this.friend2 = "Aniket";
    this.friend3 = "shivam";
    this.friend4 = frnd4;
  }
  listfriend() {
    console.log(this.friend1);
    console.log(this.friend2);
    console.log(this.friend3);
    console.log(this.friend4);
  }
}
let obj2 = new B("anshul"); // actual arrugument
obj2.listfriend();
obj2.show();
obj2.setstate({
  name: "anil",
  course: "react",
});
obj2.showdata();

// lets create the object of the class
// let obj = new className;

// let obj = new A();

// this is obj is external obj of the class
// object.member

// obj.show();

// . this is a member function
