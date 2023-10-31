class Person
{
constructor(name,age,salary,gender)
{
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.gender = gender;
}
}
var Person1 =new Person("santhosh","21","30000","male")
var Person2 =new Person("vignesh","26","40000","male")
console.log(`All the person names are
             "Person1" :${Person1.name}
             "Person2" :${Person2.name}`);
console.log(`All the person age are
             "Person1" :${Person1.age}
             "Person2" :${Person2.age}`);             