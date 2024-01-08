import { Link } from 'react-router-dom'
import styles from './Posts.module.css'
import posts from 'json/posts.json'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

export default function PostCard() {
    return(
        <ul className={styles.posts}>
            {
                posts.map((post) => 
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>

                        <div className={styles.post}>
                            <img 
                                className={styles.capa}
                                src={`/assets/posts/${post.id}/capa.png`}
                                alt='Imagem de capa do post'
                            />

                            <h2 className={styles.titulo}>{post.titulo}</h2>

                            <BotaoPrincipal>Ler</BotaoPrincipal>
                        </div>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}