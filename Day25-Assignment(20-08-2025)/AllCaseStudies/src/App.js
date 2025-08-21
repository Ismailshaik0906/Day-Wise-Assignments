import logo from './logo.svg';
import './App.css';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import UserManagement from './components/UserManagement';
import PostwithComments from './components/PostwithComments';
import TodoTracker from './components/TodoTracker';

function App() {
  return (
    <div className="App">
      {/* <ProductListing/> */}
      {/* <ShoppingCart/> */}
      {/* <UserManagement/> */}
      {/* <PostwithComments/> */}
      <TodoTracker/>
    </div>
  );
}

export default App;
