import axios from "axios";
import { useState } from "react";



const useCrud = (urlBase) => {
  const [apiData, setapiData] = useState([]);

  const getApi = (path) => {
    axios.get(`${urlBase}${path}/`)
    .then(res => setapiData(res.data)) // Aquí también había un error, debe ser setapiData, no apiData
    .catch(err => console.log(err));
}

const postApi = (path, data) => {
  axios.post(`${urlBase}${path}/`, data)
    .then(res => {
      setapiData([...apiData, res.data]);
      console.log(res.data);
    })
    .catch(err => console.log(err));
}

const deleteApi = (path, id) => {
  axios.delete(`${urlBase}${path}/${id}/`)
    .then(() => {
      setapiData(apiData.filter(element => element.id !== id));
      console.log('borrado con éxito');
    })
    .catch(err => console.log(err));
}

// Función updateApi movida fuera de deleteApi
const updateApi = (path, id, data) => {
  axios.patch(`${urlBase}${path}/${id}/`, data)
    .then(res => {
      setapiData(apiData.map(element => element.id === id ? res.data : element));
      console.log(res.data);
    })
    .catch(err => console.log(err));
}

return [apiData, getApi, postApi, deleteApi, updateApi];
}

export default useCrud;