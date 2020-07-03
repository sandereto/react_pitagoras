import React from 'react'

export default props => {
    return (
        <React.Fragment>
            <label>{props.label}</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className={`fas fa-${props.icon}`} />
                    </span>
                </div>
                <input 
                    type={props.type}
                    className="form-control"
                    onChange={props.onChange}
                    value={props.value}
                    placeholder={props.placeholder}
                    required={props.required || false}
                    disabled={props.disabled || false}
                />
            </div>       
        </React.Fragment>
    )
}
