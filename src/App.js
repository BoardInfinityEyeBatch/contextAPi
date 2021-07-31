import React from 'react'
import PackageContext from './context'
import Provider from './Provider'



const Cry= () => {
  return(
    <div>
      <Laugh />
    </div>
  )
}


const Laugh = () => {
  return(
    <div>   
      <Smile />
    </div>
  )
}

const Smile = (props) => { 
  return(
    <PackageContext.Consumer>
      {(context) => (
        <div> 
            <h1> Access values from Provider</h1>
            <p>Name of cricketer is: {context.data.name}</p>
            <p>His Highest Score: {context.data.highestScore}</p>
            <p>Lets update High score</p>
            <button onClick={context.updateHighScore}> Upadte High Score</button>
            <p>About his retirement: {context.data.retired}</p>
            <p>Lets update retirement</p>
            <button onClick={context.updateRetirement}> Click to Update </button>
        </div>
      )
}
    </PackageContext.Consumer>
  )
}


const App = () => {
  return(
    <Provider>
      <Cry />
    </Provider>
    
    
  )
}


export default App