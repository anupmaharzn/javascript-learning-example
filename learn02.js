//object in javascript 
//access properites of the object
//add
const mycity = {
    city: 'new york'
};
mycity.city = 'nepali' //change
mycity.popular = true; //simply addd in mycity object

console.log(mycity);


mycity.country = "nepal";

console.log(mycity);

//delete 

delete mycity.country;

console.log(mycity);

//access properites of the object using bracket notation

mycity['notpopular'] = 'india';

console.log(mycity);

//kinda using value of other variable as a key name of object
const countrypropterName = 'country ';

mycity[countrypropterName] = 'pakistan';

console.log(mycity);


const myCity = {
    city: "lalitpur",
    info: {
        popular: true,
        country: "nepal"
    }
};

console.log(myCity.info.popular);

delete myCity.info.popular; //or delete myCity.info["popular"];

console.log(myCity)

//practise and challenges
//great to example for pointer my object and copofmyobject points to same object so same result afther changeing its value
let myobject = {
    a: 10,

};

let copyOfMyObject = myobject;

copyOfMyObject.b = false;

console.log(myobject);
console.log(copyOfMyObject);


let myanother = {
    a: true,
    b: null,
    c: 25
};

console.log(myanother["a"]);

const propertyName = "c";

console.log(myanother[propertyName]); //we get 25

console.log(myanother["propertyName"]); // undefined auxa coz that key name is missing in the object that we created

myanother["new" + "property" + "Name"] = "hello world string concatenation"

console.log(myanother);



//missing properties or non existing properties

const mynext = {
    a: 3,
    b: true,
};

//code exection is not stopped
console.log(mynext.absentProperty); //result undefined

mynext.newPropertyWithUndefinedValue = undefined;
console.log(mynext);
console.log(mynext.newPropertyWithUndefinedValue);


//challenge
let objectwithnestedobject = {};

objectwithnestedobject.nestedobject = {};

objectwithnestedobject.nestedobject.a = null;

const newpropertyname = "b";

objectwithnestedobject.nestedobject[newpropertyname] = true;

console.log(objectwithnestedobject);


//GLOBAL OBJECT : Window for web browser and  global for node.js