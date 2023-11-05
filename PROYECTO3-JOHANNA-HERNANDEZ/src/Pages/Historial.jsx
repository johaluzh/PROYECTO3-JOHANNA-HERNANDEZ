import { useEffect } from "react";
import { useState } from "react";
import '/Css/Historial.css'

export default function Historial() {
  //Importo los datos del saving data
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savingData")) || [];
    setData(data);
  }, []);

  //Funcion eliminar
  function Eliminar(id) {
    const nuevoSavingData = [...data];
    nuevoSavingData.splice(id, 1);
    setData(nuevoSavingData);

    localStorage.setItem("savingData", JSON.stringify(nuevoSavingData));
  }

  return (
    <div>
      {" "}
      <h1 className="center separador">Ver Historial 📋</h1>
      <div className=" center div-cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, id) => (
              <tr key={id}>
                <td>{data.fecha}</td>
                <td>{data.tipoPropiedad}</td>
                <td>{data.tipoUbicacion}</td>
                <td>{data.metros2}</td>
                <td>{data.poliza}</td>
                <td>
                  <button onClick={() => Eliminar(id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="center separador">
          <a href="/">
            <button className="button button-outline">VOLVER</button>
          </a>
        </div>
      </div>
    </div>
  );
}