import React from 'react'

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.cariEvenHandler = this.cariEvenHandler.bind(this);
    }

    cariEvenHandler(event){
        this.props.caribuku(event.target.value);
    }

    render(){
        return (
            <div className="Navbar">
                <div className="Navbar-item">
                    <h1>My</h1>
                    <h2> Notes</h2>
                    <input placeholder="Cari Catatan..." type="text" onChange={this.cariEvenHandler}/>
                </div>
            </div>
        )
    }
}

export default Navbar;