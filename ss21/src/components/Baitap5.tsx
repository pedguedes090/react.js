import React from 'react'

function Baitap5() {
    return (
        <div className='bg-blue-50 rounded-lg p-4 w-[350px]'>
            <div className="bg-blue-100 rounded-lg p-4 w-[300px]">
                <div className="relative min-h-[120px]">
                    <p className="text-blue-800 font-semibold">Relative parent</p>
                    <div className="absolute left-4 bottom-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow">
                        Absolute child
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baitap5
