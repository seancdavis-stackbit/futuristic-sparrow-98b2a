import React from 'react'

const AlertSection = ({ body }) => {
    return (
        <div className="py-6 bg-primary">
            <div className="container mx-auto">
                <p className="text-center text-xl text-white">{body}</p>
            </div>
        </div>
    )
}

export default AlertSection