# TASK 2

1. Реализуйте метод `findEmployeeByName(firstName: string)` в классе Company, который возвращает объект сотрудника, если такой найден,
   иначе ошибка.
2. Реализуйте метод `removeEmployee(firstName)` в классе Company, который удаляет сотрудника по имени.
   Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
   Для корретной работы создайте дополнительно приватный метод `getEmployeeIndex(firstName)`, и используйте его в `removeEmployee`
3. Добавьте метод `getTotalSalary()` в классе Company, который возвращает сумму всех зарплат сотрудников.

4. Добавление валидации для полей сотрудника в сеттеры:

```txt
   Employee:
   - firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
   - profession — строка, не может быть пустой, только латинские буквы и пробелы.
   - salary — число, должно быть больше 0 и меньше 10000.
```

5. Проверьте свой код:

```js
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
```
