/* Your Code Here */

let exampleArray=['Sarah',"Whalley","Student",20]
let exampleArray2=["John","Smith","Dev", 40]
let exampleArray3=[['Sarah',"Whalley","Student",20],["John","Smith","Dev", 40]]

class Employee
{
    constructor(array)
    {
        this.firstName=array[0];
        this.familyName=array[1];
        this.title=array[2];
        this.payPerHour=array[3];
        this.timeInEvents=[];
        this.timeOutEvents=[];
    }
}   

function createEmployeeRecord(array)
{
    return new Employee(array)
}

function createEmployeeRecords(arrayOfArrays)
{
    return arrayOfArrays.map(element=>createEmployeeRecord(element))
}

function createTimeInEvent(dateStamp)
{
    this.timeInEvents.push(
    {
        type:"TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return this;
}

function createTimeOutEvent(dateStamp)
{
    this.timeOutEvents.push(
        {
            type:"TimeOut",
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
        })
        return this;
}

function hoursWorkedOnDate(day)
{
    const hourClockedIn=this.timeInEvents.filter(instance=>instance.date===day);
    const hourClockedOut=this.timeOutEvents.filter(instance=>instance.date===day);
    return (hourClockedOut[0].hour-hourClockedIn[0].hour)/100;
}

function wagesEarnedOnDate(day)
{
    return hoursWorkedOnDate.call(this,day)*this.payPerHour;
}

function findEmployeeByFirstName(empArray, name)
{
    const employee=empArray.filter(instance=>instance.firstName===name);
    return employee[0];
}

function calculatePayroll(empArray)
{
    return empArray.reduce((acc, element)=>acc+allWagesFor.call(element),0)
}

///////////////////
// EXAMPLE DATA
//////////////////

let uh =createEmployeeRecords(exampleArray3);
createTimeInEvent.call(uh[0], "2023-02-16 0800");
createTimeOutEvent.call(uh[0], "2023-02-16 1000");
createTimeInEvent.call(uh[1], "2023-02-16 0800");
createTimeOutEvent.call(uh[1], "2023-02-16 1000");


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

