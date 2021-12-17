import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ShopItem extends Component {
    //Constructor
    constructor(){
        super();
        //Bind To (if not ----> error)
        this.DeleteItem = this.DeleteItem.bind(this);
    }

    //Call method for delete Item
    DeleteItem(){
        //Log delete + id
        console.log("Delete: " + this.props.myItem._id);

        axios.delete('http://localhost:4000/api/items/' +this.props.myItem._id)
        .then(()=>{
        this.props.ReloadData();
        })
        .catch(()=>{

        })
    }

    render() {
        return (
            <div>
                {/* Using Card Component from bootstrap */}
                <Card>
                    <Card.Header>{this.props.myItem.name}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myItem.image}></img>
                            <footer>
                                <p>{this.props.myItem.price}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                {/* Change link to edit */}
                <Link to={'/updateitem/' + this.props.myItem._id} className="btn btn-warning">Edit Item</Link>
                {/* Button for Deletion*/}
                <Button variant="danger" onClick={this.DeleteItem}>Delete</Button>
            </div>
        );
    }
}

//Send for export
export default ShopItem;