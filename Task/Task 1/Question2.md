## Task 1:
### 2. Write a blog about objects and their internal representation in JavaScript.
#### Objects:
Objects are one of the most important data types in JavaScript. They are used to store collections of data and can be used to model real-world objects. Objects are created using the "**new Object()**" constructor or using object literals. 
Object literals are the most common way to create objects in JavaScript. They are created using curly braces ({}) and contain a list of key-value pairs. The keys are strings and the values can be any valid JavaScript value, including other objects.
<dl>
  <dt>Example:</dt>
  <dd> const person = {</dd>
  <dd> name: "Arthana",</dd>
  <dd> age: 24,</dd>
  <dd> occupation: "Developer"</dd>
</dl>
The above sample program represents the basic declaration of objects.
Objects can also be created by using the new Object() constructor. The new Object() constructor takes an optional argument, which can be an object literal or a function. If an object literal is passed as an argument, the constructor will create a new object with the same properties as the object literal. If a function is passed as an argument, the constructor will call the function and use the return values as the new object.
<dl>
  <dd>Exampele</dd>
  <dl>
    <dd> const person = new Object({</dd>
    <dd> name: "Arthana",</dd>
    <dd> age: 24,</dd>
    <dd> occupation: "Developer"</dd>
    <dd> });</dd>
  </dl>
</dl>
Objects are reference types, which means that they are stored on the heap. When an object is assigned to a variable, the variable does not store the object itself, but rather a reference to the object. This means that two variables can point to the same object.
<dl>
  <dd>Exampele</dd>
  <dl>
    <dd> const person = {</dd>
    <dd> name: "Arthana",</dd>
    <dd> age: 24,</dd>
    <dd> occupation: "Developer"</dd>
    <dd> };</dd>
    <dd> const person 2 = person 1;</dd>
  </dl>
</dl>

#### Objects and Properties:

A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot notation:
<dl>
<dd>objectNmae.propertyName</dd>
</dl>
Like all JavaScript variables, both the object name (which could be a normal variable) and the property name are case-sensitive. You can define a property by assigning it a value. For example, let’s create an object named myCar and give it properties named make, model, and year as follows:
<dl>
  <dd> Var myCar = new Object();</dd>
  <dd> myCar.make = 'Ford';</dd>
  <dd> myCar.model = 'Mustand';</dd>
  <dd> myCar.year = 1969;</dd>
</dl>
Properties of JavaScript objects can also be accessed or set using a bracket notation (for more details see property accessors). Objects are sometimes called associative arrays since each property is associated with a string value that can be used to access it.

An object property name can be any valid JavaScript string or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime)
