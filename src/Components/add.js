import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor() {
        super();
        //Bind to Functions to Add Item(s)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
        this.onChangeItemImage = this.onChangeItemImage.bind(this);

        //Set-up Blank State
        this.state = {
            Name: '',
            Price: '',
            Image: ''
        }
    }

    handleSubmit(event) {
        //obj for new Item addition
        const newItem = {
            Name: this.state.Name,
            Price: this.state.Price,
            Image: this.state.Image
        }
        //URL + What to Send
        axios.post('http://localhost:4000/api/items', newItem)
            .then((response) => { //callback function
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })

        //Stop handleSubmit refreshing page aka returning value to blank
        event.preventDefault();
        //Removes Values left in input boxes, does not reset values to default
        this.setState({
            Name: '',
            Price: '',
            Image: ''
        })
    }

    //What data gets updated/added
    onChangeItemName(event) {
        this.setState({
            //Title add/change
            Name: event.target.value,
        })
    }

    //What data gets updated/added
    onChangeItemPrice(event) {
        this.setState({
            //Price add/change
            Price: event.target.value
        })
    }

    //What data gets updated/added
    onChangeItemImage(event) {
        this.setState({
            //Image add/change
            Image: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Add New Item</h2>
                {/* Use form for adding Items using handleSubmit event */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Item Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            //When changes oCMN
                            onChange={this.onChangeItemName}
                        />
                    </div>

                    {/* Item Title */}
                    <div className="form-group">
                        <label>Add Item Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Price}
                            //When changes oCMY
                            onChange={this.onChangeItemPrice}
                        />
                    </div>

                    {/* Item Price */}
                    <div className="form-group">
                        <label>Add Image URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Image}
                            //When changes oCMT
                            onChange={this.onChangeItemImage}
                        />
                    </div>

                    {/* Item Image */}
                    <div>
                        <input type="submit"
                            value="Add Item"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

//Send for export
export default Add;