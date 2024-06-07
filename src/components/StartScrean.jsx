
import './StartScrean.css'
const StartScrean = ({SetGame}) => {
  return (
    <div className="start">
         <h1>Secret Word</h1>
         <p>clique no botão para começar a jogar</p>
         <button onClick={SetGame}>começar o jogo</button>
    
    </div>
  )
}

export default StartScrean