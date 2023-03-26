# Simulador e-commerce xClothes React.js 

Este es mi práctica del curso de React en [Coderhouse](https://www.coderhouse.es/)

![Coderhouse](https://www.coderhouse.es/imgs/ch.svg)



Este proyecto cuenta con las siguientes secciones:
- Home: la página principal de la tienda que muestra una selección de productos destacados y una sección de categorías.
- ItemListContainer: una página que muestra todos los productos disponibles en la tienda, filtrados por categoría si se especifica en la URL.
- ItemDetailContainer: una página que muestra los detalles de un producto seleccionado, como su talle, precio y opcion para agregar al carrito.
- Cart: una página donde se pueden ver los productos agregados al carrito,la opción para eliminar la cantidad de los productos de a uno y finalizar la compra.
- Checkout: una página que recopila los datos del usuario para completar la orden y se manda a la base de datos.

## Componentes
1. NavBar
2. Catálogo
3. Detalle de producto 
4. CartContext 
5. CartWidget

## Tecnologías utilizadas

Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

- React: librería para construir interfaces de usuario.
- React Router: librería para manejar el enrutamiento de la aplicación.
- Firebase: utilizada para que los productos se almacenan en la base de datos de Firestore.       

```
"@fortawesome/fontawesome-svg-core": "^6.3.0",
"@fortawesome/free-regular-svg-icons": "^6.3.0",
"@fortawesome/free-solid-svg-icons": "^6.3.0",
"@fortawesome/react-fontawesome": "^0.2.0",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"firebase": "^9.18.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.7.1",
"react-router-dom": "^6.8.1",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
