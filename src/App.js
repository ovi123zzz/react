
import style from './App.css';
import PlaceList from './AirbnbList/PlaceList'
import iconFb from './images/icon-facebook.svg'
import iconIg from './images/iconInstagram.svg'
import iconTw from './images/icon-twitter.svg'
import iconYt from './images/icon-youtube.svg'
import FollowersList from './TotalFollowersList/FollowersList';
import StateEx from './StateEx'
import Hooks from './ReactHooks/Hooks'
import ProductList from './ProductList/ProductList';
import { Button } from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;

const airbnbPlaces = [{
  img: 'https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?s=1024x768',
  title: 'Penthouse in Rome',
  city: 'City Rome',
  bookingStyle: 'Entire Apartment',
  rating: 232,
  superhost: true
},
{
  img: "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?s=1024x768",
  title: 'Wow WOw location in Paris ',
  city: 'Paris',
  bookingStyle: 'Entire Room',
  rating: 1,
  superhost: false
},
{
  img: "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?s=1024x768",
  title: 'Cusca in Londra',
  city: 'London',
  bookingStyle: 'Toata cusca',
  rating: 20,
  superhost: true
},
{
  img: "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?s=1024x768",
  title: 'Formidable room in Austria ',
  city: 'Wien',
  bookingStyle: 'Entire Apartment',
  rating: 55,
  superhost: false
}, {
  img: "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?s=1024x768",
  title: 'The Cozy place',
  city: 'Iasi',
  bookingStyle: 'Entire House',
  rating: 44,
  superhost: false
}]
const socialDashboard = [
  {
    id: 123123141,
    socialTag: 'nathan',
    followersNumber: 17200,
    todayFollowers: 15,
    // image: iconFb
  },
  {
    id: 232323131,
    socialTag: 'John',
    followersNumber: 200,
    todayFollowers: 120,
    // image: iconIg
  },
  {
    id: 424242444,
    socialTag: 'Andy',
    followersNumber: 5,
    todayFollowers: 1,
    // image: iconTw
  }, {
    id: 123566666,
    socialTag: 'Sasha',
    followersNumber: 11000,
    todayFollowers: 1544,
    // image: iconYt
  }
]


function App() {
  const [current, setCurrent] = useState()
 const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  return (
    <>
 <Router>
      <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
       
              <Link to="/">Place list</Link>
           
        </Menu.Item>
        <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <Link to="/followers">Followers List</Link>
        </Menu.Item>
        <Menu.Item key="three" icon={<SettingOutlined />}>
        <Link to="/stateEx">State exercise</Link>
        </Menu.Item>
        <Menu.Item key="four" icon={<MailOutlined />}>
        <Link to="/hookEx">Hook exercise</Link>
        </Menu.Item>
        <Menu.Item key="five" icon={<MailOutlined />}>
        <Link to="/product">Product list exercise</Link>
        </Menu.Item>
      
    </Menu>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/followers">
            <FollowersList data={socialDashboard}/>
          </Route>
          <Route path="/stateEx">
           <StateEx/>
          </Route>
          <Route path="/hookEx">
            <Hooks name="Ovidiu"/>
          </Route>
          <Route path="/product">
            <ProductList/>
          </Route>
          <Route path="/">
            <PlaceList airbnbList={airbnbPlaces}/>
          </Route>
        </Switch>
      </div>
    </Router>
    <div className={style.App}>
      {/* <div className={style.airbnbList}></div>
    
      <div><h1>Social media dashboard</h1>
      <span>Total followers: 23 432</span></div> */}
      
      
     
    </div>
    </>
  );
}

export default App;
