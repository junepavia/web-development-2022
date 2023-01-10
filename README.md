# web-development-2022

Web development course

# Missy May Cabrera Notes

HTML - index.html
CSS - Javascript.css
Javascript - jsmissy.js
/-external javascript=separates HTML and code,
easier to read and maintain,
files can speed up page loads.

# Brent de Guzman Notes

JavaScript --> to program the behavior of web pages
script --> placed on bottom of body to improve display speed
getElementById() --> use to find HTML element with that Id
innerHTML --> use to modify content in html tag
document.write() --> only for testing
window.alert / alert --> to show an alert box
window.print --> print current page
semicolon --> use to seperate js statement
var,let,const --> to declaire variable
var --> use to run code in older browser
const --> general rule : always use to declare variable -> constant reference
let --> if the variable value can change
hyphen - --> not allowed in js, reserve for subtraction

TypeScript Notes Here
TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.
• Always annotate/declare functions properly
Three Main Primitives Types
STRING - Text values ["" , '', ``]
NUMBER - Whole numbers and floating point values
BOOLEAN - True or False
Special Types
ANY - Disables type checking and effectively allows all types to be used - Avoid using as much as possible
UNKNOWN - Safer alternative to any
NEVER - throws an error whenever it is defined
UNDEFINED/NULL - JavaScript primitives
Type Assignment
EXPLICIT - Declaring the type [let gcash:number = 000_000]
IMPLICIT - TS will guess [let gcash = 000_000] - Also known as infer > shorter, faster to type, and often used when developing and testing
Array
TUPLES - Array with pre-defined lenght&type [advice: limit to 2 value like entries key:value]
ENUM - Special "class" that represents a group of constants [default value = 0 ...]
Advance Types
ALIASES - give a type a new name / defining types with a custom name
UNION - used when a value can be more than a single type, uses narrowing, syntax: |
INTERSECTION - creates new type by combining multiple existing types, syntax: &
LITERAL - defined as a specific string value or values, combined using |
NULLABLE - special type null that has the value null, not useful on its own, combined using | - using null is a common source of error/problem
ASSERTION - mechanism which tells the compiler about the type of a variable
UNKNOWN - assigned to a variable, means that a variable type is not known, uses narrowing method - typescript doesn't allow you to use a variable of unknown type unless you either cast the variable to a known type or narrow its type
OPTIONAL CHAINING - process of searching and calling variables, methods, parameters that might be null or undefined
NULLISH COALESCING - use this operator to provide a fallback value for a value that might be null or undefined
NEVER - represents the type of values that never occur - annotate functions that never return or always throw an error
Classes
Parts of Class :
•Name
•Properties
•Method
METHOD - is a block of code, defined inside a class and only executed when being called
Like function but
Function - block of code that is called by name
Method - called by a name that is associated with an object - able to operate on data that is contained within the class
Modifiers
• readonly - prevent further changes
• public - can be access from any location (default)
• private - prevent access outside class
• protected - allows access within the same class and subclasses
Properties
Typescript property is defined as an alternative annotation for stating the property using a similar name and value as a constructor variable that we need to add at the beginning of a constructor parameter as private or public
GETTER - method inside a class used for getting the value of a Property, syntax is 'get'
SETTER - method runs when we assign a value to the Property, syntax is 'set'
INDEX SIGNATURE - identifies key type for indexing of an object, syntax is '[key:type]type'
STATIC - property that only belong to a class, syntax is 'static' - we call the class name
INHERATANCE - allows us to reuse code, syntax for inherit 'extends' - use 'super()' to call the constructor of base/parent class, also used as reference
OVERRIDE - keyword that allows us to override a method from base/parent class or changing implementation

# Firstname Lastname Notes

# AL Christian Simene

innerHTML--will return our html element as a javascript object, changes the element content
getElementById() -- finds an HTML element
parseINT-- states that, an int (integer) value of an HTML element whose id is firstno gets initialized to firstno.
console.log () ---writes a message to the console. The console is useful for debuggin purposes.
document.write -- creates another document, useful for testing purposes
window.alert -- show visual alert box on the screen whatever we pass to window.alert is displayed to the user in plain text.
A JavaScript function --- a block of JavaScript code, that can be executed when "called". (A set of procedure/instruction)
const -- value should not be changed.
JavaScript counts positions from zero.
The indexOf() method returns the position of the first occurrence of a string in a string
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
The search() method matches a string against a regular expression
returns the index (position) of the first match.
The match() method matches a string against a pattern of characters
The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
The startsWith() method returns true if a string begins with a specified value.
The endsWith() method returns true if a string ends with a specified value.  
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
is a number without a decimal point
A float is a floating-point number, which means it is a number that has a decimal place.
JavaScript uses the + operator to concatenate the strings.
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
A BigInt can not have decimals.
JavaScript Number Methods
Method Description
toString() Returns a number as a string
toExponential() Returns a string, with the number rounded and written using exponential notation.
toFixed() Returns a number written with a number of decimals (rounds a number to a given number of digits.)
toPrecision() Returns a number written with a specified length
ValueOf() Returns a number as a number

# Erwin Rey Jumamil

innerhtml need pa ng id para ma diplays yung string or yung data
document write pag na trigger or ma use nag laod ang pag pero dsiplay na yung value naka input
window alert meron mini box lalabas sa taas
12-06-22
pag gumamit ng external js needed sa script mag input ng source para ma basa nya yung js mo
tapos para na triggger yung function needed mo ng button na onclcick
addinng number and string the number will treat as string
operators are use usually in condition like if switch

# June Rodney Pavia

HTML
CSS
JAVASCRIPT

# Princess Mauricio

PR approved
-CSS

-JAVASCRIPT -create dynamic and interactive web
method - getElementById()
single or double quote, no problem
href- for css
src- for js

<!--html comment-->

/_css comment_/
//js comment

# Bien Marco De Guzman

JavaScript update
JavaScript Variable
var, let, const
JavaScript Operators - (+ \* / -)
JavaScript Expression - (x + 1)
JavaScript Keywords are used to identify actions to be perfomed.
JavaScript Comments - (// /\*\*/)

---

Variables - containers for storing data, variables declared inside a {}
Let - cannot b e redeclared, must be declared before use.
Const - cannot be reassign or redeclared

---

Javascript string - are written with quotes single or double (""/'')
Javascript number - can be written in with or without decimal
EL or ES numbers can be written in exponential (-e)
Boolean can only have 2 values(True or False)
__________________________________________________
Union type - describes a value that can be one of several types. We use the vertical bar ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean .
__________________________________________________
Intersection type - combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. 
__________________________________________________
Type aliases - give a type a new name. 
They are similar to interfaces in that 
they can be used to name primitives and any 
other kinds that you'd have to define by hand otherwise.
__________________________________________________
Nullable types - TypeScript has two special types, null and undefined , that have the values null and undefined respectively.
__________________________________________________
Optional chaining - is defined as the ability to immediately stop running an expression if a part of it evaluates to either null or undefined 
__________________________________________________
Nullish Coalescing Operator - is an alternative to || which returns the right-side expression if the left-side is null or undefined. In contrast, || uses falsy checks, meaning an empty string or the number 0 would be considered false.
__________________________________________________
Type Assertion - Sometimes we know more about the type of a variable than the TypeScript compiler. In
those situations, we can use the as keyword to specify a different type than the one inferred by the compiler.
__________________________________________________
Never type - which indicates the values that will never occur. The never type is used when you are sure that something is never going to occur.
__________________________________________________ 

# Ziegler Azarcon

-HTML zieg.html
-CSS -ziegy.css
-JS -used script tag
