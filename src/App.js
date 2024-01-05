import './App.css';
import Blog from "./pages/Blog";
import FullStack from "./pages/FullStack";
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <div className='container pt-1 pb-3'>
          <div className='navbar'>
            <a className="navbar-brand" href="#">
              <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" referrerpolicy="no-referrer" width="121" height="53" className="d-inline-block align-top" alt="" />
            </a>
            <div className='navbar navbar-all'>
              <Link to="/blog" style={{ textDecoration: 'none' }}><p>COURSES</p></Link>
              <Link to="/full-stack-developement" style={{ textDecoration: 'none' }}><p>LIVE CLASSES</p></Link>
              <Link to="/data-science" style={{ textDecoration: 'none' }}><p>PRACTICES</p></Link>
              <Link to="/cyber-security" style={{ textDecoration: 'none' }}><p>RESOURCES</p></Link>
              <Link to="/career" style={{ textDecoration: 'none' }}><p>OUR PRODUCTS</p></Link>
            </div>
          </div>

        </div>
        <div className='container'>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png" referrerpolicy="no-referrer" alt="guvi" height="200" />
        </div>
        <div className='container'>
          <div className='navbar navbar-course mt-5 mb-5 w-50 mx-auto'>
            <Link to="/" style={{ textDecoration: 'none' }}><p>ALL</p></Link>
            <Link to="/full-stack-developement" style={{ textDecoration: 'none' }}><p>FULL STACK DEVELOPEMENT</p></Link>
            <Link to="/data-science" style={{ textDecoration: 'none' }}><p>DATA SCIENCE</p></Link>
            <Link to="/cyber-security" style={{ textDecoration: 'none' }}><p>CYBER SECURITY</p></Link>
            <Link to="/career" style={{ textDecoration: 'none' }}><p>CAREER</p></Link>
          </div>
          <div>
            <Routes>
              <Route path='/' Component={Blog}></Route>
              <Route path='/full-stack-developement' Component={FullStack}></Route>
              <Route path='/data-science' Component={DataScience}></Route>
              <Route path='/cyber-security' Component={CyberSecurity}></Route>
              <Route path='/career' Component={Career}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;