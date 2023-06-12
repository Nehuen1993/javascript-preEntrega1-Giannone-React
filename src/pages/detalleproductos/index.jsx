import { useEffect, useState } from "react";
import { getProducto } from "../../datos/productos";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const DetalleProducto = () => {
  const {id} = useParams ();
  const [producto, setProducto] = useState ({});
  
  useEffect(() => {
    getProducto(id).then((producto) => {
      setProducto(producto);
    });
  }, []);

  if (!producto) return <p>Espere por favor</p>

return (
    <>
    <Card>
    <div className="card">
  <div className="card-header">
    {producto.nombre}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{producto.imagen}</li>
    <li className="list-group-item">Clase: {producto.clase}</li>
    <li className="list-group-item">Precio: ${producto.precio}</li>
    <li className="list-group-item">Cantidad: {producto.cantidad}</li>
  </ul>
</div>
      </Card>
    </>
  );
};
export default DetalleProducto;
