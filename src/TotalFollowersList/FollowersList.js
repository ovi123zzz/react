
import style from './Followers.module.scss'
import SocialTag from './SocialTag'
import FollowersNumber from './FollowersNumber'
const FollowersList = ({data}) => {
  console.log(data)
  return (
   
    <div className={style.followersWrapper}>
      {
      data.map((el) => (
        <div key={el.id} className={style.followers}>
          <SocialTag socialTag={el.socialTag}/>
          <FollowersNumber followersNumber={el.followersNumber}/>
          <div>
            <span>Today: {el.todayFollowers}</span>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default FollowersList