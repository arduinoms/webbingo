import { useState } from 'react'
import './App.css'
import { version } from '../package.json'

const Bingobutton = ({index, content}) => {
  const [marked, setmarked] = useState(false)

  return (
    <div className="Bingobutton">
      <button
        className={marked ? 'liked' : ''}
        onClick={() => setmarked(!marked)}
      > 
        {index}
        {content}
      </button>
    </div>
  )
} 

const Bingocontainer = () => {
  return (
    <div className="Bingocontainer">
      <Bingobutton content={"Test"}/>  
      <Bingobutton content={"Test2"}/>  
      <Bingobutton content={"Test3"}/>  
      <Bingobutton content={"Test4"}/>  
      <Bingobutton content={"Test5"}/>  
      <Bingobutton content={"Test6"}/>  
      <Bingobutton content={"Test7"}/>
      <Bingobutton content={"Test7"}/>
      <Bingobutton content={"Test7"}/>
      <Bingobutton content={"Test7"}/>  
    </div>
    
  )
}

const Settingsbutton = ({title}) => {
  return (
    <div className="Settingsbutton">
      <button>
        {title}
      </button>
    </div>
  )
}

const Settingsnumber = ({number}) => {
  return (
    <div className="Settingsnumber">
      <input type="number" value={number} min={3} max={6}/>
    </div>
  )
}

const Settingscontainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="Settingscontainer">
      <button 
        className="settings-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▼' : '▶'} Settings
      </button>
      
      {isOpen && (
        <div className="settings-content">
          <Settingsbutton title={"Reset Board"}/>  
          <Settingsbutton title={"Generate New Board"}/> 
          <Settingsnumber number={3}/>
        </div>
      )}
    </div>
  )
}

const Header = () => {
  return (
    <div className="Header">
      <h1>webbingo</h1>
    </div>
  )
}

const Gamecontainer = () => {
  return (
    <div className="Gamecontainer">
      <Bingocontainer />
      <Settingscontainer />
    </div>
  )
}

const Footer = () => {
  const GITHUB_REPO = 'https://github.com/arduinoms/webbingo'
  
  return (
    <div className="Footer">
      <div className="footer-content">
        <p>
          <strong>webbingo - </strong> 
          <a href={GITHUB_REPO} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#70b5ff',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            v{version}
          </a>
        </p>
        <p>
          Made with ❤️ by @arduinomaster
        </p>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Gamecontainer />
      <Footer />
    </div>
  )
}

export default App