import './App.css';

import './css/flex.css'


const TitlePicture = () => {

  return (<div>
    <img className="title-pic-img" src="https://avatars2.githubusercontent.com/u/25117330?v=4" alt="text" />
  </div>)
}

const LinkBox = ({
  text
}) => {

  text = text || "Link Text"

  return (<div className="link-container flex-p-hor flex-p-center-absolute">
    <a className="link-item" href="http://www.google.com" target="_blank" rel="noopener noreferrer">{text}</a>

  </div>)
}

function App() {
  return (
    <div className="App flex-p-ver flex-p-center-absolute">
      <div className="main-conatainer flex-p-ver flex-p-align-center">
        <div className="flex-p-hor flex-p-center-absolute">
          <TitlePicture />
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