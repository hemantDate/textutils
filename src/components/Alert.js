import React from 'react'

export default function Alert(props) {
    const caps=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }

    return (
        props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {caps(props.alert.type)} :</strong> {props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
