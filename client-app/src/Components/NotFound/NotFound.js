import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img alt='404 Not Found!' src='https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png' />
        {/* <h1>Not Found!</h1> */}
        <Link style={{ backgroundColor: '#73b900', padding: '10px 25px', borderRadius: '5px', color: '#025602', fontWeight: '700', textDecoration: 'none' }} to="/">Go Home</Link>
    </div>
);

export default NotFound;