import React, { Component } from 'react';
import ShopItem from './shopItem';

class Items extends Component{
    render(){
        //Get array of movies, take it apart and for each do x.
        return this.props.items.map((item)=>{
            return <ShopItem myItem={item} key={item._id} ReloadData = {this.props.ReloadData}></ShopItem>
        });
    }
}

//Send for export
export default Items;