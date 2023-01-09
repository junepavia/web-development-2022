let age: number = 28;
if (age < 50 )
    age += 10;
console.log(age)
//2 main types assignment =explicit & implicit
let numbers: number[] =[]     //explicit
let firstName: "missy"      // implicit
// tuple
let user: [number,string] = [1,'missy'];       //restricted by 2 values only
//enum
/* const small=1;     grouped using enum
   const medium=2;
   const large= 3; */
const enum Size{ Small=1, Medium,Large}
let mySize: Size = Size.Medium;
console.log(mySize)
// function
function calculateTax( income:number, taxYear= 2022): number {
    if ( taxYear < 2022)
    return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000);
//objects
  /* let employee: {
    readonly id: number,
    name: string;
    retire:(date: Date) => void
} = {                             // assigning object 
    id: 1,
    name:'missy',
    retire: (date: Date) => {
        console.log(date);
    }
} */
//type Elias                   //DRY principle
type Employee = {                      //single place and u can annotate again in other places
    readonly id: number,
    name: string;
    retire:(date: Date) => void
}
let employee: Employee = { 
    id: 1,
    name:'missy',
    retire: (date: Date) => {
        console.log(date);
    }
}            
//union Type |
function kgToLbs( weight: number | string ): number{
    //narrowing
    if (typeof weight === 'number')
       // weight.
       return weight * 2.2;
    else   //{ weight.}
    return parseInt(weight) *2.2;
}
kgToLbs(10);
kgToLbs('10kg');
// intersection type &
type  Draggable = { 
    drag: () => void
};
type Resizable = {
    resize: () => void
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget= {
    drag: () => {},
    resize: () => {}
}
// Literal types          ( assign to specific value & limit value)
type Quantity = 50 | 100;
let quantity : Quantity = 100;
//nullable types
function greet(name: string|null) {
    if (name)
    console.log(name.toUpperCase());
    else 
    console.log ('Hola!');
}
greet(null);
// optional chaining
//nullish coaelscing ??
let speed : number| null=null;
let ride = {  //falsy ( undefined,null, '',false, 0 )
    //speed !==  null ? speed: 30 simplify by ??
    speed: speed ?? 30         //30 will be the default value if speed is not null
}
// type assertion
 /*let phone =<HTMLInputElement>   documentElementById('phone') //as HTMLInputElement;
//HTMLElement
//HTMLInputElement
phone.value  */
//type unknown
function render( document:unknown){
// narrowing
if(typeof document === 'string'){
    document.toUpperCase();
}
//document.move();
//document.fly();
//document.whateverWeWant();
}
//never type
function processEvents() //:never 
{ 
    let count = 0
    while(count < 100){
        console.log("test: ", count)
        count++
    }
}
processEvents();
console.log("test")
console.log('Hello Missy');

class Account{
 readonly id: number;            // read only= cannot assign to this property
 owner: string;
 balance: number; 
 nickname?: string;     // optional = not required but only optional

constructor( id:number,owner:string,balance:number){  //to initialize,constructor is a special function
    this.id = id;
    this.owner = owner;
    this.balance = balance;
}
deposit(amount:number):void {
   if (amount <= 0) 
      throw new Error('Invalid amount');
      //record transaction
      this.balance += amount;
}
  //  private calculateTax(){ }    // access control key words public,private,protect
}                                  // can only access inside the class
let account= new Account( 1,'Missy',0);
account.deposit(100);
console.log(typeof account);  //typeof is an object
//account.

/* //Parameter properties
constructor(public readonly id:number,
            public owner:string,
            private _balance:number){ 
   // this.id = id;
   // this.owner = owner;
   //this.balance = balance;} */
//Getter & setter 
 /*class Student {
	constructor(
       public name: string,
       public semester: number,
       public course: string ) {
	}
	public get courses() {     // Getter method = knowns as accessor
		return this.course;
	}
	public set courses( thecourse: string) {    //setter = known as mutator
		this.course = thecourse;
	}
}
// Access any property of the Student class,
let student = new Student ("Missy", 8, "Web Development" );
// Setter call
student.course = "Data structure";
// Getter call
console.log("Course purchased is " + student.courses); */     //student
//index signature
class SeatAssignment {
// A1,A2, ...
// missy,may, ...
//index signature property
[seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = 'missy';
seats.A2 = 'may';
//Static_members
 class Ride {
    private static _activeRides: number = 0;
    start() { Ride._activeRides++;}
    stop() { Ride._activeRides--;}
   
    static get activeRides() {
        return Ride._activeRides;
    }
}
 let ride1= new Ride();
 ride1.start();

 let ride2 = new Ride();
 ride2.start();

 console.log(Ride.activeRides);
 // inheritance
 /*class Person{
    constructor( public firstName: string,public lastName: string){
      public get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
          walk() {
           console.log('Walking');
        }
    }
    class Student extends Person {
        constructor(public studentId: number, firstName: string,lastName: string) {
           super(firstName,lastName); 
        }
    
        takeTest() {
           console.log('Taking a test');
        }
        }
//let student = new Student(1, 'missy','missy@gmail.com') 
//method Overriding
class Teacher extends Person{
    override get fullName() {
        return 'Professor' + super.fullName;
    }
}
//let teacher= new Teacher('Missy', 'Cabrera');
//console.log(teacher.fullName);
// Polymorphism
class Principal extends Person{
    override get fullName() {
        return 'Principal' + super.fullName;
    }
}
printNames([
    new Student(1, 'missy','cabrera'),
    new Teacher('Missy', 'Cabrera'),
    new Principal('misung','cabrera')
])
function printNames(people: Person[]) {
 for(let person of people)
 console.log(person.fullName);
}*/
//Abstract Class
abstract class Shape {
constructor(public color: string){}

abstract render(): void;
}
class Circle extends Shape{
    constructor( public radius: number,color: string){
        super(color);
    }
    override render(): void {
        console.log('Rendering a circle');
    }
}
//let shape = new Shape('red');
//shape.render();

// Interface            //more concise and shorter compared to abstract
interface Calendar {
name: string;
addEvent(): void;
removeEvent(): void;
}
 interface CloadCalendar extends Calendar{
    sync():void;
 }
   class GoogleCalendar implements Calendar {
       constructor( public name: string){}
       addEvent(): void {
           throw new Error("Method not implemented.");
       }
       removeEvent(): void {
           throw new Error("Method not implemented.");
       }
   }
   //Generic Classes
class KeyValuePair<K,V>{
    constructor( public key: K,public value: V){}
}
let pair = new KeyValuePair('1','a');
pair.value
//Generic function
class ArrayUtils {
    static wrapInArray<T>(value:T){
      return[ value]; 
    }
}
//let numbers = ArrayUtils.wrapInArray(1);

//Generic Interfaces
//http:mywebsite.com/users
//http:mywebsite.com/products
interface Result<T> {
data: T | null,
error: string | null
}
function fetch<T>(/*url:string*/): Result<T>{
  return { data: null, error:null};
}
interface User {
    username: string;
}
interface Product {
    title: string;
}
//let result = fetch<User>('url');
//let result = fetch<Product>('url');
//result.data

//Generic contraints
class Person {
    constructor( public name:string){}
}
class Customer extends Person { 
}
function echo<T extends Person>(value:T):T {
    return value;
}
echo(new Customer('a'))
//Extending Generic Classes
interface Product{
    name:string;
    price: number;
}
class Store <T>{
  protected _objects: T[]= [];

  add(obj:T): void{
   this._objects.push(obj);
  }
 /* //T is product
  // keyof T=> 'name'.|.'price'
  find(property: keyof T, value:unknown ): T | undefined {            //keyof
    return this._objects.find( obj => obj[property] === value);   
   }*/
}
let store = new Store<Product>();
//store.add({name:'a',price: 1});
//store.find('name','a');
//store.find('price','1');
//store.find('NonExistingProperty','1');
  //pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}}
 //restrict the generic type parameter
class SearchableStore<T extends { name: string}> extends Store<T>{
find(name:string): T | undefined {
 return this._objects.find( obj => obj.name === name);   
}}
// fix the generic type parameter
class ProductStore extends Store<Product> {
 filterByCategory(/*category:string*/): Product[]{
   return [];
 }
}
//Type Mapping
/*interface Product{
    name: string;
    price: number;
} */
type ReadOnly<T> ={
    //type mapping
    readonly [K in keyof T]: T[K]
}
type Optional<T> ={
   [K in keyof T]?: T[K]
}
type Nullable<T> ={
    [K in keyof T]: T[K] | null
 }


