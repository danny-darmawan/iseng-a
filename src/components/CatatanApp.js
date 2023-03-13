import React from "react";
import BuatCatatan from "./BuatCatatan";
import CatatanAktif from "./CatatanAktif";
import CatatanArsip from "./CatatanArsip";
import Navbar from "./Navbar";

import { getBuku } from '../utils/getbuku';
import { day } from "../utils/getCreateAt";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buku: getBuku(),
            newbook: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddbukuHandler = this.onAddbukuHandler.bind(this);
        this.archivedbuku = this.archivedbuku.bind(this);
        this.unarchivedbuku = this.unarchivedbuku.bind(this);
        this.onArchiveOnchangeHandler = this.onArchiveOnchangeHandler.bind(this);
        this.onSearchhandler = this.onSearchhandler.bind(this);
    }

    onSearchhandler(cari){
        this.setState({newbook : cari})
    }

    onArchiveOnchangeHandler(id){
        let buku = [];
        for(const listbuku of this.state.buku){
            if(listbuku.id === id){
                buku.push({
                    'id': listbuku.id,
                    "title": listbuku.title,
                    "body": listbuku.body,
                    "archived": !(listbuku.archived),
                    "createdAt": listbuku.createdAt
                })
            }else{
                buku.push({
                    'id': listbuku.id,
                    "title": listbuku.title,
                    "body": listbuku.body,
                    "archived": listbuku.archived,
                    "createdAt": listbuku.createdAt
                })
            }
        }
        this.setState({ buku });

    }

    archivedbuku(){
        const buku = this.state.buku.filter(buku => buku.archived === true);
        return buku;
    }

    unarchivedbuku(){
        const buku = this.state.buku.filter(buku => buku.archived === false);
        return buku;
    }

    onDeleteHandler(id){
        const buku = this.state.buku.filter(buku => buku.id !== id);
        this.setState({ buku });
    }

    onAddbukuHandler({title, body}){
        this.setState((prevState) => {
            return {
                buku : [
                ...prevState.buku,
                {
                    id: +new Date(),
                    title,
                    body,
                    archived: true,
                    createdAt: day
                }
                ]
            }
        })
    }

    render(){
        return (
            <div className="App">
                <Navbar caribuku={this.onSearchhandler}/>
                <div className="BuatCatatan-item">
                <div className="Buatcatatan">
                <BuatCatatan addBuku={this.onAddbukuHandler}/>
                </div>
                </div>
                <div className="catatan">
                <CatatanAktif newcari={this.state.newbook} archivedbuku={this.archivedbuku()} onDelete={this.onDeleteHandler} onChangebook={this.onArchiveOnchangeHandler}/>
                <CatatanArsip newcari={this.state.newbook} unarchivedbuku={this.unarchivedbuku()} onDelete={this.onDeleteHandler} onChangebook={this.onArchiveOnchangeHandler}/>
                </div>
            </div>
        );
    }
};

export default App;