import './Profiles.css'
function Profiles({ profiles }) {
    return <div className='ProfileCard'>
        <img src='./logo192.png' />
        <h3>{profiles.fullName}</h3>
        <h5>{profiles.descp}</h5>
        <h6>{profiles.birthday}</h6>

    </div>
}
export default Profiles;