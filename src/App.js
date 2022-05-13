import GiphyDisplay from './components/GiphyDisplay';
import Form from './components/Form';
import { useState} from 'react';
import "./App.sass";

function App() {
  const API_KEY = "wJvPRctp0EHfY9eJUjGHvT3JNjwp8fY0"
  const [giphy, setGiphy] = useState(null)

  const getRandomGiphy = async (randomGiphy) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&${randomGiphy}`)
    const data = await response.json()
    setGiphy(data)
  }

  return (
    <div className="App">
      <Form getRandomGiphy={getRandomGiphy}/>
      <GiphyDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
