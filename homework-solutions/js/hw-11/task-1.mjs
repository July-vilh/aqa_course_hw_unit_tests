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
    if (!value || typeof value !== 'string') {
      throw new Error('First Name must be a string');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Last Name must be a string');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Profession must be a string');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(newSalary) {
    if (typeof newSalary !== 'number' || newSalary <= 0) {
      throw new Error('Salary must be > 0');
    }
    this.#salary = newSalary;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
/*const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
*/
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
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee must be an instance of Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
