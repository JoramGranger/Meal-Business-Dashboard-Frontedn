import { Card, Descriptions, Divider, List, Button } from 'antd';
import dishes from '../src/assets/data/dashboard/dishes.json';
import DetailedOrder from './modules/DetaileOrder';
import Orders from './modules/Orders';
import { Routes, Route } from 'react-router-dom';
import { Layout, Image } from 'antd';

const { Sider, Content, Footer } = Layout;


function App() {
  return (
    <Layout>
      <Sider style={{height: '100vh', backgroundColor: 'white'}}>
        <h2 style={{fontWeight: 'bold', fontSize: 50, textAlign: 'center'}}>MEAL</h2>
      </Sider>
      <Layout>
        <Content>
        <Routes>
          <Route path="/" element={<Orders />}/>
          <Route path="order/:id" element={<DetailedOrder />}/>
          </Routes>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Meal | Business Dashboard &copy; 2022
        </Footer>
      </Layout>
    </Layout>
    //<Routes>
      //<Route path="/" element={<Orders />}/>
      //<Route path="order/:id" element={<DetailedOrder />}/>
    //</Routes>
  );
}

export default App;
