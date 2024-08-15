import styles from "./Jokenpo.module.css";
import React, { useState, useEffect } from "react";
import pedra from "../../assets/pedra.png";
import papel from "../../assets/papel.png";
import tesoura from "../../assets/tesoura.png";

// const choices = ['pedra', 'papel', 'tesoura']; //array com as escolhas possíveis

// const getRandomChoice = () => { //função para gerar a escolha aleatória da CPU
//     const randomIndex = Math.floor(Math.random() * choices.length); //gerando valor aleatório dentro do intervalo definido (tamanho do vetor)
//     return choices[randomIndex];//retorna a opção escolhida a partir do número gerado
// };

// const getResult = (playerChoice, computerChoice) => {//função para o
//     if (playerChoice === computerChoice) {
//         return 'Empate!';
//     }

//     if (
//         (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
//         (playerChoice === 'papel' && computerChoice === 'pedra') ||
//         (playerChoice === 'tesoura' && computerChoice === 'papel')
//     ) {
//         return 'Você ganhou!';
//     } else {
//         return 'Você perdeu!';
//     }
// };

// const Jokenpo = () => {
//     const [playerChoice, setPlayerChoice] = useState(null);
//     const [computerChoice, setComputerChoice] = useState(null);
//     const [result, setResult] = useState('');

//     useEffect(() => { //Atualiza a escolha do computador
//         if (playerChoice) {
//             const choice = getRandomChoice();
//             setComputerChoice(choice);
//         }
//     }, [playerChoice]);

//     useEffect(() => {
//         if (playerChoice && computerChoice) {
//             setResult(getResult(playerChoice, computerChoice));
//         }
//     }, [computerChoice]);

//     const handleChoice = (choice) => {
//         setPlayerChoice(choice);
//     };

//     return (
//         <div className="App">
//             <h1>Pedra, Papel e Tesoura</h1>
//             <div className="buttons">
//                 <button onClick={() => handleChoice('pedra')}>Pedra</button>
//                 <button onClick={() => handleChoice('papel')}>Papel</button>
//                 <button onClick={() => handleChoice('tesoura')}>Tesoura</button>
//             </div>
//             {playerChoice && (
//                 <div>
//                     <p>Sua escolha: {playerChoice}</p>
//                     <p>Escolha do computador: {computerChoice}</p>
//                     <h2>Resultado: {result}</h2>
//                 </div>
//             )}
//         </div>
//     );
// };

function Jokenpo() {
  let [mostrarConteudo1, setMostrarConteudo1] = useState(false);
  let [mostrarConteudo2, setMostrarConteudo2] = useState(false);

  const umJogador = () => {
    if (mostrarConteudo2 == true) {
      setMostrarConteudo2(false);
      setMostrarConteudo1(true);
    } else {
      setMostrarConteudo1(true);
    }
  };

  const doisJogadores = () => {
    if (mostrarConteudo1 == true) {
      setMostrarConteudo1(false);
      setMostrarConteudo2(true);
    } else {
      setMostrarConteudo2(true);
    }
  };

  return (
    <>
      <section className={styles.gameSection}>
        <span className={`${styles.titulo} ${styles.white}`}>
          <span className={styles.red}>JOGAR</span> JOKENPÔ
        </span>
        <p>SELECIONE:</p>
        <div className={styles.gameConsole}>
          <button onClick={umJogador}>UM JOGADOR</button>
          <button onClick={doisJogadores}>DOIS JOGADORES</button>
        </div>
        <div className={styles.jokenpoDiv}>
          {mostrarConteudo1 && (
            <>
              <div className={styles.buttonsDiv}>
                <button className={styles.choiceBtn}>
                  <img src={pedra} />
                </button>
                <button className={styles.choiceBtn}>
                  <img src={papel} />
                </button>
                <button className={styles.choiceBtn}>
                  <img src={tesoura} />
                </button>
              </div>
            </>
          )}
          {mostrarConteudo2 && <p>TEste2</p>}
        </div>
      </section>
    </>
  );
}

export default Jokenpo;
