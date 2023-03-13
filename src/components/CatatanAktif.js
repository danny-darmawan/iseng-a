import React from 'react'
import Catatanaktifdata from './Catatanaktifdata'


function CatatanAktif({ archivedbuku, onDelete, onChangebook, newcari }) {
    if( archivedbuku.length > 0 ){
        let bukucari = [];
        if(newcari.length > 0){
            for(const listbuku of archivedbuku){
                if(listbuku.title.toLowerCase().includes(newcari.toLowerCase())){
                    bukucari.push(listbuku);
                }
            }
        }else{
            bukucari = archivedbuku;
        }
        return (
            <div className="Catatanaktif">
                <h1>Catatan Aktif</h1>
                <div className="Catatanaktif-place">
                    {
                        bukucari.map((buku) =>
                            <Catatanaktifdata key={buku.id}
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
            <div className="Catatanaktif">
                <h1>Catatan Aktif</h1>
                <div className="Catatanaktif-place">
                    <h2>Tidak ada catatan</h2>
                </div>
            </div>
        )
    }
}

export default CatatanAktif;