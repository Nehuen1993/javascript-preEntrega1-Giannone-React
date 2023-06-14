import { useEffect, useState } from "react";
import { getClase } from "../../datos/productos";
import { Table } from 'react-bootstrap';
import { Link, useParams} from "react-router-dom";

const ClaseFrenos = () => {
    
    const [productos, setClase] = useState([]);
  
    useEffect(() => {
      getClase("frenos").then((productos) => {
        setClase(productos);
      });
    }, []);


    return (
        <>
        <Table>
          <h1>Lista de repuestos  </h1>
    
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
                     <td>
                     <Link to={`/productos/${producto.id}`}>
                     {producto.nombre}
                     </Link>
                     </td>
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
    
export default ClaseFrenos;
