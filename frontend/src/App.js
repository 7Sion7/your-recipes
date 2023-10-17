import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home.js';
import {Auth} from './pages/auth.js';
import {Recipe} from './pages/recipe.js';
import { Category } from './pages/category.js';
import {CreateRecipe} from './pages/create-recipe.js';
import {SavedRecipes} from './pages/saved-recipes.js';
import Header from './components/Header.js'
import './styles/css/styles.css';


  function App() {

    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home className="home"/>} />
            <Route path='/auth' element={<Auth className="auth"/>}/>
            <Route path='/recipe/:recipeId' element={<Recipe className="recipe"/>} />
            <Route path="/categories/:categoryName" element={<Category className="category"/>} />
            <Route path='/create-recipe' element={<CreateRecipe className="create-recipe"/>}/>
            <Route path='/saved-recipes' element={<SavedRecipes className="saved-recipes"/>}/>
          </Routes>
        </Router>
      
      </div>
    );
  };


export default App;