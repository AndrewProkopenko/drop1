## Структура приложения 

### Скачайте это приложение (ветку master)
1. В файле .env должна храниться базовая ссылка на место где храняться данные из админки 
2. В папке `src/_Frames` хранятся модули с данными( верстка + наполнение) для хедера, футера, модалки. Их можно перенаполнить по желанию  
 
 


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
 
