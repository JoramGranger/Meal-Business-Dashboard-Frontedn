import { Card, Descriptions, Divider, List, Button } from 'antd';
import dishes from '../src/assets/data/dashboard/dishes.json';
import DetailedOrder from './modules/DetaileOrder';
import Orders from './modules/Orders';
import { Routes, Route } from 'react-router-dom';
import { Layout, Image } from 'antd';
import SideMenu from './components/SideMenu';
import RestaurantMenu from './modules/RestaurantMenu';
import CreateMenuItem from './modules/CreateMenuItem';
import OrderHistory from './modules/OrderHistory';
import AppRoutes from './components/AppRoutes';
const { Sider, Content, Footer } = Layout;


function App() {
  return (
    <AppRoutes />
    //<Routes>
      //<Route path="/" element={<Orders />}/>
      //<Route path="order/:id" element={<DetailedOrder />}/>
    //</Routes>
  );
}

export default App;
