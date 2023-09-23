

const dataBase = () => {
	
	const ua = [
	{
		id: 101,
		title: 'shopper',
		subtitle: 'Інтернет-магазин',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Інтернет-магазин різноманітних товарів. Запит товарів, користувачів та публікацій на Fake REST API dummyjson. Запити реалізовані через Fetch. Додавання товарів в кошик та видалення з нього, фільтри, пошук, сортування, сдайдер, модальні вікна.'
	},

	{
		id: 102,
		title: 'big Money',
		subtitle: 'Сервіс для обміну валют',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'JSON', 'AJAX'],
		descr: 'Сайт надає можливість обміну валют згідно з актуальним курсом валют, а також перегляд змін вартості кількох валют відносно однією. Підключено API Національного банку України для отримання актуального курсу та API "React-Charts" для побудови графіків. Запити реалізовані через Fetch. Повністю на "Bootstrap".'
	},

	{
		id: 103,
		title: 'marvel information portal',
		subtitle: 'Інформаційний портал всесвіту Marvel',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Сайт надає доступ до API в якому зібрано всіх героїв та всі комікси всесвіту Marvel. Крім цього підключені API для роботи з формами, контролю маршрутів і типів даних та ін., запити реалізовані через Fetch. Доступні операції: пошук за ім\'ям, завантажити більше героїв, оновити рандомного героя, переглянути інформацію про комікси.'
	},

	{
		id: 104,
		title: 'workers',
		subtitle: 'Сайт обліку працівників',
		date: '2023',
		tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
		descr: 'Сайт обліку кількості та стану працівників. Доступні операції: підрахунок загальної кількості та премійованих, пошук за ім\'ям, фільтри, відмітити працівника, зазначити як премійованого, змінити розмір заробітної плати, видалити зі списку, додати нового працівника.'
	},

	{
		id: 105,
		title: 'healthy food',
		subtitle: 'Сайт магазину здорового харчування',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'AJAX', 'Webpack', 'Babel'],
		descr: 'Сайт зі слайдером, табами, модальними вікнами, лічильником та динамічними обрахунками за формулами. Підключена бібліотека для запитів на сервер "Axios". Сайт підключається до локального серверу.'
	},

	{
		id: 106,
		title: 'ірвас',
		subtitle: 'Сайт фірми з надання послуг ремонту балконів',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'jQuery', 'Webpack', 'Gulp', 'Babel'],
		descr: 'Сайт зі слайдером (на мобільних пристроях), табами, модальними вікнами та лічильником.'
	},

	{
		id: 107,
		title: 'cinema',
		subtitle: 'Макет сайту створення списку фільмів',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript'],
		descr: 'Макет сайту з функціоналом додавання нових фільмів до списку та видалення зі списку.'
	},

	{
		id: 108,
		title: 'cv',
		subtitle: 'Перше портфоліо',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Портфоліо створене після завершення курсу "Front End" – Євгена Андриканича. Чистий JS.'
	},

	{
		id: 109,
		title: 'aston martin',
		subtitle: 'Фотогалерея з фільтрацією та оригінальним слайдером',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Галерея фотографій Aston Martin у високій якості. Підключено дві сторонні JS-бібліотеки: "Isotope" - фільтр і сортування, та swiper.'
	},

	{
		id: 110,
		title: 'freedom music',
		subtitle: 'Макет сайту аудіомагазину з програвачем',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Макет сайту створений з HTML та SCSS. Є посилання до макету аудіопрогравача цього сайту.'
	},

	{
		id: 111,
		title: 'traveller',
		subtitle: 'Інтернет-сторінка мандрівника',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Макет сайту створений з HTML та SCSS.'
	},

	{
		id: 112,
		title: 'game one',
		subtitle: 'Браузерна гра',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Проста браузерна гра створена лише з HTML та SCSS.'
	},
	]

	const en = [
	{
		id: 201,
		title: 'shopper',
		subtitle: 'Internet-shop',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Online store of various products. Request products, users and posts on Fake REST API dummyjson. Requests are implemented via Fetch. Adding products to the cart and removing them from it, filters, search, sorting, slider, modal windows.'
	},

	{
		id: 202,
		title: 'big Money',
		subtitle: 'Currency exchange service',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'JSON', 'AJAX'],
		descr: 'The site provides the ability to exchange currencies according to the current exchange rate, as well as the ability to view changes in the value of several currencies relative to one. The API of the National Bank of Ukraine for obtaining the current exchange rate and the "React-Charts" API for constructing graphs are connected. Requests are implemented via Fetch. Completely on "Bootstrap".'
	},

	{
		id: 203,
		title: 'marvel information portal',
		subtitle: 'Information portal of the Marvel universe',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'The site provides access to an API that collects all the heroes and comics of the Marvel universe. In addition, APIs are connected for working with forms, controlling routes and data types, etc., requests are implemented through Fetch. Available operations: search by name, download more heroes, update a random hero, view information about comics.'
	},

	{
		id: 204,
		title: 'workers',
		subtitle: 'Employee registration site',
		date: '2023',
		tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
		descr: 'A site for recording the number and status of employees. Available operations: calculation of the total number and bonused, search by name, filters, mark an employee, mark as a bonus, change the amount of wages, remove from the list, add a new employee.'
	},

	{
		id: 205,
		title: 'healthy food',
		subtitle: 'Website of a healthy food store',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'AJAX', 'Webpack', 'Babel'],
		descr: 'A site with a slider, tabs, modal windows, a counter and dynamic calculations based on formulas. Connected "Axios" - a library for requests to the server. The site connects to a local server.'
	},

	{
		id: 206,
		title: 'irvas',
		subtitle: 'The website of a company providing services for repairing balconies',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'jQuery', 'Webpack', 'Gulp', 'Babel'],
		descr: 'A site with a slider (on mobile devices), tabs, modal windows and a counter.'
	},

	{
		id: 207,
		title: 'cinema',
		subtitle: 'Movie list site layout',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript'],
		descr: 'Site layout with the functionality of adding new movies to the list and removing them from the list.'
	},

	{
		id: 208,
		title: 'cv',
		subtitle: 'The first portfolio',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'The portfolio was created after the completion of the "Front End" course by Yevhen Andrykanych. Pure JS.'
	},

	{
		id: 209,
		title: 'aston martin',
		subtitle: 'Photo gallery with filtering and a special slider',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'High quality Aston Martin photo gallery. Two third-party JS libraries are connected: "Isotope" - filter and sorting, and swiper.'
	},

	{
		id: 210,
		title: 'freedom music',
		subtitle: 'Layout of an audio store website with a player',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'The site layout is created with HTML and SCSS. There is a link to the audio player layout of this site.'
	},

	{
		id: 211,
		title: 'traveller',
		subtitle: 'Traveler\'s website',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'The site layout is created with HTML and SCSS.'
	},

	{
		id: 212,
		title: 'game one',
		subtitle: 'Browser game',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'A simple browser game built with only HTML and SCSS.'
	},
	]

	const pl = [
	{
		id: 301,
		title: 'shopper',
		subtitle: 'Sklep internetowy',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Sklep internetowy z różnymi produktami. Requesty o produkty, użytkowników i posty na fałszywym REST API dummyjson. Requesty są realizowane poprzez Fetch. Dodawanie produktów do koszyka i usuwanie ich z niego, filtry, wyszukiwanie, sortowanie, slider, okna modalne.'
	},

	{
		id: 302,
		title: 'big Money',
		subtitle: 'Usługa wymiany walut',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'JSON', 'AJAX'],
		descr: 'Serwis zapewnia możliwość wymiany walut według aktualnego kursu walut, a także możliwość przeglądania zmian wartości kilku walut w stosunku do jednej. Połączone jest API Narodowego Banku Ukrainy do uzyskiwania aktualnego kursu walutowego oraz API „React-Charts” do tworzenia wykresów. Requesty są realizowane poprzez Fetch. Całkowicie na „Bootstrapie”.'
	},

	{
		id: 303,
		title: 'marvel information portal',
		subtitle: 'Portal informacyjny wszechświata Marvela',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Strona zapewnia dostęp do API, które gromadzi wszystkich bohaterów i komiksy uniwersum Marvela. Ponadto połączone są interfejsy API do pracy z formularzami, kontrolowania tras i typów danych itp., requesty są realizowane poprzez Fetch. Dostępne operacje: wyszukiwanie według nazwy, pobieranie większej liczby bohaterów, aktualizacja losowego bohatera, przeglądanie informacji o komiksach.'
	},

	{
		id: 304,
		title: 'workers',
		subtitle: 'Strona rejestracji pracowników',
		date: '2023',
		tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
		descr: 'Strona służąca do rejestrowania liczby i statusu pracowników. Dostępne operacje: obliczenie liczby całkowitej i pracowników z premią, wyszukiwanie po nazwie, filtry, oznaczenie pracownika, oznaczenie premii, zmiana wysokości wynagrodzenia, usunięcie z listy, dodanie nowego pracownika.'
	},

	{
		id: 305,
		title: 'healthy food',
		subtitle: 'Strona internetowa sklepu ze zdrową żywnością',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'AJAX', 'Webpack', 'Babel'],
		descr: 'Strona z sliderem, zakładkami, oknami modalnymi, licznikiem i dynamicznymi obliczeniami na podstawie formuł. Połączony „Axios” - biblioteka requestow do serwera. Strona łączy się z serwerem lokalnym.'
	},

	{
		id: 306,
		title: 'irvas',
		subtitle: 'Strona internetowa firmy świadczącej usługi w zakresie naprawy balkonów',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'jQuery', 'Webpack', 'Gulp', 'Babel'],
		descr: 'Strona z sliderem (na urządzeniach mobilnych), zakładkami, oknami modalnymi i licznikiem.'
	},

	{
		id: 307,
		title: 'cinema',
		subtitle: 'Layout witryny z listą filmów',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript'],
		descr: 'Layout serwisu z możliwością dodawania nowych filmów do listy i usuwania ich z listy.'
	},

	{
		id: 308,
		title: 'cv',
		subtitle: 'Pierwsze portfolio',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Portfolio powstało po ukończeniu kursu „Front End” prowadzonego przez Jewhena Andrykanycha. Czysty JS.'
	},

	{
		id: 309,
		title: 'aston martin',
		subtitle: 'Galeria zdjęć z filtrowaniem i specjalnym suwakiem',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Galeria zdjęć wysokiej jakości Astona Martina. Połączone są dwie biblioteki JS: „Isotope” - filtrowanie i sortowanie oraz suwak.'
	},

	{
		id: 310,
		title: 'freedom music',
		subtitle: 'Layout strony sklepu audio wraz z odtwarzaczem',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Layout witryny jest tworzony przy użyciu HTML i SCSS. Znajduje się tam łącze do layoutu odtwarzacza audio na tej stronie.'
	},

	{
		id: 311,
		title: 'traveller',
		subtitle: 'Strona podróżnika',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Layout witryny jest tworzony przy użyciu HTML i SCSS.'
	},

	{
		id: 312,
		title: 'game one',
		subtitle: 'Gra przeglądarkowa',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Prosta gra przeglądarkowa zbudowana wyłącznie z HTML i SCSS.'
	},
	]

return { ua, en, pl }

}

export default dataBase;