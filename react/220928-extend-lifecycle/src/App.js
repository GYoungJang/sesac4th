
function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        
      </header>
    </div>
  );
}

export default App;

class Student {
  constructor(name, school, age, num) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.num = num;
  }
  getInfo(){
    return {n : this.name, s : this.school, a : this.age, u : this.num}
  }
}
class Kim extends Student{
  
  
}
class Lee extends Student{
  constructor(grade,...rest){
    super(...rest)
    this.grade = grade
  } 
}

let kim = new Kim('kim','SeSAC',29, 12);
console.log(kim.getInfo());
let lee = new Lee(1,2,3,4,5);
console.log(lee);

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h
  }
  getArea() {
    return this.w * this.h
  }
}
class Square extends Shape{
}

class Triangle extends Shape{
  constructor(x, y, name) {
    super(x, y);
    this.name = name
  }
  getArea() {
    return this.w * (this.h/2);
  }
}

let shape1 = new Shape(5,4);
console.log(shape1.getArea());

let shape2 = new Shape(2,3);
console.log(shape2.getArea());

let shape3 = new Shape(4,8);
console.log(shape3.getArea());

let shape4 = new Triangle(5,6);
console.log(shape4.getArea());

