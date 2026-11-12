import "./CustomizedButton.css";

function Customizedbutton(props) {
    const classes = ["Customizedbutton_root"];

    switch(props.type) {
        case "primary":
            classes.push("Customizedbutton_primary");
            break;
        case "secondary":
            classes.push("Customizedbutton_secondary")
            break;
        default:
            break;
    }

    return (
        <button className={classes.join(" ")} onClick={props.onClick}>
                <span>{props.children}</span>
        </button>
    );
}

export default Customizedbutton;