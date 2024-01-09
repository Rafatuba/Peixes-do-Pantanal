import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import fotoPrincipal from "assets/douradopulando.png";
import Fade from "react-reveal/Fade";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Peixes do Pantanal</h1>
        <p className={styles.paragrafo}>
          Bem-vindo ao nosso site dedicado à biodiversidade aquática do Pantanal
          Sul-Matogrossense! Explore as espécies de peixes da região por meio de
          informações detalhadas e imagens fascinantes. Seja você um entusiasta
          da vida selvagem, pescador ou apenas curioso, nosso conteúdo
          proporcionará uma jornada virtual pelos ecossistemas aquáticos do
          Pantanal, promovendo a conscientização e apreciação por esse ambiente
          único. Descubra o Pantanal através dos olhos de suas espécies de
          peixes!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="circulo do fundo"
        />

        <Fade big>
          <img
            className={styles.fotoPrincipal}
            src={fotoPrincipal}
            alt="imagem do dourado pulando"
          />
        </Fade>
      </div>
    </div>
  );
}
