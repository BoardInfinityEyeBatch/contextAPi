import React, {useState} from 'react'
import PackageContext from './context'

const Provider =(props)=>{
    const [cricketer, setCricketer] = useState({
        name: "Sachin Tendulkar",
        highestScore: 200,
        retired: "Not Retired"
    })
    return(
        <PackageContext.Provider 
        
          value = {{
              data: cricketer,
            //   updateHighScore: () => {setCricketer({...cricketer, highestScore: 210});},
            //   updateRetirement: () => {setCricketer({...cricketer, retired: "He is retired"});}
          }}
        >
            {props.children}
        </PackageContext.Provider>

    )
}

export default Provider
