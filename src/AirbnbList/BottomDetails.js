
const BottomDetails = ({rating, title, superhost}) => {

  return (
    <div>
      <h2>{title}</h2>
      <div>
        ****{rating}
        {
         superhost ? <span>Superhost</span> : ''
        }
      </div>
    </div>
  )
}

export default BottomDetails