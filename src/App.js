
import style from './App.module.css';
import PlaceList from './AirbnbList/PlaceList'

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
},{
  img: "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?s=1024x768",
  title: 'The Cozy place',
  city: 'Iasi',
  bookingStyle: 'Entire House',
  rating: 44,
  superhost: false
}]

function App() {
  return (
    <div className="App">
      <div className={style.airbnbList}></div>
      <PlaceList airbnbList={airbnbPlaces}/>
    </div>
  );
}

export default App;
