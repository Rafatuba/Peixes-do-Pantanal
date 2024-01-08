import "./Post.css";
import styles from './Post.module.css'
import { Link, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <Markdown>{post.texto}</Markdown>
      </div>

      <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

      <ul className={styles.postsRecomendados}>
        {postsRecomendados.map((post) => (
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
        ))}
      </ul>
    </PostModelo>
  );
}
