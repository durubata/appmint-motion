import React from 'react'
import { ScWelcomeConvo, ScWelcomeeButton, ScwelcomeNewChat } from './styles/style'
import { useViewStore } from '../../views-store'

const WelcomeConvo = () => {
    const { setStateItem } = useViewStore(state => state)
    return (
        <ScWelcomeConvo>
            <span>Conversations</span>
            <ScwelcomeNewChat>
                <span>Logo</span>
                <span>Support system</span>
                <span>
                    To New Chat
                </span>
            </ScwelcomeNewChat>
            <ScWelcomeeButton onClick={() => { setStateItem('Chat') }}>
                To Previous Chat
            </ScWelcomeeButton>
        </ScWelcomeConvo>
    )
}

export default WelcomeConvo