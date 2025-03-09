import { Employee, Company } from '../../../homework-solutions/js/hw-11/task-1.mjs';

describe('[JS] - [HW 11] - Task 1', () => {
  describe('Employee class', () => {
    let emp;
    beforeEach(() => {
      emp = new Employee('John', 'Doe', 'Developer', 3000);
    });
    test('Should correctly create an employee and access fields', () => {
      expect(emp.firstName).toBe('John');
      expect(emp.lastName).toBe('Doe');
      expect(emp.profession).toBe('Developer');
      expect(emp.salary).toBe(3000);
    });

    test('Should update salary using setter and retrieve using getter', () => {
      emp.salary = 4000;
      expect(emp.salary).toBe(4000);
    });

    test('Should throw an error when setting invalid salary', () => {
      expect(() => (emp.salary = -500)).toThrow();
    });

    test('getFullName() should return the full name', () => {
      expect(emp.getFullName()).toBe('John Doe');
    });
  });

  describe('Company class', () => {
    let company, emp, emp2;

    beforeEach(() => {
      emp = new Employee('John', 'Doe', 'Developer', 3000);
      emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
      company = new Company('Tech Corp', 73737743, 'Main Street');
    });

    test('Should correctly create a company and access fields', () => {
      expect(company.title).toBe('Tech Corp');
      expect(company.phone).toBe(73737743);
      expect(company.address).toBe('Main Street');
    });

    test('addEmployee() should add employees to the company', () => {
      company.addEmployee(emp);
      expect(company.getEmployees()).toEqual([emp]);
    });

    test('addEmployee() should throw an error for invalid employee', () => {
      expect(() => company.addEmployee({})).toThrow();
    });

    test('getEmployees() should return all employees', () => {
      company.addEmployee(emp);
      company.addEmployee(emp2);
      expect(company.getEmployees()).toEqual([emp, emp2]);
    });

    test('getInfo() should return the correct company information', () => {
      company.addEmployee(emp);
      company.addEmployee(emp2);
      const info = company.getInfo();
      expect(info).toBe('Компания: Tech Corp\nАдрес: Main Street\nКоличество сотрудников: 2');
    });
  });
});
