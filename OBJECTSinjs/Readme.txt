In JavaScript, we have some built-in data structures like arrays, objects, maps, and sets.

Using objects, we can store properties. Within properties, we have key:value pairs. A key is also known as an "identifier".
Firstly, the basic syntax for creating an object:

let objectName->person = {
    // properties:- key:value pairs
    // e.g., 
    name: "Balu",
    age: 18,
    city: "kklr"
    // ...
};
In the above example, key -> name, value -> Balu.

And there are some rules to name the keys:

Only alphanumeric characters, _, and $ are allowed.
Keys cannot start with numbers.
Do's:

name
_name
name$
name12

Don'ts:

12name
my name

After creation, to access the properties of an object, we can use "Dot notation" and "Bracket notation".
So, from the above example, we see how to access properties.

Dot notation:

console.log(person.name);
// Output: Balu

Bracket notation:

console.log(person['name']);
// Output: Balu
These are the ways to access properties from an object.

Non-identifiers can be made into identifiers by using "".
For example:

"1": "value"
"my name": "Ramu"
Up to now, we've stored values as either numbers or strings, but there's no restriction; we can also store arrays, functions, and objects as values.

