import styles from "./Jokenpo.module.css";
import React, { useState, useEffect } from "react";
import pedra from "../../assets/pedra.png";
import papel from "../../assets/papel.png";
import tesoura from "../../assets/tesoura.png";

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
                    <button className={styles.denovo} onClick={() => {setEscolhaJogador(null)}}>JOGAR NOVAMENTE</button>
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
