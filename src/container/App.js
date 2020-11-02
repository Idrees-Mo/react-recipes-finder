import { useContext, useEffect } from 'react'
import RecipeContext from '../context/recipeContext'
import Header from '../components/Header'
import Main from '../container/Main'
import '../App.css';

const App = () => {
  const { GET_RECIPES } = useContext(RecipeContext)
  // useEffect(() => {
  //   GET_RECIPES()
  // }, [])
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;