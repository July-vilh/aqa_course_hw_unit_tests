/* На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const url = 'https://jsonplaceholder.typicode.com';

// Функция для получения данных с указанного endpoint
async function getDataFromEndpoint(endpoint) {
  try {
    const response = await fetch(`${url}/${endpoint}`); // Запрос данных
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`); // обработка статус-кода
    }
    return await response.json(); // Преобразование респонса в JSON
  } catch (err) {
    console.error(err.message);
  }
}

// Функция для получения и обработки всех данных
async function fetchData() {
  // Одновременный запрос users, albums и photos
  const [users, albums, photos] = await Promise.all([
    getDataFromEndpoint('users'),
    getDataFromEndpoint('albums'),
    getDataFromEndpoint('photos'),
  ]);

  // Обработка списка юзеров
  const userData = users.map((user) => {
    // Фильтр по альбомам которые принадлежат юзеру по id
    const userAlbums = albums.filter((album) => album.userId === user.id);

    // Формирование списка альбомов с количеством фото в каждом
    const albumsPhoto = userAlbums.map((album) => {
      const photo = photos.filter((photo) => photo.albumId === album.id); // фильтр по фото из альбома по id
      return `${album.title} (${photo.length} photos)`; // формирование строки с тайтлом альбома и кол-вом фото
    });

    // Возвращение объекта с информацией о пользователе и его альбомах
    return {
      name: user.name,
      email: user.email,
      phone: user.phone,
      company: user.company.name,
      albums: albumsPhoto,
    };
  });

  return userData;
}

// Вызов функции
fetchData()
  .then((result) => console.log(result))
  .catch((reject) => console.log(reject));
