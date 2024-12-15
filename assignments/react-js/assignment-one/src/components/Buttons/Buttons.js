import "./Buttons.css"
function Buttons({ addBtn, removeBtn }) {
    return <><button className="button">{addBtn}</button>
        <button className="button">{removeBtn}</button></>
}
export default Buttons;