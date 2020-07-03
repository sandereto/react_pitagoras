import React from 'react'

export default props => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="card-body">
                {props.children}
            </div>
        </form>
    )
}
