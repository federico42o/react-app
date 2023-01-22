
import './App.css';
import api from './api/axiosConfig.js'
import {useState,useEffect} from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

useEffect(() => {
  try {

    api.get('/streams')
      .then(response => {
        
        setData(response.data);
        console.log(response.data)
        setIsLoading(false);
      });
  } catch (error) {
    console.error(error);


  }
  },   []);

if (isLoading) {
  return <p>Loading...</p>;
}



return (
  <div style={{textAlign:"center",backgroundColor: "#fff",color: "#9d4de3"}}>

  <h1>20 Most Viewed Streamers on Twitch </h1>

  <div style={{}}>
    {data.data.map((item) => (
      <a href={'https://twitch.tv/' + item.user_name} style={{textDecoration: 'none'}} target="_blank">
      <div key={item.id} style={{border:'2px solid black'}} >
        <div className='cuadro' style={{display:'flex',gap:"30px",alignItems:"center",width:'100%', color:"black",justifyContent:"center"}}>
        <p>{item.user_name}</p>
        <p>playing:</p>
        <p>{item.game_name}</p>
        <p>for</p>
        <p>{item.viewer_count}</p>
        <p>viewers</p>

        </div>
      </div>
        </a>
    ))}
  </div>
</div>
);


}
export default App;

