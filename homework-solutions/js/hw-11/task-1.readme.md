# TASK 1

1. Создайте класс `Employee` с полями:

```txt
   firstName — имя сотрудника (строка).
   lastName — фамилия сотрудника (строка).
   profession — профессия сотрудника (строка).
   Приватное поле salary — зарплата сотрудника (число).
```

2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле `salary`.
3. Реализуйте метод `getFullName()` — возвращающий полное имя сотрудника.
4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:

```js
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
```

5. Создайте класс `Company` с полями:

```txt
   title — название компании (строка).
   phone — телефон компании (число).
   address — адрес компании (строка).
   Приватное поле employees — массив сотрудников (пустой массив на старте).
```

6. Реализуйте геттеры для полей `title, phone, и address`.
7. Добавьте методы:

- `addEmployee(employee)` — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
- `getEmployees()` - возвращает массив всех сотрудников.

8. Проверьте корректную работу:

```js
const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
```

9. Добавьте в класс `Company` метод `getInfo()`, который возвращает строку с информацией о компании вида (перенос строки сделать с \n):

```txt
   Компания:
   Адрес:
   Количество сотрудников:
```
