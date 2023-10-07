import React, { useState } from 'react'
import "./Home.css"
import { Button, MenuItem, TextField } from '@mui/material'
import Categories from '../../Data/Categories'
import ErrorMessage from '../../components/errormessage/ErrorMessage'
import { useNavigate } from "react-router-dom";

function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false)
      fetchQuestions(category, difficulty);
      navigate("/quize")
    }
  }
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>Quiz Setting</span>

        <div className='settings__select'>
          {error && <ErrorMessage>Please Fill all the field</ErrorMessage>}
          <TextField
            style={{ marginBottom: 30 }}
            label="Enter Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}

          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}

          </TextField>

          <TextField
            select
            label="Select Difficulty"

            variant="outlined"
            style={{ marginBottom: 30 }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Start Quiz
        </Button>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  )
}

export default Home
