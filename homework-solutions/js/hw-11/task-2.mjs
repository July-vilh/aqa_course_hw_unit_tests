class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    const regEx = /^[a-z\s]+$/gi;
    const isValid = regEx.test(value);
    if (!value || typeof value !== 'string') {
      throw new Error('First Name must be a string');
    } else if (value.length < 2 || value.length > 50) {
      throw new Error('Length of the First Name must be from 2 to 50 symbols');
    } else if (!isValid) {
      throw new Error('First Name must consists only Latin letters');
    }
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    const regEx = /^[a-z\s]+$/gi;
    const isValid = regEx.test(value);
    if (!value || typeof value !== 'string') {
      throw new Error('Last Name must be a string');
    } else if (value.length < 2 || value.length > 50) {
      throw new Error('Length of the Last Name must be from 2 to 50 symbols');
    } else if (!isValid) {
      throw new Error('Last Name must consists only Latin letters');
    }
    this._lastName = value;
  }
  get profession() {
    return this._profession;
  }

  set profession(value) {
    const regEx = /^[a-z\s]+$/gi;
    const isValid = regEx.test(value);
    if (!value || typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Profession must be a non-empty string');
    } else if (!isValid) {
      throw new Error('Profession must consist only of Latin letters and spaces');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    if (!newSalary || typeof newSalary !== 'number') {
      throw new Error('Salary must be a number');
    } else if (newSalary <= 0 || newSalary >= 10000) {
      throw new Error('Salary should be > 0 and max salary = 10000');
    }
    this.#salary = newSalary;
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  getEmployees() {
    return this.#employees;
  }
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee must be an instance of Employee');
    }
    this.#employees.push(employee);
  }

  findEmployeeByName(firstName) {
    const foundEmployee = this.#employees.find((employee) => employee.firstName === firstName);
    if (!foundEmployee) {
      throw new Error(`Employee not found`);
    } else if (typeof firstName !== 'string') {
      throw new Error(`firstName "${firstName}" should be 'string'`);
    }
    return foundEmployee;
  }
  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
  }

  #getEmployeeIndex(firstName) {
    const index = this.#employees.findIndex((employee) => employee.firstName === firstName);
    if (index === -1) {
      throw new Error('Index not found');
    }
    return index;
  }
  getTotalSalary() {
    return this.#employees.reduce((total, employee) => total + employee.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
