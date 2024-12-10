export default function Header(props) {
    return (
        <>
            <div className="header">
                <img src="./assets/img/rocketlogo.png" alt="logo" className="logo" />
                <h4 className="slogan">{props.slogan}</h4>
            </div>

        </>
    )
}