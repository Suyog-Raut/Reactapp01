import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Navbar,Nav} from 'react-bootstrap';
import Home from './Home';
import withListLoading from './withListLoading';
import About from './About';
import 'bootstrap/dist/css/bootstrap.css';


function NavBar() {
   const ListLoading = withListLoading(Home);
  const [Data,setData] = useState({
    loading: false,
    data: null,
  });

  useEffect(()=> {
      setData({ loading: true });
    const apiUrl = `https://restcountries.eu/rest/v2/region/asia`;
       fetch(apiUrl)
         .then((res) => res.json())
         .then((data) => {
           setData({ loading: false, data: data });
         });
  },[setData])

return (

<div>
          <div className="row">
              <div className="col-md-12" style={{paddingRight:"0px"}}>
                  <Router>
                      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ padding : "15px 40px"}}>
                          <Navbar.Brand href="#home" style={{fontWeight: "600"}}>ASIA</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="ms-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/about">About</Nav.Link>

                   </Nav>  </Navbar.Collapse>
                          </Navbar>

                         <Switch>
                             <Route exact path="/">
                                  <ListLoading isLoading={Data.loading} data={Data.data} />
                             </Route>
                             <Route path="/about">
                                 <About />
                             </Route>
                         </Switch>
                     </Router>
                 </div>
             </div>
         </div>
     )
   }

export default NavBar;
