import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar() {

    const { currentExpoerience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round((currentExpoerience * 100) / experienceToNextLevel);

    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExpoerience} px</span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    )
}