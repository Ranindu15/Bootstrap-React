import React from 'react';
import './App.css';
import Imageone from './assests/img/bg-showcase-1.jpg';
import Imagetwo from './assests/img/bg-showcase-2.jpg';
import Imagethree from './assests/img/bg-showcase-3.jpg';

function App() {
  return(

  <div className="App">

    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <a className="btn btn-primary" href="#">Sign In</a>
      </div>
    </nav>
    <header className="masthead text-white text-center">
      <div className = "overlay"> </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Build a landing page for your business or project and generate more leads!</h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                </div>
                <div className="col-12 col-md-3">
                  <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
              <i className="fa fa-desktop fa-5x text-primary">
              </i>
            <h3>Fully responsive</h3>
            <p className="lead mb-0">Thisthem will look great on any device, no matter the size!</p>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <i className="fa fa-clone m-auto text-primary fa-5x">
              </i>
            </div>
            <h3>Bootstrap 4 Ready</h3>
            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <i className="fa fa-check-circle m-auto text-primary fa-5x">
              </i>
            </div>
            <h3>easy to Use</h3>
            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
          </div>
      </div>
      </div>
    </section>
    <section className="showcase">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <img className="col-lg-6 order-lg-2 text-white showcase-img" src={Imageone}/>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will
              look great on any device, whether it's a phone, tablet, or desktop the page will behave
              responsively!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <img className="col-lg-6 text-white showcase-img" src={Imagetwo} alt=""/>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Updated For Bootstrap 4</h2>
            <p className="lead mb-0">Newly improved, and full of great utility class, Bootstrap 4 is leading the
              way
              in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap
              4!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <img className="col-lg-6 order-lg-2 text-white showcase-img" src={Imagethree}/>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Easy to Use &amp; Customize</h2>
            <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some
              deeper customization options. Out of the box, just add your content and images, and your new landing
              page will be ready to go!</p>
          </div>
        </div>
      </div>


    <section className="call-to-action text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="email" className="form-control form-control-lg" placeholder="Enter your email...">
                  </input>
                </div>
                <div className="col-12 col-md-3">
                  <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2019. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fa fa-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fa fa-twitter-square fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
export default App;
