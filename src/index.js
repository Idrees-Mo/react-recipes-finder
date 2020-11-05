import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import RecipeState from './context/recipeContext/RecipeState'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/default'
import GlobalStyles from './styles/global'
import App from './container/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecipeState>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </RecipeState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));