import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <main>
      {children}
    </main>
  </div>
);
Layout.propTypes = {
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: null,
};
export default Layout;
