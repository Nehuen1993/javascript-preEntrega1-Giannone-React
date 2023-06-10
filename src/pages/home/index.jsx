import React, { useEffect, useState } from "react";
import { getUser } from "../../datos/productos";
import { Table } from 'react-bootstrap';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getUser().then((productos) => {
      setProductos(productos);
    });
  }, []);

  return (
    <>
    <Table>
      <h1>Lista de repuestos</h1>

      <table className="table" >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
                 <td>{producto.nombre}</td>
              <td>
                <img src={producto.imagen} alt={`Imagen ${producto.id + 1}`} />
              </td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Table>
    </>
  );
};

export default ProductList;

