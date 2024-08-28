//* ASYNC AWAIT

// Sinonimo
const getImagenPromesa = () => new Promise( (resolve) => resolve('https://ajasdasdasd.com'));
getImagenPromesa().then( console.log );

// Usando async
const getImagen = async () => {
    try {
        // El await espera a que la promesa se resuelva
        const apiKey = "hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
}

//console.log( getImagen() );
//getImagen().then( console.log );
getImagen();
