//UC14 - Using RegEx to check about id, salary, gender and date
class EmployeePayrollData{

    //constructor
    constructor(id, name, salary, gender, startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    //Getters and setters
    getId(){ return this.id; }
    setId(id){
        let idRegex = RegExp('^[1-9][0-9]*$');
        if (idRegex.test(id))
            this.id = id;
        else
            throw "ID is Incorrect";
    }

    getName(){ return this.name; }
    setName(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name))
            this.name = name;
        else
            throw "NAME is Incorrect";
    }

    getSalary(){ return this.salary; }
    setSalary(salary){
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if (salaryRegex.test(salary))
            this.salary = salary;
        else
            throw "SALARY is Incorrect";
    }

    getGender(){ return this.gender; }
    setGender(gender){
        let genderRegex = RegExp("^[F|M]$");
        if (genderRegex.test(gender))
            this.gender = gender;
        else 
            throw "GENDER is Incorrect";
    }

    getStartDate(){ return this.startDate; }
    setStartDate(startDate){
        if(startDate <= new Date())
            this.startDate = startDate;
        else
            throw "START DATE is Incorrect";
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Id = " + this.id + ",\tName = " + this.name + ",\tSalary = " + this.salary +
         ",\tGender = " + this.gender + ",\tStart Date = " + employeeDate;
    }
}
//calling the constructor
let employeePayrollData = new EmployeePayrollData(1, "Pikachu", 87654);
console.log(employeePayrollData.toString());

let newemployeePayrollData = new EmployeePayrollData(4, "Zlatan", 50000, "M", new Date());
console.log(newemployeePayrollData.toString());

//creating employee object with invalid inputs
try {
    let employee = new EmployeePayrollData(0, "Jack", -5000, "X", new Date("2023-03-30"));
    console.log(employee.toString());
} catch (e) {
    console.error(e);
}