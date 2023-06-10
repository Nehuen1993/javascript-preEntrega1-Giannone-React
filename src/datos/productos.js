import  productos  from "./productos.json";

export const getUser = () => {
    return new Promise((resolve, reject) => {
        resolve (productos);
    });
};
