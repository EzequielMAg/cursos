 ### Tenemos que configurar nuestro proyecto para hacer pruebas ya que al crearlo con VITE no vienen por default a diferencia de CRA.

- Usamos el siguiente comando para instalar JEST:
    > yarn add --dev jest

- Tambien vamos a instalar el intelisence para que me ayude con el autocompletado de los metodos de testing:
    > yarn add -D @types/jest

- No se pueden hacer pruebas de algo que no esta siendo exportado.

### Tambien debemos configurar Babel. Con el siguiente comando lo instalamos:
    > yarn add --dev babel-jest @babel/core @babel/preset-env

- Y tambien crear el siguiente archivo:
File name: babel.config.js

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
