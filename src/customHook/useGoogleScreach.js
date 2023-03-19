import {useState, useEffect} from 'react'
import API_KEY from '../keys'

// get this key from https://programmablesearchengine.google.com/controlpanel/create
const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY

const useGoogleScreach = (term) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
        console.log('term -->', term);
        await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then(res => res.json())
        .then(result => {
            setData(result)
        })
    }
    fetchData()
  }, [term])

  return {data}
}

export default useGoogleScreach