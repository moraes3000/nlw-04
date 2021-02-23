import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src='https://img.elo7.com.br/product/main/2F2B0AC/arquivo-topo-de-bolo-homer-simpson-chop-em-camadas-arquivo.jpg' alt='' />
            <div>
                <strong>Bruno Barbeiro Moraes</strong>
                <p>
                    <img src='icons/level.svg' alt='level' />
                    Level 1
                </p>
            </div>
        </div>
    )
}