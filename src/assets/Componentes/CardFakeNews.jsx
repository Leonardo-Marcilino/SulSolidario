import styles from './CardOng.module.css'

function CardOng({ titulo, endereco, descricao, img, linkNoticiaReal, instagram }) {
    return (
        <div className={styles.card_ong} id={styles.fake_response}>
            <div className={styles.container_card}>



                <div className={styles.ong_info} id={styles.info}>
                    <div className={styles.titulo_local}>
                        <h3 className={styles.titulo_ong}>{titulo}</h3>
                        <p className={styles.endereco_ong}>{endereco}</p>
                        <div className={styles.desc_ong}>
                        {descricao}
                    </div>
                    </div>

                    <a href={linkNoticiaReal} target='_blank' >
                        <button className={styles.btn_doar} id={styles.fake_btn}>Noticia Real</button>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default CardOng;