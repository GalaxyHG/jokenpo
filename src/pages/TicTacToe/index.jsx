import styles from './TicTacToe.module.css'
import { useState } from 'react';

function TicTacToe() {
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
                <div className={styles.ticDiv}>
                    {mostrarConteudo1 && (
                        <>
                            <div className={`${styles.placar} ${styles.white}`}>
                                PLACAR:
                                {/* <p><span className={styles.red}>VOCÊ: {placar.jogador}</span><span className={styles.white}> CPU: {placar.computador}</span> <span className={styles.white}> Empates: {placar.empate}</span></p> */}
                            </div>
                        </>
                    )}
                    {mostrarConteudo2 && <p>TEste2</p>}
                </div>
            </section>
        </>
    )
}

export default TicTacToe