// let age = 20;
// if (age < 50 )
//     age += 10;

// //types of variables in TS
// let counter = 123_456_789;  // Numbers
// let fname = "ErwinRey";     // String
// let myFeelings = true;      // Boolean
// let course;                 // Any
// let numbers = [1,2,3];      // Array TS automatic guess the data type
// let numbers1 = [];          // Array TS automatic the data is ANY
// //TUPLE
// let user : [number, string] = [1001,'ErwinRey']
// user[0];                     //properties and method if you use dot or period
// // user.                       // Array Methods
// // Enums
// // const small = 1;
// // const medium = 2;
// // const large = 3;
// const enum Size {Small =3,Medium,Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);
// //Functions
// function calculateTax(income:number,  taxYear=2022) : number{
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(6_000);
// //Object
// let employee : {
//      readonly id: number,
//      name: string,
//      retire: (date:Date) =>void
//     }={
//         id:1,
//         name: "Erwin",
//         retire: (date:Date) =>{
//             console.log(date)
//         }
//     }
// // Type aliases
// // type Employee{
// //     readonly id: number,
// //     name: string,
// //     retire: (date:Date) =>void
// // }
// // let employee : Employee
// //    ={
// //        id:1,
// //        name: "Erwin",
// //        retire: (date:Date) =>{
// //            console.log(date)
// //        }
// //    }
// // Union Types
// function kgToLbs(weight:number | string):number {
//     //Narrowing
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseFloat(weight) * 2.2;
// };
// kgToLbs(10);
// kgToLbs("10kg");
// // Intersection Type & ampersand
// type Draggable = {
//     drag: () => void
// };
// type Resizable = {
//     resize: () => void
// };
// type UIWidget = Draggable & Resizable;
//     let textBox: UIWidget = {
//         drag: ()=>{},
//         resize:() =>{}

//     }
// //Literal Types
// //literal (exact,specific)
// type Quantity = 50 | 100 | 51;
// let quantity:Quantity = 51 ;
// type Metric = 'inch' | 'meter';
// //nullable type
// function greet(name:string | null | undefined){
//     if (name)
//     console.log(name.toUpperCase())
//     else
//     console.log("Hi")
// }
// greet(null);
// //Optional Chaining
// type Customer = {
//     birthday:Date
// };
// function getCustomer(id:number): Customer | null| undefined {
//         return id === 0 ? null: {birthday: new Date()}
// }
// let customer = getCustomer(1);
// // if(customer !== null && customer !== undefined)
// //Optional property access operator
// console.log(customer?.birthday);
// // Optional element access operator
// //customer?.[0]
// //Optional call
// let log: any =null;
// log?.('a');
// // the Nullish Coaelscing Operator
// let speed:number | null = null;
// let ride = {
//     //falsy (undifined,null,'',false,0)
//     // nullish Coaelscing Operator
//     speed: speed ?? 30
// }
// //Type Asssertions
// // let phone = <HTMLInputElement> document.getElementById('phone') as HTMLInputElement;
// //  phone.value;
// //The Unknown Type
function render (document:unknown){
    if (typeof document === 'string'){
        document.toLowerCase;
    }
    // document.fly();
    // document.move();
    // document.whatever();
}
// The Never Type
// function reach(message:string):never {
//     while(true){
//         throw new Error(message)
//     }
// }
// reach('...');
// console.log("hellow");
//Creating Class
class Account{
    // readonly id:number;//Read-Only properties
    // owner:string;
    // private _balance:number;
    nickname?:'string';//Optional properties
    constructor(
        public readonly id:number,
        public owner:string,
        private _balance:number){
    }//Parameter Properties
deposit(amount:number):void{
    if (amount <= 0)
        throw new Error("Invalid Amout");
    this._balance += amount;
}
// private calculateTax(){
// }
getBalance() :number{
    return this._balance;
}//Acces Control Keywords

get balance():number{
    return this._balance;
}//Getter & Setter

set balance(value:number){
        if (value <= 0)
        throw new Error("Invalid Amout");
    this._balance += value;
}
}
//Creating Object
let account = new Account(1001,"Erwin",1_000_000);
// console.log(account.balance);
account.balance = 1;

//Index Signature
class SeatAssigment{
    //Index Signature
    [seatNumber: string]:string;
}
let seats = new SeatAssigment();
seats.A1 = "Erwin";
seats['A2']="Al";

//Static Members
class Ride{
    static _activeRides:number = 0;

    start(){Ride._activeRides++;}
    stop(){Ride._activeRides--;}

    static get activeRides(){
        return Ride._activeRides;
    }
}
// console.log(Ride.activeRides);
//Inheretance
class Person{
    constructor(
        public firstName:string,
        public lastName: string
    ){}
    get fullName(){
        return this.lastName+ ','+ this.firstName;
    }
    protected walk (){
        console.log('Walking');
    }
}

class Student extends Person {
    constructor(
        public studentId: number,
         firstName: string,
         lastName:  string
        ){super(firstName,lastName)}
    takeTest(){
        this.walk();
        console.log('Takeing a test');
    }
}

let studen = new Student (1,'Erwin','Jumamil')
//Method Overriding
class Teacher extends Person{
    override get fullName(){
        return 'Professor '+super.fullName;
    }
}
class Principal extends Person{
    override get fullName(){
        return 'Principal '+super.fullName;
    }
}
printNames([
    new Student(1,'Juan','Cross'),
    new Teacher('Erwin','Jumamil'),
    new Principal('Rey','Jumamil'),
    new Teacher('Al','Dragon')
])
function printNames(people:Person[]){
    for (let person of people)
        console.log(person.fullName);
}
//Abstract classes and Methods
abstract class Shape{
    constructor(public color: string){}
    abstract render():void ;
}
class Circle extends Shape{
    constructor(public radius:number,color:string){
        super(color);
    }
    override render(): void {
        console.log('Rendering a Circle')
    }
}
//Interface
// abstract class Calendar  {
//     constructor(public name:string){}
//     abstract addEvent():void;
//     abstract removeEvent():void;
// }

interface Calendar{
    name: string;
    addEvent():void;
    removeEvent():void;
}

interface CloudCalendar extends Calendar{
    sync(): void;
}

class GoogleCalender implements Calendar{
    constructor(public name:string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}
//Generic Classes
class KeyValuePair<K, V>{
    constructor(public key: K,public value:V){}
}
let pair = new KeyValuePair('1','a');
//Generic  Function
class ArrayUtils{
    static wrapInArray<T>(value:T){
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray(1);
//Generic Interface
// interface Results<T> {
//     data:T | null ,
//     error: T | null
// }
// // function fetch<T> (url: string):Results<T>{
// //     return {data:null ,error:null }
// // }
// interface User {
//     username : string;
// }
// interface Product{
//     title:string; 
// }
// let result = fetch<Product>('url');
// // result.data?.title
// //Generic Constraints
// function echo <T extends number | string> (value:T):T {
//     return value;
// }
// echo('1');
// function echo1 <T extends {name:string}> (value1:T):T {
//     return value1;
// }
// echo1({name:'a'});
// interface Person {
//     name:string;
// }
// function echo2 <T extends Person > (value2:T):T {
//     return value2;
// }
// class Person1 {
//     constructor(public name:string){}
// }
// function echo3 <T extends Person1 > (value3:T):T {
//     return value3;
// }
// //Extending Generic Classes
// interface Product{
//     name:string ;
//     price:number;
// }
// class Store <T>{
//     protected _objects : T[] = [];
//     add(obj:T):void{
//         this._objects.push(obj);
//     }
// }

// class CompressibleStore<T> extends Store <T>{
//      compress(){}
// }
//Ristrict the generic  type parameter
// class SearchableStore <T extends {name:string}> extends Store<T>{
//     find (name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name )
//     }
// }
//FIx t he generic type parameter
// class ProductStore extends Store <Product> {
//     filterByCategory (category:string):Product[]{
//         return [];
//     }
// }
// The keyof Operator
interface Product1{
    name:string ;
    price:number;
}
class Store1 <T>{
    protected _objects : T[] = [];
    add(obj:T):void{
        this._objects.push(obj);
    }
    // T is the product
    find(property:keyof T,value: unknown): T |undefined{
        return this._objects.find(obj =>obj[property] === value);
    }
}
let store1 = new Store1 <Product1>();
store1.add({name: 'a',price: 1});
store1.find('name','a');
//Type Mapping
interface Product3{
    name:string ;
    price:number;
}
type ReadOnly<T> = {
    readonly [K in keyof T]:T[K]
}
type Optional<T> = {
    [K in keyof T]?: T[K]
}
type Nullable<T> = {
    [K in keyof T]: T[K] | null
}
let items: ReadOnly<Product3> = {
    name : 'a',
    price: 1
}
//Class Decorators
function Component(constructor:Function){
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () =>{
        console.log('Inserting the component in the DOM')
    }
}
//Parameterized Decorators
type ComponentOptions = {
    selector:string;
}
function Component1 (options:ComponentOptions){
    return (constructor:Function) =>{
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertDOM = () =>{
            console.log('Inserting the component in the DOM')
        } 
    }
}
@Component1({selector:'#my-profile'})
class ProfileComponent {
}
