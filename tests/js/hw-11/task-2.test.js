import { Employee, Company } from '../../../homework-solutions/js/hw-11/task-2.mjs';

describe('[JS] - [HW 11] - Task 2', () => {
  let emp1, emp2, emp3, company;
  const TOTAL_SALARY = 12_000;

  beforeEach(() => {
    company = new Company('Tech Corp', 123456, 'Main Street');
    emp1 = new Employee('John', 'Doe', 'Developer', 3000);
    emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
    emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    company.addEmployee(emp3);
  });

  describe('[FindEmployeeByName()] tests', () => {
    it('Should return the correct employee when a matching name exists', () => {
      const employee = company.findEmployeeByName('Jane');
      expect(employee).toEqual(emp2);
    });

    it('Should throw an error when no matching name exists', () => {
      expect(() => company.findEmployeeByName('Nonexistent')).toThrow();
    });

    it('Should thrown an error for case-sensitive search', () => {
      expect(() => company.findEmployeeByName('jane')).toThrow();
    });
  });

  describe('[removeEmployee()] tests', () => {
    it('should remove the employee with the given first name', () => {
      company.removeEmployee('John');
      expect(company.getEmployees()).toEqual([emp2, emp3]);
    });

    it('should not remove any employee if the name does not exist', () => {
      expect(() => company.removeEmployee('Nonexistent')).toThrow();
      expect(company.getEmployees()).toEqual([emp1, emp2, emp3]);
    });

    it('should not remove employees with matching names in a case-sensitive manner', () => {
      expect(() => company.removeEmployee('jane')).toThrow();
      expect(company.getEmployees()).toEqual([emp1, emp2, emp3]);
    });
  });

  describe('[getTotalSalary()] tests', () => {
    it(`should return "${TOTAL_SALARY}" as total salary of all employees`, () => {
      const totalSalary = company.getTotalSalary();
      expect(totalSalary).toBe(TOTAL_SALARY);
    });

    it('should return 0 if there are no employees', () => {
      company = new Company('Empty Corp', '000-000', 'No Address');
      expect(company.getTotalSalary()).toBe(0);
    });
  });

  describe('Setters', () => {
    let employee;

    beforeEach(() => {
      employee = new Employee('John', 'Doe', 'Developer', 3000); // A valid initial employee
    });

    describe('[Salary]', () => {
      const validSalaries = [
        { value: 5000, expected: 5000 },
        { value: 0.01, expected: 0.01 },
        { value: 9999.99, expected: 9999.99 },
        { value: 4321.25, expected: 4321.25 },
      ];

      test.each(validSalaries)(`should set the salary when the value is (value: $value)`, ({ value, expected }) => {
        employee.salary = value;
        expect(employee.salary).toBe(expected);
      });
      const invalidSalaries = [
        { value: '5000' }, // String
        { value: NaN }, // NaN
        { value: 0 }, // Zero
        { value: -500 }, // Negative
        { value: 10000 }, // Exactly 10000
        { value: 15000 }, // Above upper limit
      ];

      test.each(invalidSalaries)('should throw an error if the salary is invalid (value: $value)', ({ value }) => {
        expect(() => {
          employee.salary = value;
        }).toThrow();
      });
    });

    describe('[First name]', () => {
      const validFirstNames = [
        { value: 'John', expected: 'John' },
        { value: 'Anna', expected: 'Anna' },
        { value: 'Al', expected: 'Al' }, // Minimum length
        { value: 'A'.repeat(50), expected: 'A'.repeat(50) }, // Maximum length
      ];

      test.each(validFirstNames)('should set the first name when valid (value: $value)', ({ value, expected }) => {
        employee.firstName = value;
        expect(employee.firstName).toBe(expected);
      });

      const invalidFirstNames = [
        { value: 'J' }, // Less than 2 characters
        { value: 'J@hn' }, // Contains special characters
        { value: '' }, // Empty string
        { value: 'A'.repeat(51) }, // Exceeds max length
        { value: '12345' }, // Contains numbers
      ];

      test.each(invalidFirstNames)(
        'should throw an error if the first name is invalid (value: $value)',
        ({ value }) => {
          expect(() => {
            employee.firstName = value;
          }).toThrow();
        },
      );
    });

    describe('[Last name]', () => {
      const validLastNames = [
        { value: 'Doe', expected: 'Doe' },
        { value: 'Smith', expected: 'Smith' },
        { value: 'Ab', expected: 'Ab' }, // Minimum length
        { value: 'B'.repeat(50), expected: 'B'.repeat(50) }, // Maximum length
      ];

      test.each(validLastNames)('should set the last name when valid (value: $value)', ({ value, expected }) => {
        employee.lastName = value;
        expect(employee.lastName).toBe(expected);
      });

      const invalidLastNames = [
        { value: '' }, // Empty string
        { value: 'J@hn' }, // Contains special characters
        { value: 'C'.repeat(51) }, // Exceeds max length
        { value: '12345' }, // Contains numbers
      ];

      test.each(invalidLastNames)('should throw an error if the last name is invalid (value: $value)', ({ value }) => {
        expect(() => {
          employee.lastName = value;
        }).toThrow();
      });
    });

    describe('[Profession]', () => {
      const validProfessions = [
        { value: 'Software Engineer', expected: 'Software Engineer' },
        { value: 'Manager', expected: 'Manager' },
        { value: 'HR Specialist', expected: 'HR Specialist' }, // Spaces allowed
        { value: 'A', expected: 'A' }, // Single character
      ];

      test.each(validProfessions)('should set the profession when valid (value: $value)', ({ value, expected }) => {
        employee.profession = value;
        expect(employee.profession).toBe(expected);
      });

      const invalidProfessions = [
        { value: '' }, // Empty string
        { value: 'Developer123' }, // Contains numbers
        { value: 'Designer!' }, // Contains special characters
        { value: ' ' }, // Only spaces
      ];

      test.each(invalidProfessions)(
        'should throw an error if the profession is invalid (value: $value)',
        ({ value }) => {
          expect(() => {
            employee.profession = value;
          }).toThrow();
        },
      );
    });
  });
});
