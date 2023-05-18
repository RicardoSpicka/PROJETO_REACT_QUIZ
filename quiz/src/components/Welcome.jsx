import Quiz from "../img/quiz.svg"

import "./Welcome.css"

const welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão baixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Imagem de inicio do Quiz"></img>
    </div>
  )
}

export default welcome
