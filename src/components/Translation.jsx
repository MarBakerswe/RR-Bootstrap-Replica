import React, { useState } from 'react';

const LanguageSelect = () => {
  const [selectedLang, setSelectedLang] = useState('en');

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <div>
      <select value={selectedLang} onChange={handleLangChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <p>
        {selectedLang === 'en'
          ? 'Hello! Welcome to our website.'
          : '¡Hola! Bienvenido a nuestro sitio web.'}
      </p>
    </div>
  );
};

export default LanguageSelect;
