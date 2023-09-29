

const DataBase = () => {
	
	const ua = [
	{
		id: 101,
		title: 'shopper',
		address: 'https://buinyiov.github.io/StoreShopper/',
		subtitle: 'Інтернет-магазин',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Інтернет-магазин різноманітних товарів. Запит товарів, користувачів та публікацій на Fake REST API dummyjson. Запити реалізовані через Fetch. Додавання товарів в кошик та видалення з нього, фільтри, пошук, сортування, сдайдер, модальні вікна.',
		images:[
			'/Portfolio/img/1-shopper/1.png',
			'/Portfolio/img/1-shopper/2.png',
			'/Portfolio/img/1-shopper/3.png',
			'/Portfolio/img/1-shopper/4.png',
			'/Portfolio/img/1-shopper/5.png',
			'/Portfolio/img/1-shopper/6.png'
		]
	},

	{
		id: 102,
		title: 'big Money',
		address: 'https://buinyiov.github.io/Currency/',
		subtitle: 'Сервіс для обміну валют',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'JSON', 'AJAX'],
		descr: 'Сайт надає можливість обміну валют згідно з актуальним курсом валют, а також перегляд змін вартості кількох валют відносно однією. Підключено API Національного банку України для отримання актуального курсу та API "React-Charts" для побудови графіків. Запити реалізовані через Fetch. Повністю на "Bootstrap".',
		images:[
			'/Portfolio/img/2-big_money/1.png',
			'/Portfolio/img/2-big_money/2.png',
			'/Portfolio/img/2-big_money/3.png',
			'/Portfolio/img/2-big_money/4.png',
			'/Portfolio/img/2-big_money/5.png',
		]
	},

	{
		id: 103,
		title: 'marvel information portal',
		address: 'https://buinyiov.github.io/MarvelThirdReactApp/',
		subtitle: 'Інформаційний портал всесвіту Marvel',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Сайт надає доступ до API в якому зібрано всіх героїв та всі комікси всесвіту Marvel. Крім цього підключені API для роботи з формами, контролю маршрутів і типів даних та ін., запити реалізовані через Fetch. Доступні операції: пошук за ім\'ям, завантажити більше героїв, оновити рандомного героя, переглянути інформацію про комікси.',
		images:[
			'/Portfolio/img/3-marvel_information_portal/1.png',
			'/Portfolio/img/3-marvel_information_portal/2.png',
			'/Portfolio/img/3-marvel_information_portal/3.png',
			'/Portfolio/img/3-marvel_information_portal/4.png',
			'/Portfolio/img/3-marvel_information_portal/5.png',
			'/Portfolio/img/3-marvel_information_portal/6.png',
		]
	},

	{
		id: 104,
		title: 'workers',
		address: 'https://buinyiov.github.io/SecondReactApp/',
		subtitle: 'Сайт обліку працівників',
		date: '2023',
		tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
		descr: 'Сайт обліку кількості та стану працівників. Доступні операції: підрахунок загальної кількості та премійованих, пошук за ім\'ям, фільтри, відмітити працівника, зазначити як премійованого, змінити розмір заробітної плати, видалити зі списку, додати нового працівника.',
		images:[
			'/Portfolio/img/4-workers/1.png',
			'/Portfolio/img/4-workers/2.png',
			'/Portfolio/img/4-workers/3.png',
			'/Portfolio/img/4-workers/4.png',
			'/Portfolio/img/4-workers/5.png',
		]
	},

	{
		id: 105,
		title: 'healthy food',
		address: 'https://buinyiov.github.io/Course18Tabs/',
		subtitle: 'Сайт магазину здорового харчування',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'AJAX', 'Webpack', 'Babel'],
		descr: 'Сайт зі слайдером, табами, модальними вікнами, лічильником та динамічними обрахунками за формулами. Підключена бібліотека для запитів на сервер "Axios". Сайт підключається до локального серверу.',
		images:[
			'/Portfolio/img/5-healthy_food/1.png',
			'/Portfolio/img/5-healthy_food/2.png',
			'/Portfolio/img/5-healthy_food/3.png',
			'/Portfolio/img/5-healthy_food/4.png',
			'/Portfolio/img/5-healthy_food/5.png',
			'/Portfolio/img/5-healthy_food/6.png',
			'/Portfolio/img/5-healthy_food/7.png',
			'/Portfolio/img/5-healthy_food/8.png',
		]
	},

	{
		id: 106,
		title: 'ірвас',
		address: 'https://buinyiov.github.io/WindowDist/',
		subtitle: 'Сайт фірми з надання послуг ремонту балконів',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'jQuery', 'Webpack', 'Gulp', 'Babel'],
		descr: 'Сайт зі слайдером (на мобільних пристроях), табами, модальними вікнами та лічильником.',
		images:[
			'/Portfolio/img/6-irvas/1.png',
			'/Portfolio/img/6-irvas/2.png',
			'/Portfolio/img/6-irvas/3.png',
			'/Portfolio/img/6-irvas/4.png',
			'/Portfolio/img/6-irvas/5.png',
			'/Portfolio/img/6-irvas/6.png',
			'/Portfolio/img/6-irvas/7.png',
			'/Portfolio/img/6-irvas/8.png',
			'/Portfolio/img/6-irvas/9.png',
			'/Portfolio/img/6-irvas/10.png',
		]
	},

	{
		id: 107,
		title: 'cinema',
		address: 'https://buinyiov.github.io/Course16Cinema/#',
		subtitle: 'Макет сайту створення списку фільмів',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript'],
		descr: 'Макет сайту з функціоналом додавання нових фільмів до списку та видалення зі списку.',
		images:[
			'/Portfolio/img/7-cinema/1.png',
			'/Portfolio/img/7-cinema/2.png',
			'/Portfolio/img/7-cinema/3.png',
		]
	},

	{
		id: 108,
		title: 'cv',
		address: 'https://buinyiov.github.io/CV/',
		subtitle: 'Перше портфоліо',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Портфоліо створене після завершення курсу "Front End" – Євгена Андриканича. Чистий JS.',
		images:[
			'/Portfolio/img/8-cv/1.png',
			'/Portfolio/img/8-cv/2.png',
			'/Portfolio/img/8-cv/3.png',
			'/Portfolio/img/8-cv/4.png',
			'/Portfolio/img/8-cv/5.png',
			'/Portfolio/img/8-cv/6.png',
			'/Portfolio/img/8-cv/7.png',
		]
	},

	{
		id: 109,
		title: 'aston martin',
		address: 'https://buinyiov.github.io/Aston-Martin/',
		subtitle: 'Фотогалерея з фільтрацією та оригінальним слайдером',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Галерея фотографій Aston Martin у високій якості. Підключено дві сторонні JS-бібліотеки: "Isotope" - фільтр і сортування, та swiper.',
		images:[
			'/Portfolio/img/9-aston_martin/1.png',
			'/Portfolio/img/9-aston_martin/2.png',
			'/Portfolio/img/9-aston_martin/3.png',
			'/Portfolio/img/9-aston_martin/4.png',
			'/Portfolio/img/9-aston_martin/5.png',
		]
	},

	{
		id: 110,
		title: 'freedom music',
		address: 'https://buinyiov.github.io/MyOwn_Muz/',
		subtitle: 'Макет сайту аудіомагазину з програвачем',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Макет сайту створений з HTML та SCSS. Є посилання до макету аудіопрогравача цього сайту.',
		images:[
			'/Portfolio/img/10-freedom_music/1.png',
			'/Portfolio/img/10-freedom_music/2.png',
			'/Portfolio/img/10-freedom_music/3.png',
			'/Portfolio/img/10-freedom_music/4.png',
			'/Portfolio/img/10-freedom_music/5.png',
		]
	},

	{
		id: 111,
		title: 'traveller',
		address: 'https://buinyiov.github.io/FotoStudio/',
		subtitle: 'Інтернет-сторінка мандрівника',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Макет сайту створений з HTML та SCSS.',
		images:[
			'/Portfolio/img/11-traveller/1.png',
			'/Portfolio/img/11-traveller/2.png',
			'/Portfolio/img/11-traveller/3.png',
		]
	},

	{
		id: 112,
		title: 'game one',
		address: 'https://buinyiov.github.io/Game_One/',
		subtitle: 'Браузерна гра',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Проста браузерна гра створена лише з HTML та SCSS.',
		images:[
			'/Portfolio/img/12-game_one/1.png',
			'/Portfolio/img/12-game_one/2.png',
			'/Portfolio/img/12-game_one/3.png',
			'/Portfolio/img/12-game_one/4.png',
		]
	},
	]

	const en = [
	{
		id: 201,
		title: 'shopper',
		address: 'https://buinyiov.github.io/StoreShopper/',
		subtitle: 'Internet-shop',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Online store of various products. Request products, users and posts on Fake REST API dummyjson. Requests are implemented via Fetch. Adding products to the cart and removing them from it, filters, search, sorting, slider, modal windows.',
		images:[
			'/Portfolio/img/1-shopper/1.png',
			'/Portfolio/img/1-shopper/2.png',
			'/Portfolio/img/1-shopper/3.png',
			'/Portfolio/img/1-shopper/4.png',
			'/Portfolio/img/1-shopper/5.png',
			'/Portfolio/img/1-shopper/6.png'
		]
	},

	{
		id: 202,
		title: 'big Money',
		address: 'https://buinyiov.github.io/Currency/',
		subtitle: 'Currency exchange service',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'JSON', 'AJAX'],
		descr: 'The site provides the ability to exchange currencies according to the current exchange rate, as well as the ability to view changes in the value of several currencies relative to one. The API of the National Bank of Ukraine for obtaining the current exchange rate and the "React-Charts" API for constructing graphs are connected. Requests are implemented via Fetch. Completely on "Bootstrap".',
		images:[
			'/Portfolio/img/2-big_money/1.png',
			'/Portfolio/img/2-big_money/2.png',
			'/Portfolio/img/2-big_money/3.png',
			'/Portfolio/img/2-big_money/4.png',
			'/Portfolio/img/2-big_money/5.png',
		]
	},

	{
		id: 203,
		title: 'marvel information portal',
		address: 'https://buinyiov.github.io/MarvelThirdReactApp/',
		subtitle: 'Information portal of the Marvel universe',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'The site provides access to an API that collects all the heroes and comics of the Marvel universe. In addition, APIs are connected for working with forms, controlling routes and data types, etc., requests are implemented through Fetch. Available operations: search by name, download more heroes, update a random hero, view information about comics.',
		images:[
			'/Portfolio/img/3-marvel_information_portal/1.png',
			'/Portfolio/img/3-marvel_information_portal/2.png',
			'/Portfolio/img/3-marvel_information_portal/3.png',
			'/Portfolio/img/3-marvel_information_portal/4.png',
			'/Portfolio/img/3-marvel_information_portal/5.png',
			'/Portfolio/img/3-marvel_information_portal/6.png',
		]
	},

	{
		id: 204,
		title: 'workers',
		address: 'https://buinyiov.github.io/SecondReactApp/',
		subtitle: 'Employee registration site',
		date: '2023',
		tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
		descr: 'A site for recording the number and status of employees. Available operations: calculation of the total number and bonused, search by name, filters, mark an employee, mark as a bonus, change the amount of wages, remove from the list, add a new employee.',
		images:[
			'/Portfolio/img/4-workers/1.png',
			'/Portfolio/img/4-workers/2.png',
			'/Portfolio/img/4-workers/3.png',
			'/Portfolio/img/4-workers/4.png',
			'/Portfolio/img/4-workers/5.png',
		]
	},

	{
		id: 205,
		title: 'healthy food',
		address: 'https://buinyiov.github.io/Course18Tabs/',
		subtitle: 'Website of a healthy food store',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'AJAX', 'Webpack', 'Babel'],
		descr: 'A site with a slider, tabs, modal windows, a counter and dynamic calculations based on formulas. Connected "Axios" - a library for requests to the server. The site connects to a local server.',
		images:[
			'/Portfolio/img/5-healthy_food/1.png',
			'/Portfolio/img/5-healthy_food/2.png',
			'/Portfolio/img/5-healthy_food/3.png',
			'/Portfolio/img/5-healthy_food/4.png',
			'/Portfolio/img/5-healthy_food/5.png',
			'/Portfolio/img/5-healthy_food/6.png',
			'/Portfolio/img/5-healthy_food/7.png',
			'/Portfolio/img/5-healthy_food/8.png',
		]
	},

	{
		id: 206,
		title: 'irvas',
		address: 'https://buinyiov.github.io/WindowDist/',
		subtitle: 'The website of a company providing services for repairing balconies',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'jQuery', 'Webpack', 'Gulp', 'Babel'],
		descr: 'A site with a slider (on mobile devices), tabs, modal windows and a counter.',
		images:[
			'/Portfolio/img/6-irvas/1.png',
			'/Portfolio/img/6-irvas/2.png',
			'/Portfolio/img/6-irvas/3.png',
			'/Portfolio/img/6-irvas/4.png',
			'/Portfolio/img/6-irvas/5.png',
			'/Portfolio/img/6-irvas/6.png',
			'/Portfolio/img/6-irvas/7.png',
			'/Portfolio/img/6-irvas/8.png',
			'/Portfolio/img/6-irvas/9.png',
			'/Portfolio/img/6-irvas/10.png',
		]
	},

	{
		id: 207,
		title: 'cinema',
		address: 'https://buinyiov.github.io/Course16Cinema/#',
		subtitle: 'Movie list site layout',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript'],
		descr: 'Site layout with the functionality of adding new movies to the list and removing them from the list.',
		images:[
			'/Portfolio/img/7-cinema/1.png',
			'/Portfolio/img/7-cinema/2.png',
			'/Portfolio/img/7-cinema/3.png',
		]
	},

	{
		id: 208,
		title: 'cv',
		address: 'https://buinyiov.github.io/CV/',
		subtitle: 'The first portfolio',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'The portfolio was created after the completion of the "Front End" course by Yevhen Andrykanych. Pure JS.',
		images:[
			'/Portfolio/img/8-cv/1.png',
			'/Portfolio/img/8-cv/2.png',
			'/Portfolio/img/8-cv/3.png',
			'/Portfolio/img/8-cv/4.png',
			'/Portfolio/img/8-cv/5.png',
			'/Portfolio/img/8-cv/6.png',
			'/Portfolio/img/8-cv/7.png',
		]
	},

	{
		id: 209,
		title: 'aston martin',
		address: 'https://buinyiov.github.io/Aston-Martin/',
		subtitle: 'Photo gallery with filtering and a special slider',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'High quality Aston Martin photo gallery. Two third-party JS libraries are connected: "Isotope" - filter and sorting, and swiper.',
		images:[
			'/Portfolio/img/9-aston_martin/1.png',
			'/Portfolio/img/9-aston_martin/2.png',
			'/Portfolio/img/9-aston_martin/3.png',
			'/Portfolio/img/9-aston_martin/4.png',
			'/Portfolio/img/9-aston_martin/5.png',
		]
	},

	{
		id: 210,
		title: 'freedom music',
		address: 'https://buinyiov.github.io/MyOwn_Muz/',
		subtitle: 'Layout of an audio store website with a player',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'The site layout is created with HTML and SCSS. There is a link to the audio player layout of this site.',
		images:[
			'/Portfolio/img/10-freedom_music/1.png',
			'/Portfolio/img/10-freedom_music/2.png',
			'/Portfolio/img/10-freedom_music/3.png',
			'/Portfolio/img/10-freedom_music/4.png',
			'/Portfolio/img/10-freedom_music/5.png',
		]
	},

	{
		id: 211,
		title: 'traveller',
		address: 'https://buinyiov.github.io/FotoStudio/',
		subtitle: 'Traveler\'s website',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'The site layout is created with HTML and SCSS.',
		images:[
			'/Portfolio/img/11-traveller/1.png',
			'/Portfolio/img/11-traveller/2.png',
			'/Portfolio/img/11-traveller/3.png',
		]
	},

	{
		id: 212,
		title: 'game one',
		address: 'https://buinyiov.github.io/Game_One/',
		subtitle: 'Browser game',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'A simple browser game built with only HTML and SCSS.',
		images:[
			'/Portfolio/img/12-game_one/1.png',
			'/Portfolio/img/12-game_one/2.png',
			'/Portfolio/img/12-game_one/3.png',
			'/Portfolio/img/12-game_one/4.png',
		]
	},
	]

	const pl = [
	{
		id: 301,
		title: 'shopper',
		address: 'https://buinyiov.github.io/StoreShopper/',
		subtitle: 'Sklep internetowy',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Sklep internetowy z różnymi produktami. Requesty o produkty, użytkowników i posty na fałszywym REST API dummyjson. Requesty są realizowane poprzez Fetch. Dodawanie produktów do koszyka i usuwanie ich z niego, filtry, wyszukiwanie, sortowanie, slider, okna modalne.',
		images:[
			'/Portfolio/img/1-shopper/1.png',
			'/Portfolio/img/1-shopper/2.png',
			'/Portfolio/img/1-shopper/3.png',
			'/Portfolio/img/1-shopper/4.png',
			'/Portfolio/img/1-shopper/5.png',
			'/Portfolio/img/1-shopper/6.png'
		]
	},

	{
		id: 302,
		title: 'big Money',
		address: 'https://buinyiov.github.io/Currency/',
		subtitle: 'Usługa wymiany walut',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'JSON', 'AJAX'],
		descr: 'Serwis zapewnia możliwość wymiany walut według aktualnego kursu walut, a także możliwość przeglądania zmian wartości kilku walut w stosunku do jednej. Połączone jest API Narodowego Banku Ukrainy do uzyskiwania aktualnego kursu walutowego oraz API „React-Charts” do tworzenia wykresów. Requesty są realizowane poprzez Fetch. Całkowicie na „Bootstrapie”.',
		images:[
			'/Portfolio/img/2-big_money/1.png',
			'/Portfolio/img/2-big_money/2.png',
			'/Portfolio/img/2-big_money/3.png',
			'/Portfolio/img/2-big_money/4.png',
			'/Portfolio/img/2-big_money/5.png',
		]
	},

	{
		id: 303,
		title: 'marvel information portal',
		address: 'https://buinyiov.github.io/MarvelThirdReactApp/',
		subtitle: 'Portal informacyjny wszechświata Marvela',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'React', 'JSON', 'AJAX'],
		descr: 'Strona zapewnia dostęp do API, które gromadzi wszystkich bohaterów i komiksy uniwersum Marvela. Ponadto połączone są interfejsy API do pracy z formularzami, kontrolowania tras i typów danych itp., requesty są realizowane poprzez Fetch. Dostępne operacje: wyszukiwanie według nazwy, pobieranie większej liczby bohaterów, aktualizacja losowego bohatera, przeglądanie informacji o komiksach.',
		images:[
			'/Portfolio/img/3-marvel_information_portal/1.png',
			'/Portfolio/img/3-marvel_information_portal/2.png',
			'/Portfolio/img/3-marvel_information_portal/3.png',
			'/Portfolio/img/3-marvel_information_portal/4.png',
			'/Portfolio/img/3-marvel_information_portal/5.png',
			'/Portfolio/img/3-marvel_information_portal/6.png',
		]
	},

	{
		id: 304,
		title: 'workers',
		address: 'https://buinyiov.github.io/SecondReactApp/',
		subtitle: 'Strona rejestracji pracowników',
		date: '2023',
		tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
		descr: 'Strona służąca do rejestrowania liczby i statusu pracowników. Dostępne operacje: obliczenie liczby całkowitej i pracowników z premią, wyszukiwanie po nazwie, filtry, oznaczenie pracownika, oznaczenie premii, zmiana wysokości wynagrodzenia, usunięcie z listy, dodanie nowego pracownika.',
		images:[
			'/Portfolio/img/4-workers/1.png',
			'/Portfolio/img/4-workers/2.png',
			'/Portfolio/img/4-workers/3.png',
			'/Portfolio/img/4-workers/4.png',
			'/Portfolio/img/4-workers/5.png',
		]
	},

	{
		id: 305,
		title: 'healthy food',
		address: 'https://buinyiov.github.io/Course18Tabs/',
		subtitle: 'Strona internetowa sklepu ze zdrową żywnością',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'JSON', 'AJAX', 'Webpack', 'Babel'],
		descr: 'Strona z sliderem, zakładkami, oknami modalnymi, licznikiem i dynamicznymi obliczeniami na podstawie formuł. Połączony „Axios” - biblioteka requestow do serwera. Strona łączy się z serwerem lokalnym.',
		images:[
			'/Portfolio/img/5-healthy_food/1.png',
			'/Portfolio/img/5-healthy_food/2.png',
			'/Portfolio/img/5-healthy_food/3.png',
			'/Portfolio/img/5-healthy_food/4.png',
			'/Portfolio/img/5-healthy_food/5.png',
			'/Portfolio/img/5-healthy_food/6.png',
			'/Portfolio/img/5-healthy_food/7.png',
			'/Portfolio/img/5-healthy_food/8.png',
		]
	},

	{
		id: 306,
		title: 'irvas',
		address: 'https://buinyiov.github.io/WindowDist/',
		subtitle: 'Strona internetowa firmy świadczącej usługi w zakresie naprawy balkonów',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'JavaScript', 'jQuery', 'Webpack', 'Gulp', 'Babel'],
		descr: 'Strona z sliderem (na urządzeniach mobilnych), zakładkami, oknami modalnymi i licznikiem.',
		images:[
			'/Portfolio/img/6-irvas/1.png',
			'/Portfolio/img/6-irvas/2.png',
			'/Portfolio/img/6-irvas/3.png',
			'/Portfolio/img/6-irvas/4.png',
			'/Portfolio/img/6-irvas/5.png',
			'/Portfolio/img/6-irvas/6.png',
			'/Portfolio/img/6-irvas/7.png',
			'/Portfolio/img/6-irvas/8.png',
			'/Portfolio/img/6-irvas/9.png',
			'/Portfolio/img/6-irvas/10.png',
		]
	},

	{
		id: 307,
		title: 'cinema',
		address: 'https://buinyiov.github.io/Course16Cinema/#',
		subtitle: 'Layout witryny z listą filmów',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript'],
		descr: 'Layout serwisu z możliwością dodawania nowych filmów do listy i usuwania ich z listy.',
		images:[
			'/Portfolio/img/7-cinema/1.png',
			'/Portfolio/img/7-cinema/2.png',
			'/Portfolio/img/7-cinema/3.png',
		]
	},

	{
		id: 308,
		title: 'cv',
		address: 'https://buinyiov.github.io/CV/',
		subtitle: 'Pierwsze portfolio',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Portfolio powstało po ukończeniu kursu „Front End” prowadzonego przez Jewhena Andrykanycha. Czysty JS.',
		images:[
			'/Portfolio/img/8-cv/1.png',
			'/Portfolio/img/8-cv/2.png',
			'/Portfolio/img/8-cv/3.png',
			'/Portfolio/img/8-cv/4.png',
			'/Portfolio/img/8-cv/5.png',
			'/Portfolio/img/8-cv/6.png',
			'/Portfolio/img/8-cv/7.png',
		]
	},

	{
		id: 309,
		title: 'aston martin',
		address: 'https://buinyiov.github.io/Aston-Martin/',
		subtitle: 'Galeria zdjęć z filtrowaniem i specjalnym suwakiem',
		date: '2023',
		tech: ['HTML', 'SCSS', 'JavaScript', 'RWD', 'Prepros', 'Babel'],
		descr: 'Galeria zdjęć wysokiej jakości Astona Martina. Połączone są dwie biblioteki JS: „Isotope” - filtrowanie i sortowanie oraz suwak.',
		images:[
			'/Portfolio/img/9-aston_martin/1.png',
			'/Portfolio/img/9-aston_martin/2.png',
			'/Portfolio/img/9-aston_martin/3.png',
			'/Portfolio/img/9-aston_martin/4.png',
			'/Portfolio/img/9-aston_martin/5.png',
		]
	},

	{
		id: 310,
		title: 'freedom music',
		address: 'https://buinyiov.github.io/MyOwn_Muz/',
		subtitle: 'Layout strony sklepu audio wraz z odtwarzaczem',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Layout witryny jest tworzony przy użyciu HTML i SCSS. Znajduje się tam łącze do layoutu odtwarzacza audio na tej stronie.',
		images:[
			'/Portfolio/img/10-freedom_music/1.png',
			'/Portfolio/img/10-freedom_music/2.png',
			'/Portfolio/img/10-freedom_music/3.png',
			'/Portfolio/img/10-freedom_music/4.png',
			'/Portfolio/img/10-freedom_music/5.png',
		]
	},

	{
		id: 311,
		title: 'traveller',
		address: 'https://buinyiov.github.io/FotoStudio/',
		subtitle: 'Strona podróżnika',
		date: '2022',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Layout witryny jest tworzony przy użyciu HTML i SCSS.',
		images:[
			'/Portfolio/img/11-traveller/1.png',
			'/Portfolio/img/11-traveller/2.png',
			'/Portfolio/img/11-traveller/3.png',
		]
	},

	{
		id: 312,
		title: 'game one',
		address: 'https://buinyiov.github.io/Game_One/',
		subtitle: 'Gra przeglądarkowa',
		date: '2023',
		tech: ['HTML', 'SCSS', 'RWD', 'Prepros', 'Babel'],
		descr: 'Prosta gra przeglądarkowa zbudowana wyłącznie z HTML i SCSS.',
		images:[
			'/Portfolio/img/12-game_one/1.png',
			'/Portfolio/img/12-game_one/2.png',
			'/Portfolio/img/12-game_one/3.png',
			'/Portfolio/img/12-game_one/4.png',
		]
	},
	]

	const aboutEN = {
		text: [
			'I work with React and pure JavaScript.',
			'Experience working in a multilingual team.',
			'I conduct business correspondence and process documentation in English.',
			'I learn quickly and efficiently, and I organize my own time well.',
			'High personal culture.'
			],
		download:[
			{
				title: 'Download CV EN',
				path: 'Oleksii_Buinyi_CV_EN.pdf'
			},
			{
				title: 'Download CV PL',
				path: 'Oleksii_Buinyi_CV_PL.pdf'
			},
			{
				title: 'Download CV UA',
				path: 'Oleksii_Buinyi_CV_UA.pdf'
			},
		],
	}
	
	const aboutPL = {
		text: [
			'Pracuję z Reactem i czystym JavaScriptem.',
			'Mam doświadczenie w pracy w wielojęzycznym zespole.',
			'Prowadzę korespondencję biznesową i procesuję dokumentację w języku angielskim.',
			'Szybko i sprawnie się uczę, dobrze organizuję swój czas.',
			'Wysoka kultura osobista.'
		],
		download:[
			{
				title: 'Pobierz plik CV EN',
				path: 'Oleksii_Buinyi_CV_EN.pdf'
			},
			{
				title: 'Pobierz plik CV PL',
				path: 'Oleksii_Buinyi_CV_PL.pdf'
			},
			{
				title: 'Pobierz plik CV UA',
				path: 'Oleksii_Buinyi_CV_UA.pdf'
			},
		],
	}
	
	const aboutUA = {
		text: [
			'Працюю з React та чистим JavaScript.',
			'Досвід роботи в багатомовному колективі.',
			'Веду ділову переписку та опрацювання документації англійською мовою.',
			'Швидко та ефективно навчаюсь, а також добре організовую власний час.',
			'Висока культура особиста.'
		],
		download:[
			{
				title: 'Завантажити CV EN',
				path: 'Oleksii_Buinyi_CV_EN.pdf'
			},
			{
				title: 'Завантажити CV PL',
				path: 'Oleksii_Buinyi_CV_PL.pdf'
			},
			{
				title: 'Завантажити CV UA',
				path: 'Oleksii_Buinyi_CV_UA.pdf'
			},
		],
	}

return { ua,
			en,
			pl,
			aboutEN,
			aboutPL,
			aboutUA,
		}

}

export default DataBase;