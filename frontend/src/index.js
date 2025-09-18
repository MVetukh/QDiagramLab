import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>QDiagramLab Frontend</h1>
      <p>Фронтенд для работы с квантовыми диаграммами</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);