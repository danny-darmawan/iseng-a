import React from 'react';

class BuatCatatan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        if(event.target.value.length <= 50){
            this.setState(() => {
                this.setState(() => {
                    return {
                        title: event.target.value,
                    }
                })
            })
        }
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            this.setState(() => {
                return {
                    body: event.target.value,
                }
            })
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addBuku(this.state);
    }

    render(){
        return (
            <form onSubmit={this.onSubmitEventHandler}>
            <h1>Buat Catatan</h1>
            <h2>Sisa karakter: <span>{50 - this.state.title.length}</span></h2>
            <input id="judul" type="text" placeholder="Masukan judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
            <textarea type="text" placeholder="Tulis catatan..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required/>
            <button type="submit" >Buat</button>
            </form>
        )
    }
}

export default BuatCatatan;