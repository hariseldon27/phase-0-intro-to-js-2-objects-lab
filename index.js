// Write your solution in this file!
const employee = {
 name: "JoJo",
 streetAddress: "123 CandyCane Lane", 
}

//4 functions

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdated = { ...employee };
    employeeUpdated[key] = value;
    return employeeUpdated;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    //console.log(employee);
    return employee;
}
//destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Poop");


function deleteFromEmployeeByKey(employee, key) {
    const employeeLessKey = {...employee};
    delete employeeLessKey[key];
    console.log(employeeLessKey);
    return employeeLessKey;
}

//deleteFromEmployeeByKey(employee, "streetAddress");

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
