/*Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

async function createTodo(todoBody) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      // отправка POST-запроса на URL с телом, преобразованным в JSON
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoBody), // объект в формате JSON
    });

    if (response.status !== 201) {
      throw new Error(`Получен статус ${response.status}`); // Проверка статус кода респонса
    }

    const data = await response.json(); // преобразование респонса в JSON

    // сравнение данных полученных из респонса с теми что были отправлены
    for (const key in todoBody) {
      if (todoBody[key] !== data[key]) {
        throw new Error('Полученные данные из респонса не равны тем, что передавались в запрос');
      }
    }

    return data; // возвращение данных из респонса
  } catch (err) {
    console.error(err.message); // Вывод ошибки
  } finally {
    console.log('Работа функции createTodo завершена');
  }
}

const newTodo = {
  userId: 1,
  title: 'delectus aut autem',
  completed: false,
};

createTodo(newTodo)
  .then((data) => console.log('Создана задача:', data))
  .catch(() => console.log('Не удалось создать задачу'));
