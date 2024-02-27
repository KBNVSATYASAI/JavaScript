Objects:- 

In javaScript we have some built-in data structures as arrays,objects,maps and sets.

By using objects we can store the propeerties . With in properties we have key:value pairs.And key is also known as "Identifiers".
Firstly basic syntax for creation of an object:-
                let (objectName)person = {
                     properties;---------->key:value pairs
                     ex:- name:"Balu",
                          age:18,
                          city:"kklr"
                     ...
                };
In above example key->name,value->Balu.

After creation we need to access the propereties of a object so we need to use "Dot notation" and "Bracket notation".
so from above example we see how to access properties.
          Dot notation:-    
                ex:-
                     console.log(person.name);
                o/p:- Balu
            
          Bracket notation:-
                 ex:-
                     console.log(person['name');
                o/p:- Balu
so these are the ways to access the properties from an object.
And we have some rules to name the key they are:-
              1)Only alphanumeric ,_,and $.
              2)And not start with numbers.
   Do's:-
        name
        _name
        name$
        name12
   Dont's:-
        12name 
        my name
And we can make the non identifiers as also identifiers by using "".
   ex:-
       "1":"value" 
       "my name":  "Ramu"  
Up to now we store value as either number or string there is no restriction as we need to store only those types.We can able to store the array,function,and objcet as well.
ex:-
