import React from 'react'

export default props => {
    return (
        <React.Fragment>
            <label>{props.label}</label>
            <select 
                className="form-control"
                onChange={props.onChange}
                name={props.name}
                style={{width: '100%'}}
                value={props.value}
                required={props.required || false}
                disabled={props.disabled || false}
            
            >
                {props.children}
            </select>
        </React.Fragment>
    )
}
