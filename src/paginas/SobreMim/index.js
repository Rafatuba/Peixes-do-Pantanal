import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobre from 'assets/pescaria_pantanal.jpg'
import styles from './SobreMim.module.css'

export default function SobreMim() {
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre"

            >
            <h2 className={styles.subtitulo}>Olá, bem-vindo!</h2>

            <img src={fotoSobre} alt="Foto sobre" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>
            Somos apaixonados pela riqueza natural do Pantanal Sul-Matogrossense e dedicamos este espaço para compartilhar essa paixão com você. Nosso site é uma ode à diversidade de espécies de peixes que habitam as águas desse ecossistema exuberante. Buscamos oferecer uma experiência envolvente e informativa, destacando não apenas a beleza, mas também a importância da preservação deste ambiente único. Seja você um amante da natureza, pescador entusiasta ou simplesmente alguém em busca de conhecimento, convidamos você a explorar conosco as maravilhas do Pantanal através das histórias fascinantes e das imagens cativantes que compartilhamos. Junte-se a nós nesta jornada de descobertas e celebração da vida aquática do Pantanal.
            </p>
            <p className={styles.paragrafo}>
                Organização: Rafael Silva
            </p>
        
        </PostModelo>
    )
}