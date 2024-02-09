import axios from "axios";
import { useState } from "react";


const useCrud = (urlBase) => {
  const [apiData, setapiData] = useState();

  const getApi = (path) =>{
    axios.get(`${urlBase}${path}`)
        .then(res => apiData(res.data))
        .catch(err => console.log(err));
  }
}

export default useCrud;