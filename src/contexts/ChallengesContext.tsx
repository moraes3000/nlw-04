import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExpoerience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
}

interface ChallengesProviderProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExpoerience, setCurrentExpoerience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)


    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        // console.log('new challenge')
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }


    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExpoerience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,

            }}>
            {children}
        </ChallengesContext.Provider>
    )
}