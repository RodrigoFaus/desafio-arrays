function botonComprar() {

    const Celus = [{ marca: "iphone", modelo: "I13", precio: 500 },
    { marca: "iphone", modelo: "I12", precio: 400 },
    { marca: "iphone", modelo: "I11", precio: 300 },
    { marca: "samsung", modelo: "S22", precio: 500 },
    { marca: "samsung", modelo: "S21", precio: 400 },
    { marca: "samsung", modelo: "S20", precio: 300 },
    { marca: "motorola", modelo: "E30", precio: 500 },
    { marca: "motorola", modelo: "E20", precio: 400 },
    { marca: "motorola", modelo: "E10", precio: 300 },
    ];

    const ingresado = prompt("Ingrese Iphone, Samsung o Motorola para ver el catalogo de nuestros celulares")

    if ((ingresado == "iphone") || (ingresado == "IPHONE") || (ingresado == "Iphone")) {
        const iphone = Celus.filter((el) => el.marca.includes("iphone"))
        console.log(iphone)
    }

    else if ((ingresado == "samsung") || (ingresado == "SAMSUNG") || (ingresado == "Samsung")) {
        const samsung = Celus.filter((el) => el.marca.includes("samsung"))
        console.log(samsung)

    }
    
    else if ((ingresado == "Motorola") || (ingresado == "MOTOROLA") || (ingresado == "Motorola")) {
        const motorola = Celus.filter((el) => el.marca.includes("motorola"))
        console.log(motorola)

    } else {
        alert("Modelo no disponible")
    }


}

