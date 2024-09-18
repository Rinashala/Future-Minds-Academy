import './Nav.css'

function Nav() {
    let arraz = ["Home"]
    return (

        <><div className="nav">
            <ul>
                <li>{arraz[0]}</li>
                <li>service</li>
                <li>blog</li>
                <li>contact us</li>

            </ul>
        </div>
        </>
    )
}

export default Nav;