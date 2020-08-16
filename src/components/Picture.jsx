import React from 'react'
import { Title } from './Title';
import { ImageContent } from './ImageContent';
import { withFileUpload } from '../HOC/withFileUpload'

const Picture = ({addFile, files, title, clase}) => {

    return (
        <div className="p-10 shadow-md">
            <Title text={title}/>
                <input type="file" 
                    className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    onChange={addFile} />

                {files.map((image, index) =>( 
                    <div className="pt-4" key={index}>
                        <ImageContent clas={clase} file={image} />
                    </div>
                ))}
        </div>
    )
}

export default withFileUpload(Picture);