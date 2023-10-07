
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import Quize from './pages/Quize/Quize';
import Result from './pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  // https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple
  return (
    <BrowserRouter>

      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path='/' index element={<Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />} />

          <Route path='/quize' element={<Quize
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />} />

          <Route path='/result' element={<Result name={name} score={score}/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;





