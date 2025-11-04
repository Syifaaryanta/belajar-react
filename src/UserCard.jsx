import React, { useState } from "react";

function UserCard(props) {
    const { id, userId, title, body } = props;
    const [clicked, setClicked] = useState(false);

    // Fungsi handler untuk klik tombol
    function handleClick() {
        setClicked(true);
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-80 flex flex-col transition-all duration-300 hover:scale-105 hover:border-black hover:bg-pink-50 hover:shadow-lg">
            <div className="mb-3 flex-1 text-center">
                <h3 className="text-base font-semibold text-gray-800 mb-3 capitalize leading-tight">
                    {title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {body}
                </p>
            </div>

            <div className="mt-auto">
                <button
                    onClick={handleClick}
                    className={`w-full py-2 px-4 rounded text-white text-sm font-medium transition-all duration-200 hover:brightness-125 hover:shadow-md ${
                        clicked 
                            ? "bg-red-500 hover:bg-red-400" 
                            : "bg-gray-500 hover:bg-gray-400"
                    }`}
                >
                    {clicked ? "Selected Card" : "Select Card"}
                </button>
            </div>
        </div>
    );
}

export default UserCard;

