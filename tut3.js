var student = {
    "name" : "Parthib",
    "rollNo" : "21",
    "room No" : "C-212",
    "marks" : 87,
    "friends" : ["rohan", 'sohan', 'mohan']
};

var testName = student.name;
var testMark = student.marks;
var testRoom = student['room No'];
console.log(testName);
console.log(testMark);
console.log(testRoom);

student.rollNo = "27";
console.log(student.rollNo);

var testAge = student.age = 21;
console.log(testAge);
console.log(student);

delete student.marks;
console.log(student);


function checkProp(val){
    if(student.hasOwnProperty(val))
        return student[val];
    else return "not found";
}

console.log(checkProp("age"));