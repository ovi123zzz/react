import {useState, useEffect} from 'react'

const Hooks = ({name}) => {
  const [item, setItem] = useState(name)
  const [number, setNumber] = useState(100)
  const [hits, setHits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    console.log('number changed')
   
  }, [number, item])
// https://hn.algolia.com/api/v1/search?query=redux

  useEffect(() => {
      const serverCall = async () => {
        try {
          const response = await fetch('https://hn.algolia.com/api/v1/search?query=redux')
          const data = await response.json()
          setHits(data.hits)
          setIsLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
      serverCall()
  }, [])

  return(
    <div>
      {/* <span>{item}</span>
      <span>{number}</span>
      <button onClick={() => setItem('altceva')}>click</button>
      <button onClick={() => setNumber(232322424) }>change nr</button> */}
      {isLoading ? <div>server response waiting</div> : hits.map(el => (
        <div>{el.title}</div>
      ))
      
      }
  
    </div>
  )
}

export default Hooks