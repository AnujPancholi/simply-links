import React, { useState, useEffect } from 'react';

import './App.css';

import './css/flex.css';

import LinkBox from './components/LinkBox/LinkBox.js';
import LoadingSpinner from './components/LoadingSpiner/LoadingSpinner.js';

import { getUserData } from './services/userData.js';

function App() {
  const [userData, setUserData] = useState({
    isLoading: true,
    basic_info: {},
    links: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const userDataResult = await getUserData();
        setUserData({
          isLoading: false,
          ...userDataResult,
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="App flex-p-ver flex-p-center-absolute">
      <div className="main-conatainer flex-p-ver flex-p-align-center">
        <div className="card-container flex-p-ver flex-p-align-center">
          {userData.isLoading ? (
            <div className="greedy-container flex-p-ver flex-p-center-absolute">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <div className="flex-p-ver flex-p-center-absolute">
                <div>
                  <img
                    className="title-pic-img"
                    src={userData.basic_info.pic_url}
                    alt="user pic"
                  />
                </div>
                <div className="name-text"><h1>{userData.basic_info.name}</h1></div>
              </div>
              <div>
                {userData.links.map((linkObj) => {
                  return (
                    <LinkBox
                      key={linkObj.text}
                      text={linkObj.text}
                      url={linkObj.url}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">© Copyright 2021. Anuj Pancholi</div>
      </footer>
    </div>
  );
}

export default App;
