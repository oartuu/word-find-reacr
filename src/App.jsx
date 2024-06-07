//css
import './App.css'
//react
import { useCallback, useEffect, useState } from 'react'
//data
import { wordsList } from './data/words'
//components
import StartScrean from './components/StartScrean'
import GameOver from './components/GameOver'
import GameScrean from './components/GameScrean'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 2, name: 'over'}

]
function App() {
  const [GameStage, Setgamestage] = useState(stages[0].name)
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("")
  const [letters, setletters] = useState("")
  const [words] = useState(wordsList)

  //pick category and word
  const pickCategoryAndWord = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random()* Object.keys(categories).length)]
    console.log(category)

    const word = words[category][Math.floor(Math.random()* words[category].length)]
    console.log(word)
    return {word, category}
  }


  //start game
  const SetGame = ()=>{

    const {word, category } = pickCategoryAndWord()
    console.log(word, category)

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters)

    setWord(word)
    setCategory(category)
    setletters(wordLetters)


    Setgamestage(stages[1].name)
  }
  
  //verify letter
  const VerifyLetter = ()=>{
    Setgamestage(stages[2].name)
  }
  //restart game
  const retry = ()=>{
    Setgamestage(stages[0].name)
  }
  return (
    <div className='App'>
      {GameStage === 'start' && <StartScrean SetGame={SetGame}/>}
      {GameStage === 'game' && <GameScrean VerifyLetter={VerifyLetter}/> }
      {GameStage === 'over' && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
