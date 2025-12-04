import React from 'react'

function CheckBox() {
    return (
        <div className="mb-6">
            <input
                type="checkbox"
                className="text-sm accent-primary"
                name="status"
                id="status"
            />
            <label htmlFor="status" className="text-sm text-gray-01 ml-2">
                Keep me signed in
            </label>
        </div>
    )
}

export default CheckBox