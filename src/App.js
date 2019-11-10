import React from 'react';
/* import CardList from './components/card-list/card-list'; */
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const HomePage = () => {
  return (
    <div>
      <h1>HOME Page</h1>
    </div>
  );
};

const TopicList = () => {
  return (
    <div>
      <h1>TopicList PAGE </h1>
    </div>
  );
};

const TopicDetail = () => {
  return (
    <div>
      <h1>TopicDetail PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </BrowserRouter>
    </div>
  )
}

export default App;