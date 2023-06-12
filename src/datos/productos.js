import  productos  from "./productos.json";

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        resolve (productos);
    });
};

export const getProducto = (id) => {
    return new Promise((resolve, reject) => {
        resolve (productos.find((producto) => producto.id === id));
    });
};

export   const getClase = (clase) => {
    return new Promise((resolve, reject) => {
        resolve (productos.filter((producto) => producto.clase === clase));
    });
};
