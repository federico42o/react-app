
import './App.css';
import api from './api/axiosConfig.js'
import {useState,useEffect} from 'react'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('api/v1/organization/')
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.address}</p>
          <p>{item.cuit}</p>
        </div>
      ))}
    </div>
  );
}
export default App;

