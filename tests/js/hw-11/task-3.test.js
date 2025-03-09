import { Employee, Company, Manager, Designer, Developer } from '../../../homework-solutions/js/hw-11/task-3.mjs';

describe('[JS] - [HW 11] - Task 3', () => {
  describe('[Developer] class', () => {
    test('should initialize with correct values', () => {
      const dev = new Developer('Alice', 'Smith', 80000, ['JavaScript']);
      expect(dev.firstName).toBe('Alice');
      expect(dev.lastName).toBe('Smith');
      expect(dev.salary).toBe(80000);
      expect(dev.programmingLanguages).toEqual(['JavaScript']);
    });

    test('should add a programming language', () => {
      const dev = new Developer('Alice', 'Smith', 80000);
      dev.addProgrammingLanguage('Python');
      expect(dev.programmingLanguages).toContain('Python');
    });

    test('should throw an error when adding an invalid programming language', () => {
      const dev = new Developer('Alice', 'Smith', 80000);
      expect(() => dev.addProgrammingLanguage('')).toThrow();
      expect(() => dev.addProgrammingLanguage(123)).toThrow();
    });
  });

  describe('[Manager] class', () => {
    test('should initialize with correct values', () => {
      const manager = new Manager('Bob', 'Brown', 90000, 5);
      expect(manager.firstName).toBe('Bob');
      expect(manager.lastName).toBe('Brown');
      expect(manager.salary).toBe(90000);
      expect(manager.teamSize).toBe(5);
    });

    test('should increase team size', () => {
      const manager = new Manager('Bob', 'Brown', 90000, 5);
      manager.increaseTeamSize();
      expect(manager.teamSize).toBe(6);
    });
  });

  describe('[Designer] class', () => {
    test('should initialize with correct values', () => {
      const designer = new Designer('Diana', 'White', 75000, ['Photoshop']);
      expect(designer.firstName).toBe('Diana');
      expect(designer.lastName).toBe('White');
      expect(designer.salary).toBe(75000);
      expect(designer.designTools).toEqual(['Photoshop']);
    });

    test('should add a design tool', () => {
      const designer = new Designer('Diana', 'White', 75000);
      designer.addDesignTool('Figma');
      expect(designer.designTools).toContain('Figma');
    });

    test('should throw an error when adding an invalid design tool', () => {
      const designer = new Designer('Diana', 'White', 75000);
      expect(() => designer.addDesignTool('')).toThrow();
      expect(() => designer.addDesignTool(123)).toThrow();
    });
  });

  describe('addEmployee Method', () => {
    let company;
    beforeEach(() => {
      company = new Company();
    });
    test('should add a valid employee', () => {
      const dev = new Developer('Alice', 'Smith', 80000, ['JavaScript']);
      company.addEmployee(dev);
      expect(company.getEmployees()).toContain(dev);
    });

    test('should throw an error if the employee is not an instance of Employee', () => {
      expect(() => company.addEmployee({})).toThrow();
    });

    test('should throw an error if employee with the same name already exists', () => {
      const dev1 = new Developer('Alice', 'Smith', 80000);
      const dev2 = new Developer('Alice', 'Smith', 90000);
      company.addEmployee(dev1);

      expect(() => company.addEmployee(dev2)).toThrow();
    });
  });

  describe('[getEmployeesByProfession] method', () => {
    let company;
    beforeEach(() => {
      company = new Company();
    });

    test('should return all employees of a given profession', () => {
      const dev = new Developer('Alice', 'Smith', 80000, ['JavaScript']);
      const manager = new Manager('Bob', 'Brown', 90000, 5);
      const designer = new Designer('Diana', 'White', 75000, ['Figma']);
      company.addEmployee(dev);
      company.addEmployee(manager);
      company.addEmployee(designer);

      const developers = company.getEmployeesByProfession('Developer');
      const managers = company.getEmployeesByProfession('Manager');
      const designers = company.getEmployeesByProfession('Designer');

      expect(developers).toEqual([dev]);
      expect(managers).toEqual([manager]);
      expect(designers).toEqual([designer]);
    });

    test('should return an empty array for a profession with no employees', () => {
      const dev = new Developer('Alice', 'Smith', 80000);
      company.addEmployee(dev);

      const managers = company.getEmployeesByProfession('Manager');
      expect(managers).toEqual([]);
    });

    test('should return an empty array for an invalid profession', () => {
      const dev = new Developer('Alice', 'Smith', 80000);
      company.addEmployee(dev);

      const invalidProfession = company.getEmployeesByProfession('InvalidProfession');
      expect(invalidProfession).toEqual([]);
    });
  });
});
