import React from 'react'

function Catatanaktifdata({id,title, body, createdAt, onDelete, onChangebook }) {
    if(title.length > 15 ){
        title = title.substring(0, title.length - (title.length - 15)) + '...';
    }
    return (
        <div className='Catatanaktif-box' id={id}>
            <h2>{title}</h2>
            <h3>{createdAt}</h3>
            <p>{body}</p>
            <button type="submit" onClick={() => onDelete(id)}>Delete</button>
            <button type="submit" onClick={() => onChangebook(id)}>Arsipkan</button>
        </div>
    )
}

export default Catatanaktifdata;