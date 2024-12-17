import claudePNG from '../assets/chef-claude-icon.png'

export default function Header() {
    return (
        <>
            <header>
                <img className='claudeImg' src={claudePNG} alt='claude-png' />
                <h2 className='h2Claude' >Chef Claude</h2>
            </header>
        </>
    )
}