import React from 'react'
import Catatanarsipdata from './Catatanarsipdata';

function CatatanArsip({unarchivedbuku, onDelete, onChangebook, newcari }) {
    if(unarchivedbuku.length > 0){
        let bukucari = [];
        if(newcari.length > 0){
            for(const listbuku of unarchivedbuku){
                if(listbuku.title.toLowerCase().includes(newcari.toLowerCase())){
                    bukucari.push(listbuku);
                }
            }
        }else{
            bukucari = unarchivedbuku;
        }

        return (
            <div className="Catatanarsip">
                <h1>Catatan Arsip</h1>
                <div className="Catatanarsip-place">
                        {
                            bukucari.map((buku) =>
                                <Catatanarsipdata key={buku.id}
                                onDelete={onDelete}
                                onChangebook={onChangebook}
                                {...buku} />
                            )
                        }
                </div>
            </div>
        )
    }else{
        return (
            <div className="Catatanarsip">
                <h1>Catatan Arsip</h1>
                <div className="Catatanarsip-place">
                    <h2>Tidak ada catatan</h2>
                </div>
            </div>
        )
    }
}

export default CatatanArsip;