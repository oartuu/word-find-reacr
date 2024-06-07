

const GameScrean = ({VerifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>pontuação: 000</span>
      </p>
      <h3 className="tip">
        dica sobre a palavra <span>dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blanksquare"></span>
      </div>
      <div className="letterContainer">
        <p>tente adivinhar uma letra da palavra:</p>
        <form action="">
          <input type="text" name="letter" maxLength={1} required />
          <button>jogar!</button>
        </form>
      </div>
      <div className="worngLettersContainer">
        <p>letras já utilizadas</p>
        <span>a,</span>
        <span>a,</span>
      </div>
    </div>
  )
}


export default GameScrean