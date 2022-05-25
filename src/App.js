import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';

import Shoes from './component/Shoes';
import Detail from './component/Detail';
import data from './data';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand onClick={()=>{ navigate('/') }}>ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate(-1)/*뒤로가기*/ }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Shoes />} />
          <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
          <Route path='/event' element={<EventPage />}>
            <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path='*' element={<div>없는페이지</div>} />
        </Routes>
      </div>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
