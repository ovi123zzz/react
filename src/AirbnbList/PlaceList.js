import React from 'react'
import TopDetails from './TopDetails'
import BottomDetails from './BottomDetails';
import style from './PlaceList.module.scss'
import icon from '../images/iconInstagram.svg'
class PlaceList extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <>
        {
          this.props.airbnbList.map((place, index) => (
          <div className={style.airbnbList} key={index}>
           
             <img width="200px" height="100px" src={place.img} alt='ceva'/>
            <TopDetails bookingStyle={place.bookingStyle} city={place.city} />
            <BottomDetails title={place.title} rating={place.rating} superhost={place.superhost}/>
          </div>
          ))
        }
      </>
    )
  }
}

export default PlaceList