import React from 'react';
import './App.css';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact name="Louis" avatar="https://www.journaldugeek.com/content/uploads/2017/09/avatar-2-tournage-commence.jpg"
        online="true" />
      <Contact name="Clement" avatar="http://cdn1.momes.net/var/momes/storage/images/blog/detective-pikachu-la-bande-annonce-du-film-pokemon-en-live-action-enfin-devoilee/1267384-1-fre-FR/Detective-Pikachu-la-bande-annonce-du-film-Pokemon-en-live-action-enfin-devoilee.jpg"
        online="true" />
      <Contact name="Mickael" avatar="https://medias.3dvf.com/news/sitegrab/pikachuba2.jpg"
        online="false" />    </div>
  );
}

export default App;
