
//export function App() {   // Esta exportacion es individual, osea solo exporto algo especifico del archivo
//export default function App() {
function App() {
    // document.createElement........
    return (<h1>Hola Mundo!!!</h1>);
}

export const HelloWordApp = () => {
    return (
        <div>Hello Word App</div>
    )
}

export default App; // Tambien podria haberla puesto en la misma linea que la definicion de la fn