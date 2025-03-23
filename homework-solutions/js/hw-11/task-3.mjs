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
  set salary(value) {
    if (!value || value <= 0 || value >= 100000 || typeof value !== 'number') {
      throw new Error('Incorrect salary');
    } else {
      this.#salary = value;
    }
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  #programmingLanguages = [];
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, 'Developer', salary);
    this.#programmingLanguages = programmingLanguages;
  }
  get programmingLanguages() {
    return this.#programmingLanguages;
  }
  addProgrammingLanguage(language) {
    if (!language || typeof language !== 'string') {
      throw new Error('Language should be string');
    }
    this.#programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  #teamSize = 0;
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, 'Manager', salary);
    this.#teamSize = teamSize;
  }
  get teamSize() {
    return this.#teamSize;
  }

  increaseTeamSize() {
    this.#teamSize++;
  }
}

class Designer extends Employee {
  #designTools = [];
  profession = 'Designer';
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, 'Designer', salary);
    this.#designTools = designTools;
  }
  get designTools() {
    return this.#designTools;
  }
  addDesignTool(tool) {
    if (!tool || typeof tool !== 'string') {
      throw new Error('Tool should be a string');
    }
    this.#designTools.push(tool);
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
    const unique = this.#employees.find(
      (element) => element._firstName === employee._firstName && element._lastName === employee._lastName,
    );
    if (unique) {
      throw new Error('Employee with this firstName and lastName already exists');
    }

    this.#employees.push(employee);
  }

  findEmployeeByName(firstName) {
    if (typeof firstName !== 'string') {
      throw new Error(`Employee with firstName "${firstName}" should be 'string'`);
    }
    const foundEmployee = this.#employees.find((employee) => employee.firstName === firstName);

    if (!foundEmployee) {
      throw new Error(`Employee with firstName "${firstName}" not found`);
    }
    return foundEmployee;
  }

  #getEmployeeIndex(firstName) {
    const index = this.#employees.findIndex((employee) => employee.firstName === firstName);
    if (index === -1) {
      throw new Error('Index not found');
    }
    return index;
  }

  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((total, employee) => total + employee.salary, 0);
  }

  getEmployeesByProfession(profession) {
    return this.#employees.filter((employee) => employee.profession === profession);
  }
}


const company = new Company('TechCorp', '123-456-789', 'Some Address');

// Создаем сотрудников
const dev1 = new Developer('Alice', 'Smith', 5000); 
const dev2 = new Developer('Bob', 'Brown', 6000); 
const manager1 = new Manager('Charlie', 'Davis', 7000); 
const designer1 = new Designer('Diana', 'White', 5500); 

// Добавляем сотрудников в компанию
company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(manager1);
company.addEmployee(designer1);

console.log('Все сотрудники компании:', company.getEmployees());

// Проверяем добавление сотрудника с неуникальным именем и фамилией
try {
  const duplicateDev = new Developer('Alice', 'Smith', 4000);
  company.addEmployee(duplicateDev); // Ожидаем ошибку
} catch (error) {
  console.log(error.message); // Вывод ошибки при добавлении дубликата
}

console.log('Список сотрудников после добавления дубликата:', company.getEmployees());

// Метод getEmployeesByProfession
console.log('Разработчики:', company.getEmployeesByProfession('Developer')); // Должен вернуть dev1 и dev2
console.log('Менеджеры:', company.getEmployeesByProfession('Manager')); // Должен вернуть manager1
console.log('Дизайнеры:', company.getEmployeesByProfession('Designer')); // Должен вернуть designer1

// Поиск несуществующей профессии
console.log('Аналитики:', company.getEmployeesByProfession('Analyst')); // Ожидаем пустой массив

export { Employee, Company, Designer, Developer, Manager };
