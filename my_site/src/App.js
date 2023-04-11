
import './App.css';
import './mystyle.css';
import React, { useEffect, useState } from 'react';
import { Card, Row } from 'antd'



function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('#9d8ef6') });
function App() {
  const [users, setUsers] = useState([]);
  const [userPosts, setPosts] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(Users => Users.json()).then(Users => 
    {
      if (Users && Array.isArray(Users) && Users.length > 0)
      {
        setUsers(Users);
      }
    })
    
    fetch('https://jsonplaceholder.typicode.com/posts').then(Posts => Posts.json()).then(Posts =>
    {
      if (Posts && Array.isArray(Posts) && Posts.length > 0)
      {
        setPosts(Posts);
      }
    })
  }

  

  useEffect(()=>{
    getData();
  }, [])


  return(
    <>
      
      
      <div style={{margin: '0 auto', display: 'grid', gap: 10, width: 850 }}>
        {users.length > 0 && users.map(user => {
            return (
            <Card class='AuthorLib' title={`Author: ${user.name}`} key={Math.random()} style = {{borderColor: '#aed2ea', backgroundColor: '#aed2ea'}}>
              
              <p>Email adress: <strong style = {{color: 'red'}}>{user.email}</strong></p>
              <p>Phone nomber: <strong style = {{color: 'yellow'}}>{user.phone}</strong></p>
              
              <Row gutter={10}>  
               {
                userPosts.filter(post => post.userId === user.id).map(post =>{
                  return(

                      <Card title={post.title} style={{margin:10, borderColor: '#aed2ea'}} headStyle={{backgroundColor: '#3352ff', color: '#fff'}}>
                        
                        <p class = 'Paragraph'>{post.body}</p>

                      </Card>

                      ) 
                
                    } 
                  )
              }
              </Row>

            </Card>);
          })
        }
      </div>
    </>
  )
}

export default App;