import './Card.css'

// every component is a function
function Card({ user }) {
    // js
    return <div className='Card'>
        <img src='./logo192.png' className='Card-Img' />
        <div className='CardDetails'>
            <h3 className='Card-Header'>{user.fullName}</h3>
            <h4 className='Card-SubHeader'>{user.occupation}</h4>
        </div>
    </div>
}
export default Card;