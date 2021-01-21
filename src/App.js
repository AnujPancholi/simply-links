import './App.css';

import './css/flex.css'

import LinkBox from './components/LinkBox/LinkBox.js';

const TitlePicture = () => {

  return (<div>
    <img className="title-pic-img" src="https://avatars2.githubusercontent.com/u/25117330?v=4" alt="text" />
  </div>)
}


function App() {
  return (
    <div className="App flex-p-ver flex-p-center-absolute">
      <div className="main-conatainer flex-p-ver flex-p-align-center">
        <div className="flex-p-ver flex-p-center-absolute">
          <TitlePicture />
          <div className="name-text">Anuj Pancholi</div>
       </div>
        <div>
          <LinkBox />
          <LinkBox text="Link sdlfjksldifjsoifnsoijfsoidnfoejnf sldkjfsl"/>
        </div>
      </div>
    </div>
  );
}

export default App;