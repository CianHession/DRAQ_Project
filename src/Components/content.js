import React, { Component } from 'react';
export class Content extends Component {
render() {
return <div className="App-intro">
<h1> Hello!</h1>
<h2>Welcome to <b><i>Hesh</i></b> Stores</h2>
<p>Hesh stores, is an interactive app, allowing the user to add products to a database, update the item and delete any item no longer avaiable.</p>
<a href="/products" class="btn btn-info" role="button">View Products</a>
</div>;
}
}