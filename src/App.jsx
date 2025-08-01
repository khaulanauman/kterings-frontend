import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//customer imports
import Home from './pages/customer/Home';
import ChefProfile from './pages/customer/ChefProfile';
import Menu from './pages/customer/Menu';
import DishDetail from './pages/customer/DishDetail';
import Chefs from './pages/customer/AllChefs';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
//admin imports
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminChefs from './pages/admin/AllChefs';
import Admin from './pages/admin/Home';
import AddDishForm from './pages/admin/AddDishForm';
import DishesByCategory from './pages/admin/DishesByCategory';
import DishesByChef from './pages/admin/DishesByChef';
import EditDishPage from './pages/admin/EditDishPage';
import AddChefForm from './pages/admin/AddChefForm';
import EditChefForm from './pages/admin/EditChefForm';
import AdminChefProfile from './pages/admin/ChefProfile';
import AdminLogin from './pages/admin/AdminLogin';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            {/* customer */}
            <Route path="/" element={<Home />} />
            <Route path="/chefs/:chefId" element={<ChefProfile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/dish/:slug" element={<DishDetail />} />
            <Route
              path="/cart"
              element={<Cart />}
              />
            <Route
              path="/checkout"
              element={<Checkout />}
              />
            {/* admin */}
            {/* Admin Login */}
            <Route path="/supervised/login" element={<AdminLogin />} />
            <Route
              path="/supervised/"
              element={<ProtectedRoute><Admin /></ProtectedRoute>}
            />
            <Route
              path="/supervised/chefs"
              element={<ProtectedRoute><AdminChefs /></ProtectedRoute>}
            />
            <Route
              path="/supervised/dishes/category"
              element={<ProtectedRoute><DishesByCategory /></ProtectedRoute>}
            />
            <Route
              path="/supervised/dishes/chef"
              element={<ProtectedRoute><DishesByChef /></ProtectedRoute>}
            />
            <Route
              path="/supervised/chefs/new"
              element={<ProtectedRoute><AddChefForm /></ProtectedRoute>}
            />
            <Route
              path="/supervised/chefs/:id/edit"
              element={<ProtectedRoute><EditChefForm /></ProtectedRoute>}
            />
            <Route
              path="/supervised/chefs/:chefId"
              element={<ProtectedRoute><AdminChefProfile /></ProtectedRoute>}
            />
            <Route
              path="/supervised/dishes/new"
              element={<ProtectedRoute><AddDishForm /></ProtectedRoute>}
            />
            <Route
              path="/supervised/dishes/edit/:id"
              element={<ProtectedRoute><EditDishPage /></ProtectedRoute>}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
