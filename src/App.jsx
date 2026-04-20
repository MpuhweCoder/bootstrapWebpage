import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main className="container my-5 flex-grow-1">
            <div className="card mx-auto">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                    alt="Google Building"
                    className="img-fluid"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-lg-6">
                  <p className="card-text mb-0">
                    Google is an American multinational technology corporation focused on information technology, online advertising, search engine technology, email, cloud computing, software, quantum computing, e-commerce, consumer electronics, and artificial intelligence (AI). It has been referred to as "the most powerful company in the world" by the BBC and is one of the world's most valuable brands. Google's parent company Alphabet Inc. has been described as a Big Tech company.
                  </p>
                </div>
              </div>
            </div>
          </main>
        );

      case 'about':
        return (
          <main className="container my-5 flex-grow-1">
            <div className="card mx-auto">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                    alt="Google Team"
                    className="img-fluid"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-3">About Google</h2>
                  <p className="card-text mb-0">
                    Google was founded in 1998 by Larry Page and Sergey Brin as a research project at Stanford University. The company's mission is to organize the world's information and make it universally accessible and useful. Today, Google is one of the world's most recognizable brands and operates in over 190 countries. With a focus on innovation and user experience, Google continues to develop cutting-edge technologies including artificial intelligence, cloud computing, and quantum computing. The company employs over 150,000 people worldwide and is committed to creating positive change through technology.
                  </p>
                </div>
              </div>
            </div>
          </main>
        );

      case 'contact':
        return (
          <main className="container my-5 flex-grow-1">
            <div className="card mx-auto">
              <h2 className="mb-4 text-center">Contact Us</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card p-4">
                    <h5 className="mb-3">📧 Email</h5>
                    <p className="card-text mb-0">
                      For general inquiries: <strong>info@google.com</strong><br/>
                      For support: <strong>support@google.com</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-4">
                    <h5 className="mb-3">📍 Address</h5>
                    <p className="card-text mb-0">
                      1600 Amphitheatre Parkway<br/>
                      Mountain View, CA 94043<br/>
                      United States
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-4">
                    <h5 className="mb-3">📞 Phone</h5>
                    <p className="card-text mb-0">
                      Main: <strong>+1 (650) 253-0000</strong><br/>
                      Support: <strong>+1 (650) 253-0101</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-4">
                    <h5 className="mb-3">🕐 Hours</h5>
                    <p className="card-text mb-0">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar / Header */}
      <header className="bg-white border-bottom">
        <nav className="container d-flex align-items-center justify-content-between py-3">
          <button
            className="navbar-brand bg-transparent border-0 p-0"
            onClick={() => setCurrentPage('home')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png"
              alt="Google"
              height="36"
              referrerPolicy="no-referrer"
            />
          </button>
          <ul className="nav">
            <li className="nav-item">
              <button
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => setCurrentPage('about')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => setCurrentPage('contact')}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="footer mt-auto">
        <div className="container text-center">
          <span>2026 Copyright - All Right Reserved</span>
        </div>
      </footer>
    </div>
  );
}
