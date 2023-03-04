import Image from 'react-bootstrap/Image'
import GreenBackground from '../images/backgroundimage.jpeg'
import React from 'react';
import LanguageSelect from '../components/Translation';

const InstaBackground = () => {
  return (
    <div
      style={{
        backgroundColor: '#deedd6', // set background color
        display: 'flex', // use flexbox to position items
        alignItems: 'center', // center items vertically
        justifyContent: 'space-between', // evenly distribute items horizontally
        padding: '0px', // add some padding
        margin: '0px', // add some margin
      }}
    >
      <div style={{ marginRight: '20px' }}> {/* add text on the left */}
        <h3>Order groceries for delivery or pickup today</h3>
        <LanguageSelect />
      </div>
      <img
        src={GreenBackground}
        alt="example"
        style={{ float: 'right' }} // float image to the right
      /> {/* add image floated to the right */}
    </div>
  );
};

export default InstaBackground;
