// Button.tsx
import React from 'react';
import styles from './Button.module.css'; // Import CSS module

const Button: React.FC = () => {

    const buttonInlineStyle = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginRight: '10px'
      };
    return (
      <>
        {/* Button styled using className from CSS module */}
        <button className={styles.button}>Click me</button>
  
        {/* Button styled using id */}
        <button id={styles.styledByIdButton}>Styled by ID</button>

        {/* Button styled using inline css */}
        <button style={buttonInlineStyle}>Styled by ID</button>
      </>
    );
  };

export default Button;
  