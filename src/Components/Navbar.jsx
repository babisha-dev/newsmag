

import PropTypes from 'prop-types';

const Navbar = ({ setCategory }) => {
  const handleCategoryChange = (event, category) => {
    event.preventDefault(); 
    setCategory(category);  
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleCategoryChange(e, 'technology')}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleCategoryChange(e, 'business')}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleCategoryChange(e, 'health')}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleCategoryChange(e, 'sports')}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleCategoryChange(e, 'entertainment')}>Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Navbar;
