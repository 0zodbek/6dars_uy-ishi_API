import React, {useState,useRef,useEffect} from 'react'
import "../src/App.css"

function App() {

  const minRef = useRef("");
  const maxRef = useRef("");
  const [users, setUsers] = useState([]);

  async function geData(url){
    try {
      const response = await fetch(url);
      let data = [];
      if(response.status == 200){
      data = await response.json()
      }
      return data;
    } catch (error) {
      console.log(error);
    }
    }
    useEffect(() => {
    geData("https://jsonplaceholder.typicode.com/photos")
    .then(data => {
    setUsers(data)
    })
    .catch(err => {
    console.log(err);
    })
    })
    
      return (
        
        <div >
    
          <form className='container' action="" >
            <input ref={minRef} type="number"  placeholder="Enter the initial value" />
            <input ref={maxRef} type="number"  placeholder="Enter the initial value" />
            <button >save</button>
          </form>
          <br />
        <div className="wrapper container">
          {
          users.length && users.map(function(user,index){
           
           if(minRef.current.value < user.id && user.id < maxRef.current.value){
          return<>
            <div style={{backgroundColor:user.url}} key={index} class="post-card">
            <img src={user.thumbnailUrl} alt="" />
            <h3>{user.title}</h3>
            <p>{user.id}</p>
            <p>{user.albumId}</p>
           </div>
          </>
          }
          })
          }
        </div>
          </div>
      )
    }
    
    export default App