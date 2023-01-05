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
class Student {
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
console.log("Course purchased is " + student.courses);
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