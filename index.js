// Probar metodos de arrays
// crear una funcion por cada metodo del Array y probar su funcionamiento

// findIndex : Busca un elemento y retorna el índice del mismo

const probandoFindIndex = () => {
    const arrayNombres = ['Juan', 'Maria', 'Pedro', 'Lucas', 'Marta'];
    const indiceFind = arrayNombres.findIndex((f) => f === 'Marta');
    console.log(indiceFind); // 4
}
probandoFindIndex();

// every : Condición que siempre se debe cumplir

const probandoEvery = () => {
    const todosPreciosMenorMil = (currentValue) => currentValue < 1000;
    const arrayPrecios = [500, 200, 100, 600, 400, 500, 950];
    const everyPreciosMenorMil = arrayPrecios.every(todosPreciosMenorMil);
    console.log(everyPreciosMenorMil); // true
};
probandoEvery();

// some : condicion que al menos se de cumplir una vez

const probandoSome = () => {
    const algunosPreciosMenorMil = (currentValue) => currentValue < 1000;
    const arrayPrecios = [500, 200, 1050, 600, 400, 500, 2000];
    const somePreciosMenorMil = arrayPrecios.some(algunosPreciosMenorMil);
    console.log(somePreciosMenorMil); // true
};
probandoSome();

// filter : crea un nuevo array a partir de los valores filtrados

const probandoFilter = () => {
    const arrayProductos = [
        {
            nombre: 'computador',
            precio : 500000
         }, 
        {
            nombre :'notebook',
            precio :  650000
        },
        {
            nombre : 'tablet',
            precio : 200000
        }, 
        {
            nombre :'impresora',
            precio : 600000
        }
    ];

    const arrayFilterPrecio = arrayProductos.filter((p) => p.precio < 600000);
    console.log(arrayFilterPrecio);
    //   [
    //    { nombre: 'computador', precio: 500000 },
    //    { nombre: 'tablet', precio: 200000 }
    //  ]
};
probandoFilter();

// map: crea un nuevo arreglo que permite modificar los valores

const probarMap = () => {
    const arrayPrecios = [5000, 2000, 10500, 6000, 4000, 5000, 20000];
    const arrayPreciosConDiezPorCiento = arrayPrecios.map((p)=> p + p * 0.10);
    console.log(arrayPreciosConDiezPorCiento);
    // [ 5500, 2200, 11550, 6600, 4400, 5500, 22000 ]

    console.log(arrayPrecios);
    // [ 5000, 2000, 10500, 6000, 4000, 5000, 20000]
};
probarMap();