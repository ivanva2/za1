import logo from './logo.svg';
import './App.css';
import './mystyle.css';
import React, { useEffect, useState } from 'react';
import { Card, Row } from 'antd';
import lg from './img/logo192.png'

class Header extends React.Component
{
  render ()
  {

    return <header>Чья-то шапка. Пожалуйста, не судите строго, я не умею в дизайн.</header>

  }
}

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

  const loadUsers = () => {
    getData();
  }

  useEffect(()=>{
    getData();
  }, [])


  return(
    <>
      <Header />
      <h2><img src={lg} style = {{width: '50px', height: '50px'}}></img>{" Учу React :)"}</h2>
      <div style={{margin: '0 auto', display: 'grid', gap: 10, width: 850 }}>
        {users.length > 0 && users.map(user => {
            return (
            <Card class='AuthorLib' title={`Автор: ${user.name}`} key={Math.random()} style = {{borderColor: '#aaaaaa', backgroundColor: '#aaaaaa'}}>
              
              <p>Email adress: <strong style = {{color: 'red'}}>{user.email}</strong></p>

              <Row gutter={10}>  
               {
                userPosts.filter(post => post.userId === user.id).map(post =>{
                  return(

                      <Card title={post.title} style={{margin:10, borderColor: '#aaaaaa'}} headStyle={{backgroundColor: '#282c34', color: '#fff'}}>
                        
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