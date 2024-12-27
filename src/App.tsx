import {FullFileBrowser} from 'chonky';
import './App.css'
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
setChonkyDefaults({ iconComponent: ChonkyIconFA });
import iJewelLogo from './assets/iJewel.png'

function App() {

  return (
      <div className="container">
          <header className="header">
              <img src={iJewelLogo} alt="iJewelLogo"/>
          </header>
          <main className="main">
              <nav className="nav"/>
              <div className="content">
                  <FullFileBrowser files={[]}/>
              </div>
          </main>
      </div>
  )
}

export default App
