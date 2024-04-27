
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((data)=>{
      setProducts(data)
    })
  })

  return (
    <div className="App">
    <div className="container">
      
 <ul className="list">
 {
    products.map((item, index)=>(
      <li key={item.id}>
       <div className="card" style={{width: "18rem"}}>
        <img src={item.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>

        </div>
      </div>
      </li>
    ))
   }
 </ul>
    </div>
    </div>

  );
}

export default App;
