import React, { Component } from 'react';
import Items from './items';
import axios from 'axios';

class View extends Component{
//constructor
    constructor(){
        //invoke parent constructor
        super();
        //bind
        this.ReloadData = this.ReloadData.bind(this);
    }

    //Refresh on change
    ReloadData(){
        axios.get('http://localhost:4000/api/items') //Async req
        // Callback function
        .then((response)=>{
            // update state, callback function ^
            this.setState({
                myItems: response.data
            })
        })
        // if not working catch, and thow error
        .catch((error)=>{
            console.log(error)
        });
    }

    componentDidMount() {
        //Use axios to interact with API -- Talks HTTP 
        axios.get('http://localhost:4000/api/items') //Async req
        // Callback function
        .then((response)=>{
            // update state, callback function ^
            this.setState({
                myItems: response.data
            })
        })
        // if not working catch, and thow error
        .catch((error)=>{
            console.log(error)
        });
    }

    //Way of storing data -> State {}
state = {

    myItems: []        
};

    render(){
        return(
            <div>
                <h2>Products</h2>
                {/* Send data to be sorted one by one */}
                <Items items={this.state.myItems} ReloadData={this.ReloadData}></Items>
                <br></br>
                <a href="/additem" class="btn btn-info" role="button">Add New Product</a>
            </div>
        );
    }
}

//Send for export
export default View;