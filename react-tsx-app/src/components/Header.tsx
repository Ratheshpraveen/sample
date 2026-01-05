import React from 'react';
import ReactLogo from '../assets/react.svg';

// Define the props interface for the Header component
interface HeaderProps {
  title?: string;
  links?: { label: string; href: string }[];
}

// Default props for the Header component
const defaultProps: HeaderProps = {
  title: 'My React App',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]
};

const Header: React.FC<HeaderProps> = ({ 
  title = defaultProps.title, 
  links = defaultProps.links 
}) => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={ReactLogo} 
          alt="Logo" 
          style={{ 
            height: '40px', 
            marginRight: '1rem' 
          }} 
        />
        <h1 style={{ 
          margin: 0, 
          fontSize: '1.5rem', 
          color: '#333' 
        }}>
          {title}
        </h1>
      </div>
      
      <nav>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0 
        }}>
          {links.map((link, index) => (
            <li key={index} style={{ marginLeft: '1rem' }}>
              <a 
                href={link.href} 
                style={{ 
                  textDecoration: 'none', 
                  color: '#333',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#007bff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#333'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Set default props
Header.defaultProps = defaultProps;

export default Header;
