import { useState } from 'react'
import ClickOn from './assets/Onclick/Onclick'
import ClickOn2 from './assets/Onclick/Onclick2'
import ClickOn3 from './assets/Onclick/Onclick3'
import ClickOn4 from './assets/Onclick/Onclick4'
import ClickOn5 from './assets/Onclick/Onclick5'
import ClickOn6 from './assets/Onclick/Onclick6'
import Football from './assets/Onclick/Onclick7'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ClickOn/> */}
    {/* <ClickOn2/> */}
      {/* <ClickOn3/> */}
       <ClickOn4/>
       {/* <ClickOn5/> */}
       {/* <ClickOn6/> */}
        {/* <Football/>        */}
    </>
  )
}

export default App
