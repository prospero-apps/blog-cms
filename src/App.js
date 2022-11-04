import './style.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Private from './components/Private'
import AddPost from './components/AddPost'
import PostPage from './components/PostPage'
import UpdatePost from './components/UpdatePost'
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route element={<Private/>}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/posts/:id' element={<PostPage/>}/>            
            <Route path='/addpost' element={<AddPost />}/>
            <Route path='/protected' element={<Protected/>}/>             
            <Route path='/updatepost/:id' element={<UpdatePost />}/>            
          </Route>
          <Route path='/login' element={<Login/>}/>    
          <Route path='/signup' element={<Signup/>}/>           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
