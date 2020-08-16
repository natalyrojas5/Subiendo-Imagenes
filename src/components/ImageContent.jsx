import React from 'react'

export const ImageContent = ({clas, file}) => {
    return (
        <div className="pt-8">
            <img src={file}
                    className={clas} alt="" />
        </div>
    )
}
