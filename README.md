## Структура приложения 

***Как поменять компании, бренды, услуги на настоящие:*** <br />
1. Чтобы поменять данные о компании следует править файл `data/laptops/company.json`. 
2. Под ключами "brand" и "service" передается массив id доступных брендов/сервисов. Именно на основании этого массива происходит фильтрация . 



***Как добавить новую категорию:*** <br />

**Обязательные этапы добавления категории**
1. Создать данные в формате json в папке `data`
2. Создать контекст в папке `context`
3. Добавить импорт файлов из пункта `1 и 2` в файл  `RouterComponent.js`
4. Добавить линк в `Header.js`

Подробнее: 
1. Данные о каждой категории хранятся в папке `data`, в соответствующей названию папке, например `data/laptops`. Следует создать новую папку внутри `data`. Например создать `data/exmpl`
2. В этой папке должны бать 3 файла: `brands.json, services.json, company.json`. Здесь у файлов `brands.json, services.json` должны быть обязательные ключи: name-для отображаемого названия, slug-для ссылки, **id**-уникальный номер.
3. В файле `company.json`, у каждой компании должны быть ключи **"brand"**, **"service"**. Их значение должно быть равно массиву **id** нужных брендов. Например, запись `"brand": [1,2,3,4]` означает что у данной компании доступные бренды с id = 1, 2, 3, 4.
4. Когда данные сохранены, следует создать контекст. Перейти в папку  `context`. Создать подпапку для новой категории,например `context/Exmpl` , и в ней  по аналоги с уже созданными категориями, создать два файла: `ExmplContext.js, ExmplProvider.js`. Файлы полностью повторить с другой категории, единственное что следует менять -   в файле `ExmplProvider.js` импорты данных из папки `data`.
5. Когда создан контекст, следует создать папку с главным файлом новой категории: `Exmpl/ExmplApp.js`. Аналогичным будет файл `Laptops/LaptopsApp.js`. <br/>
Файл `ExmplApp.js` следует аналогично наполнить как и `LaptopsApp.js`. Только импортировать нужные данные их нужного контекста.
6. Не забыть добавить маршруты. В файле `RouterComponent.js` добавить импорт `ExmplApp.js` и `ExmplProvider.js`. Обязательно обернуть весь компонент в тег `<ExmplProvider></ExmplProvider>`. Добавить необходимые маршруты по аналогиии 



***Папки:*** <br />
1. `data` - хранит папки с данными для каждой категоии и префиксы для ссылок <br />
2. `context` - в подпапках хранятся Context и Provider контекста для каждой категории товара. <br />
    В Provider-компонент импотируются данные из папки data, записываются в state, для дальнейшего доступа <br />
3. assets - хранит стили. <br />
4. `Content, Sidebar` - тупые компоненты для рендера левой и правой колонки каждой категории <br />
5. `Washers, Laptops` - основные папки для каждой категории.<br />
В этих папках хранится файл, например `LaptopsApp.js`. В нем импортируется нужный контекст и передется в тупые компоненты. Для создание новой категории - файл должен быть аналогичный. <br />
В этом файле на тупой компонент `Sidebar` передается пропс  `typeProdUrl='laptops'`. Этот пропс нужен для создания ссылки, он должен быть аналогичен ссылке в комппоненте `Header` <br />
    
***Использование префиксов:*** <br />
1. Префиксы хранятся в папке `data/prefixes.json` под ключом, соответствующим названию категории. <br />
2. Префиксы импортируются в файлы `RouterComponent.js, Header.js`. Для удобства в начале каждого файла создается константа <br />

***О создании маршрутов:*** <br />
1. Маршруты записываются в файле `RouterComponent.js` <br />
2. В этот файл так же импортируются компоненты-провайдеры каждого контекста. Следую оборачивать функцию `RouterComponent.js` в каждый из контекстов<br />



## Доступные команды
  
### `npm start`

Для запуска в режиме разработчика<br />
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере. 

### `npm run sitemap`

Для создание файла `sitemap.xml` 

Автоматичиски запуститься файл `sitemap-generator.js`, который сгенерирует `sitemap.xml` в папку public.<br />
Описание маршрутов находится в файле `sitemap-routes.js`

`npm run sitemap` следует вызывать перед `npm run build`

  
### `npm run build`

Создает билд 

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. 

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
 
