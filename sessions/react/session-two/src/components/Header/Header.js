import "./Header.css";

function Header({ title, descp }) {
    return <>
        <div class="hero">
            <h2>{title}</h2>
            <p>{descp}</p>
        </div>
    </>
}
export default Header;