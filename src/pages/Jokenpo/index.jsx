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

  const choices = ['pedra', 'papel', 'tesoura'];

  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [resultado, setResultado] = useState('');
  const [placar, setPlacar] = useState({
    jogador: 0,
    computador: 0,
    empate: 0
  });

  const getEscolhaComputador = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const getResultado = (escolhaJogador, escolhaComputador) => {//função para o
    if (escolhaJogador === escolhaComputador) {
      setPlacar({
        ...placar,
        empate: placar.empate+1
      })
      return 'Empate!';
    }

    if (
      (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
      (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
      (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
      setPlacar({
        ...placar,
        jogador: placar.jogador+1
      })
      return 'Você ganhou!';
    } else {
      setPlacar({
        ...placar,
        computador: placar.computador+1
      })
      return 'Você perdeu!';
    }
  };

  useEffect(() => {
    if (escolhaJogador) {
      const escolha = getEscolhaComputador();
      setEscolhaComputador(escolha);
    }
  }, [escolhaJogador]);

  useEffect(() => {
    if (escolhaJogador && escolhaComputador) {
      setResultado(getResultado(escolhaJogador, escolhaComputador));
    }
  }, [escolhaComputador]);

  let [mostrarConteudo1, setMostrarConteudo1] = useState(false);
  let [mostrarConteudo2, setMostrarConteudo2] = useState(false);
  let [mostrarResultado, setMostrarResultado] = useState(false);

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

  const escolheOpcao = (escolha) => {
    setEscolhaJogador(escolha);
  };

  return (
    <>
      <section className={styles.gameSection}>
        <span className={`${styles.titulo} ${styles.white}`}>
          <span className={styles.red}>JOGAR</span> JOKENPÔ
        </span>
        <p className={styles.white}>SELECIONE:</p>
        <div className={styles.gameConsole}>
          <button onClick={umJogador} id="single">UM JOGADOR</button>
          <button onClick={doisJogadores} id="multi">DOIS JOGADORES</button>
        </div>
        <div className={styles.jokenpoDiv}>
          {mostrarConteudo1 && (
            <>
              <div className={`${styles.placar} ${styles.white}`}>
                PLACAR:
                <p><span className={styles.red}>VOCÊ: {placar.jogador}</span><span className={styles.white}> CPU: {placar.computador}</span> <span className={styles.white}> Empates: {placar.empate}</span></p>
              </div>
              {
                escolhaJogador == null ? (
                  <>
                    <span className={styles.white}>ESCOLHA:</span>
                    <div className={styles.buttonsDiv}>
                      <button className={styles.choiceBtn} onClick={() => escolheOpcao('pedra')}>
                        <img src={pedra} />
                      </button>
                      <button className={styles.choiceBtn} onClick={() => escolheOpcao('papel')}>
                        <img src={papel} />
                      </button>
                      <button className={styles.choiceBtn} onClick={() => escolheOpcao('tesoura')}>
                        <img src={tesoura} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.buttonsDiv}>
                      {
                        {
                          'pedra': <button className={styles.choiceBtn}><img src={pedra} /></button>,
                          'papel': <button className={styles.choiceBtn}><img src={papel} /></button>,
                          'tesoura': <button className={styles.choiceBtn}><img src={tesoura} /></button>
                        }[escolhaJogador]
                      }
                      {
                        {
                          'pedra': <button className={styles.choiceBtn}><img src={pedra} /></button>,
                          'papel': <button className={styles.choiceBtn}><img src={papel} /></button>,
                          'tesoura': <button className={styles.choiceBtn}><img src={tesoura} /></button>
                        }[escolhaComputador]
                      }
                    </div>
                    <div className={`${styles.resultado} ${styles.white}`}>{resultado}</div>
                    <button onClick={() => {setEscolhaJogador(null)}}>JOGAR NOVAMENTE</button>
                  </>
                )
              }
            </>
          )}
          {mostrarConteudo2 && <p>TEste2</p>}
        </div>
      </section>
    </>
  );
}

export default Jokenpo;
