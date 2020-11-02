import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import RecipeState from './context/recipeContext/RecipeState'
import App from './container/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecipeState>
        <App />
      </RecipeState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));