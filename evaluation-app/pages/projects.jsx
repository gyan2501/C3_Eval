import axios from 'axios';
import React from 'react'


export async function getStaticProps() {
    const res = await axios.get("https://api.github.com/search/repositories?q=user:gyan2501+fork:true&sort=updated&per_page=10&type=Repositories");
   const data = res.data
  
    return {
      props: {
        data: data,
      },
    };
  }


const projects = (props) => {
   
    let gdata = props.data.items
    console.log(gdata)
  return (
    <>
     <div><h2 style={{textAlign:"center"}}>Projects</h2></div>
    <div style={{display:"grid",  gridTemplateColumns:"repeat(2,1fr)", gap:"20px", padding:"20px" ,  }}>
        {gdata.map((el)=>(
            <div key={el.id} style={{borderRadius:"10px", border:"1px solid white",padding:"20px"}}>
               <h2> {el.name}</h2> 
              <p>{el.full_name}</p>
              <br/>
              <p>Fork:{el.forks}</p>
              <p>Watchers:{el.watchers}</p>
              <p>Score:{el.score}</p>
              <p>Stars: {el.stargazers_count}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default projects
