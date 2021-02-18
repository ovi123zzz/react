import {useState, useEffect} from 'react'

const Hooks = ({name}) => {
  const [item, setItem] = useState(name)
  const [number, setNumber] = useState(100)
  useEffect(() => {
    console.log('number changed')
   
  }, [number, item])

  const changePassword = () =>{
  }
  return(
    <div>
      <span>{item}</span>
      <span>{number}</span>
      <button onClick={() => setItem('altceva')}>click</button>
      <button onClick={() => setNumber(232322424) }>change nr</button>
    </div>
  )
}

export default Hooks