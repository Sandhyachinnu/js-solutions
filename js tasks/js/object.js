// Problem 1 : Part A

// Playing with JSON object"s Values:
//1
// Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
// Write a code to get the below details of Fluffyy so that
// I can take him to the vet.

let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat sandwich"],
    weight: 8,
    furcolor: "white"
    },
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    },]
    }
    console.log(cat);
    
    // Basic Tasks to play with JSON
    
    
    // Add height and weight to Fluffy
    cat.height=100;
    cat.weight=50;
    console.log(cat.height,cat.weight);

    // Fluffy name is spelled wrongly. Update it to Fluffyy
    cat.name="Fluffyy";
    console.log(cat.name);

    // List all the activities of Fluffyy"s catFriends.
    cat.catFriends.forEach(friend => {
        console.log(friend.activities);
    })

    // Print the catFriends names
      cat.catFriends.forEach(friend => {
       console.log(friend.name);
    });

    // Print the total weight of catFriends
    const totalWeight = cat.catFriends.reduce((sum, friend) => sum + friend.weight, 0);
    console.log(totalWeight);
       
    // Print the total activities of all cats (op:6)
    const mainCatCount = cat.activities.length;
    const friendsCount = cat.catFriends.reduce((total, friend) => total + friend.activities.length, 0);
    const totalactivities = mainCatCount + friendsCount;
    console.log(totalactivities);

    // Add 2 more activities to bar & foo cats
    cat.catFriends.forEach(friend => {
        if (friend.name === "bar") {
            friend.activities.push("nap", "chase laser");
        }
    });
    
    cat.catFriends.forEach(friend => {
        if (friend.name === "foo") {
            friend.activities.push("play with string", "climb tree");
        }
    });
    console.log(cat.catFriends);

    // Update the fur color of bar
    cat.catFriends.forEach(friend => {
        if(friend.name === "bar") {
            friend.furcolor="gray";
        }
    })
   console.log(cat.catFriends);
    
    // Problem 1 : Part B :
    
    // Iterating with JSON object"s Values
    
    // Below is some information about my car. As you can see, I am not the best driver.
    // I have caused a few accidents.
    // Please update this driving record so that I can feel better about my driving skills.
    
    
    let myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    },
    ]
    }
    
    // Question to work on the Iteration with JSON
    
    // 1. Loop over the accidents array. Change atFaultForAccident from true to false.
    myCar.accidents.forEach(accident => {
        accident.atFaultForAccident = false;
    });
    console.log(myCar.accidents);  

    // 2. Print the dated of my accidents
    myCar.accidents.forEach(myCar => {
        console.log(myCar.date);
    })
    
    // Real challenges starts here:bowtie:
    
    // Problem 2 :
    
    // Parsing an JSON object"s Values:
    
    // 1.Write a function called "printAllValues" which returns an newArray of all the input object"s values.
    // Input (Object):
    
    // let object1 = {name: "RajiniKanth", age: 33, hasPets : false};
    // Output:
    // ["RajiniKanth", 33, false]
    
    // Sample Function proto:
    
    // let obj = {name : "RajiniKanth", age : 33, hasPets : false};
    function printAllValues(obj) {
        return Object.values(obj);
    }
    // Example usage
    let object1 = { name: "RajiniKanth", age: 33, hasPets: false };
    
    const res_1 = printAllValues(object1);
    console.log(res_1);
    
    
    
    // Problem 3:
    
    // Parsing an JSON object"s Keys:
    // Write a function called "printAllKeys" which returns an newArray of all the input object"s keys.
    // Example Input:
    // {name : "RajiniKanth", age : 25, hasPets : true}
    // Example Output:
    // ["name", "age", "hasPets"]
    // Sample Function proto:
    
    function printAllKeys(obj) {
     return Object.keys(obj);
    }
    let object2 = {name:"John", age:25, hasPets: true};

    const res_2=printAllKeys(object2);
    console.log(res_2);
    
    
    // Problem 4 :
    
    // Parsing an JSON object and convert it to a list:
    
    // Write a function called "convertObjectToList" which converts an object literal into an array of arrays.
    // Input (Object):
    // let object = {name: "ISRO", age: 35, role: "Scientist"};
    // Output:
    // [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]
    // Sample Function proto:
    // let obj = {name: "ISRO", age: 35, role: "Scientist"};
    function convertListToObject(obj) {
        return Object.entries(obj);
    }
    let object3= {name:"ISRO", age:35, role:"Scientist"};
    const list=convertListToObject(object3);
    console.log(list);
    
    
    // Problem 5: ( 5 mins):
    
    // Parsing a list and transform the first and last elements of it:
    // Write a function "transformFirstAndLast" that takes in an array, and returns an object with:
    // 1) the first element of the array as the object"s key, and
    // 2) the last element of the array as that key"s value.
    
    // Input (Array):
    // let array = ["Hi", "I", "am", "Geek"];
    // Output:
    // let object = {
    // HI : "Geek"
    // }
    // Sample Function proto:
    // let arr = ["HI", "I", "am", "a geek"];
    
    function transformFirstAndLast(arr)
     {
        if (arr.length === 0) {
            return {}; // Return an empty object for an empty array
        }
        const firstElement = arr[0];
        const lastElement = arr[arr.length - 1];
        return {
            [firstElement]: lastElement
        };
    }
    const array_1=["HI","I","am"," a geek"];
    const res_3=transformFirstAndLast(array_1);
    console.log(res_3);    
    
    // Problem 6 :
    
    // Parsing a list of lists and convert into a JSON object:
    // Write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
    // Input (Array):
    // let array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    // Output:
    // let object = {
    // make : "Ford"
    // model : "Mustang",
    // year : 1964
    // }
    // Sample Function proto:
    // let arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    function fromListToObject(arr) {
        let obj = {};
        arr.forEach(pair => {
            obj[pair[0]] = pair[1];
        });
        return obj;
    }
    let array_2 = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
    let new_object = fromListToObject(array_2);

    console.log(new_object);
    
    // Problem 7 :
    
    // Parsing a list of lists and convert into a JSON object:
    // Write a function called "transformGeekData" that transforms some set of data from one format to another.
    // Input (Array):
    // let array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    
    // Output:
    // [
    // {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
    // {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
    // ]
    
    // Sample Function proto:
    // let arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    function transformEmployeeData(arr) {
        let obj={};
    arr.forEach(pair => {
        obj[pair[0]] = pair[1];
    });
    return obj;
   }
    let tranformEmployeeList = [[[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]]];
    let new_obj1=transformEmployeeData(tranformEmployeeList);
    console.log(new_obj1);
    
    // Problem 8: (10 — 20 mins):
    
    // Parsing two JSON objects and Compare:
    
    // Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    
    // Write an "assertObjectsEqual" function from scratch.
    // Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
    // It is OK to use JSON.stringify().
    
    // Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
    
    // Success Case:
    // Input:
    // let expected = {foo: 5, bar: 6};
    // let actual = {foo: 5, bar: 6}
    // assertObjectsEqual(actual, expected, "detects that two objects are equal");
    // Output:
    // Passed
    
    // Failure Case:
    // Input:
    // let expected = {foo: 6, bar: 5};
    // let actual = {foo: 5, bar: 6}
    // assertObjectsEqual(actual, expected, "detects that two objects are equal");
    // Output:
    // FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}
    
    // let expected = {foo: 5, bar: 6};
    // let actual = {foo: 5, bar: 6}
    function assertObjectsEqual(actual, expected, testName){
        const actualStr = JSON.stringify(actual);
        const expectedStr = JSON.stringify(expected);
        if (actualStr === expectedStr) {
            console.log("Assertion Passed: Objects are Equal");
        } else {
            console.log("Assertion Failed: Objects are not Equal");
        }
    }
    let expected1 = { foo: 5, bar: 6 };
    let actual1 = { foo: 5, bar: 6 };
    assertObjectsEqual(actual1, expected1, "detects that two objects are equal");

    
    let expected2 = { foo: 6, bar: 5 };
    let actual2 = { foo: 5, bar: 6 };
    assertObjectsEqual(actual2, expected2, "detects that two objects are equal");

    let expected3 = { foo: 6, bar: 7 };
    let actual3 = { foo: 6, bar: 7 };
    assertObjectsEqual(actual3, expected3, "checks for equality of two objects with the same content");
    
    
    // Problem 9 :
    
    // Parsing JSON objects and Compare:
    
    // I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer
    // let securityQuestions = [
    // {
    // question: "What was your first pet"s name?",
    // expectedAnswer: "FlufferNutter"
    // },
    // {
    // question: "What was the model year of your first car?",
    // expectedAnswer: "1985"
    // },
    // {
    // question: "What city were you born in?",
    // expectedAnswer: "NYC"
    // }
    // ]
    function chksecurityQuestions(securityQuestions,question,answer) {
        const foundQuestion = securityQuestions.find(q => q.question === question);
        if (foundQuestion) {
            return foundQuestion.expectedAnswer === answer;
        }
        return false;    
    }
    let securityQuestions = [
        {
            question: "What was your first pet's name?",
            expectedAnswer: "FlufferNutter"
        },
        {
            question: "What was the model year of your first car?",
            expectedAnswer: "1985"
        },
        {
            question: "What city were you born in?",
            expectedAnswer: "NYC"
        }
    ];
    
    // //Test case1:
    
    let question = "What was your first pet's name?";
    let answer  =  "FlufferNutter";
    let status = chksecurityQuestions(securityQuestions, question, answer);
    console.log(status); // true
    
    // //Test case2:
    
    let ques = "What city were you born in?";
    let ans  =  "USA";
    let status1 = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status1); // false
    
    // Problem 10 :
    
    // Parsing JSON objects and Compare:
    // Write a function to return the list of characters below 20 age
    
    let students = [
    {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56}
    ];
    function returnMinors(students)
    {
        return students.filter(student => student.age < 20);  
    }
    console.log(returnMinors(students));
    