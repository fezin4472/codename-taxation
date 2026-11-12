import './CustomField.css'

function CustomField(props) {
    return (
        <div className='CustomField-root'>
            <span>{props.label}</span>
            <input {...props} className='CustomField-input' />
        </div>
    )
}

export default CustomField;