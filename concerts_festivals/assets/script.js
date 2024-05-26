const data = {
  "events": [
    {
      "name": "Фестиваль уличной еды 'Вкус Псевдограда'",
      "date": "2024-06-01",
      "time": "12:00 - 22:00",
      "location": "Центральный парк",
      "description": "Вкуснейшая еда от лучших уличных поваров города. Живая музыка, мастер-классы по кулинарии и множество развлечений."
    },
    {
      "name": "Музыкальный фестиваль 'Псевдозвук'",
      "date": "2024-06-08",
      "time": "14:00 - 00:00",
      "location": "Стадион 'ПсевдоАрена'",
      "description": "Концерты местных и международных групп. Рок, поп, джаз и электронная музыка на нескольких сценах."
    },
    {
      "name": "Фестиваль кино под открытым небом 'Псевдокино'",
      "date": "2024-06-15",
      "time": "20:00 - 23:00",
      "location": "Летний амфитеатр",
      "description": "Показ классических и современных фильмов на большом экране под звездами. Пикники и тематические конкурсы."
    },
    {
      "name": "Псевдо-концерт симфонической музыки",
      "date": "2024-06-22",
      "time": "18:00 - 20:00",
      "location": "Концертный зал 'Гармония'",
      "description": "Выступление симфонического оркестра Псевдограда. Прозвучат произведения великих композиторов."
    },
    {
      "name": "Фестиваль красок 'Псевдохоли'",
      "date": "2024-06-29",
      "time": "10:00 - 18:00",
      "location": "Площадь Радости",
      "description": "Яркий фестиваль с бросанием цветных порошков, танцами, музыкой и вкусной едой."
    },
    {
      "name": "Фестиваль пива 'Псевдопивень'",
      "date": "2024-07-06",
      "time": "12:00 - 22:00",
      "location": "Городская площадь",
      "description": "Дегустация разнообразных сортов пива от местных и зарубежных пивоварен. Живая музыка и конкурсы."
    },
    {
      "name": "Концерт электронной музыки 'ПсевдоТехно'",
      "date": "2024-07-13",
      "time": "22:00 - 04:00",
      "location": "Клуб 'Электра'",
      "description": "Ночь электронной музыки с выступлениями известных диджеев и световым шоу."
    },
    {
      "name": "Фестиваль искусства 'ПсевдоАрт'",
      "date": "2024-07-20",
      "time": "10:00 - 18:00",
      "location": "Городской музей",
      "description": "Выставки картин, скульптур и фотографий от местных художников. Мастер-классы и лекции."
    },
    {
      "name": "Фестиваль водных видов спорта 'ПсевдоВолна'",
      "date": "2024-07-27",
      "time": "08:00 - 20:00",
      "location": "Псевдоозеро",
      "description": "Соревнования по серфингу, водным лыжам и каякингу. Зоны отдыха и развлечения для всей семьи."
    },
    {
      "name": "Фестиваль цветов 'ПсевдоЦвет'",
      "date": "2024-08-03",
      "time": "09:00 - 17:00",
      "location": "Ботанический сад",
      "description": "Выставка цветов и садовых композиций. Мастер-классы по флористике и садоводству."
    }
  ]
}

console.log(data)

const eventsContainer = document.getElementById('eventsContainer')
const buttonTown = document.getElementById('town')
const outsideButton = document.getElementById('outsideButton');

function getEvents(data) {
  let townContainer = document.createElement('div');
  townContainer.id = 'townContainer'; 
  data.events.forEach(event => {
    
    let eventElement = document.createElement('div');
    eventElement.classList.add('event'); 

    let title = document.createElement('h2');
    title.textContent = event.name;
    eventElement.appendChild(title);

    let date = document.createElement('p');
    date.textContent = `Дата: ${event.date}`;
    eventElement.appendChild(date);

    let time = document.createElement('p');
    time.textContent = `Время: ${event.time}`;
    eventElement.appendChild(time);

    let location = document.createElement('p');
    location.textContent = `Место: ${event.location}`;
    eventElement.appendChild(location);

    let description = document.createElement('p');
    description.textContent = `Описание: ${event.description}`;
    eventElement.appendChild(description);

    townContainer.appendChild(eventElement);
  });

  eventsContainer.innerHTML = '';

  eventsContainer.appendChild(townContainer);
}

buttonTown.addEventListener('click', function() {
  getEvents(data);
});

const dataOutside = {
  "events": [
    {
      "name": "Пикник на природе 'Лесной отдых'",
      "date": "2024-06-02",
      "time": "10:00 - 18:00",
      "location": "Лесная поляна",
      "description": "Отдых на свежем воздухе в окружении природы. Барбекю, игры и прогулки по лесу."
    },
    {
      "name": "Экскурсия по древнему замку 'Старая крепость'",
      "date": "2024-06-10",
      "time": "11:00 - 14:00",
      "location": "Древний замок на холме",
      "description": "Путешествие в прошлое с экскурсией по замку. История, архитектура и загадки древних стен."
    },
    {
      "name": "Велопробег 'По дорогам Природы'",
      "date": "2024-06-17",
      "time": "09:00 - 16:00",
      "location": "Природные тропы",
      "description": "Велосипедный марафон по живописным тропам и лесным дорогам. Соревнования и призы для победителей."
    },
    {
      "name": "Путешествие на каяках по реке 'Водные просторы'",
      "date": "2024-06-25",
      "time": "13:00 - 17:00",
      "location": "Река 'Спокойная'",
      "description": "Увлекательное приключение на каяках. Преодоление водных препятствий и незабываемые пейзажи."
    },
    {
      "name": "Пикник с видом на горы 'Вершинная забава'",
      "date": "2024-07-01",
      "time": "12:00 - 20:00",
      "location": "Горная поляна",
      "description": "Отдых с панорамным видом на горы. Горячий шашлык, уютные палатки и дружеская атмосфера."
    },
    {
      "name": "Фотосессия на природе 'Моменты красоты'",
      "date": "2024-07-08",
      "time": "09:00 - 18:00",
      "location": "Природные уголки",
      "description": "Создание ярких фотографий в окружении природы. Профессиональные фотографы и красивые фоны."
    },
    {
      "name": "Пеший поход по горным тропам 'Вершины зовут'",
      "date": "2024-07-15",
      "time": "08:00 - 17:00",
      "location": "Горные тропы",
      "description": "Исследование горных вершин и водопадов. Атмосфера приключения и невероятные пейзажи."
    },
    {
      "name": "Встреча рассвета на берегу озера 'Утренняя гармония'",
      "date": "2024-07-22",
      "time": "05:00 - 07:00",
      "location": "Берег озера 'Солнечное'",
      "description": "Медитация и йога на берегу озера в рассветные часы. Зарядка энергией и покой природы."
    },
    {
      "name": "Пикник с купанием в реке 'Веселые водные игры'",
      "date": "2024-07-29",
      "time": "11:00 - 17:00",
      "location": "Река 'Живописная'",
      "description": "Веселые игры на берегу реки с купанием и фотосессиями. Барбекю и водные развлечения."
    },
    {
      "name": "Семейный отдых на природе 'Солнечный выходной'",
      "date": "2024-08-05",
      "time": "10:00 - 16:00",
      "location": "Природный заповедник",
      "description": "Отдых и развлечения для всей семьи. Прогулки, пикники и игры на свежем воздухе."
    }
  ]
};

function showOutsideEvents(dataOutside) {
  let container = document.createElement('div');
  container.id = 'outsideContainer'; 
  dataOutside.events.forEach(event => {
    
    let eventElement = document.createElement('div');
    eventElement.classList.add('event'); 

    let title = document.createElement('h2');
    title.textContent = event.name;
    eventElement.appendChild(title);

    let date = document.createElement('p');
    date.textContent = `Дата: ${event.date}`;
    eventElement.appendChild(date);

    let time = document.createElement('p');
    time.textContent = `Время: ${event.time}`;
    eventElement.appendChild(time);

    let location = document.createElement('p');
    location.textContent = `Место: ${event.location}`;
    eventElement.appendChild(location);

    let description = document.createElement('p');
    description.textContent = `Описание: ${event.description}`;
    eventElement.appendChild(description);

    container.appendChild(eventElement);
  });

  eventsContainer.innerHTML = '';
  eventsContainer.appendChild(container);
}
outsideButton.addEventListener('click', function() {
  showOutsideEvents(dataOutside);
});