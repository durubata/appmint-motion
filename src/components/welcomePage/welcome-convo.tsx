import React from 'react'
import { ScWelcomeConvo, ScwelcomeNewChat, ScSvg } from './styles/style'
import { useViewStore } from '../../views-store'
import { WelcomesearchHelp } from '.'
import { IconSends } from 'components/icons'

const WelcomeConvo = () => {
    const { setStateItem } = useViewStore(state => state)
    return (
        <ScWelcomeConvo>

            <div className='previous-chat'>
                <span>Conversations</span>
                <ScwelcomeNewChat onClick={() => { setStateItem('Chat') }}>
                    <span>Image</span>
                    <div>
                        <span>Name of Bot</span>
                        <span>Preview of previous chat...</span>
                    </div>

                    <ScSvg />
                </ScwelcomeNewChat>
                <ScwelcomeNewChat extended>
                    <span>Image</span>
                    <div>
                        <span>Name of User</span>
                        <span>Preview of Welcome Message...</span>
                    </div>
                </ScwelcomeNewChat>


            </div>
            <WelcomesearchHelp />
            <div className='new-conversation'>
                <div>
                    <div>
                        <IconSends />
                        <span>New Conversation</span>
                    </div>

                </div>

            </div>
        </ScWelcomeConvo>

    )
}

export default WelcomeConvo