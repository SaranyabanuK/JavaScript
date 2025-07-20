const obj = {
  name: "Object",
  printName() {
    console.log(this.name);
  },
};
obj.printName();  

const fn = obj.printName;
fn();            
