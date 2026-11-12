import './Avatar.css'

function Avatar(props) {
    const names = props.name.split(" ");

    const Firstname = names[0];
    const FirstletterFirstname = Firstname[0];

    let FirstletterLastname = "";
    if (names.length > 1) {
        const Lastname = names.at(-1);
        FirstletterLastname = Lastname[0];
    }

    return (
        <div className='Avatar-root'>
            {FirstletterFirstname + FirstletterLastname}
        </div>
    );
}

export default Avatar;