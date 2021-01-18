import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export class ItemFilter extends Component {

    state = {
        filterBy: {
            title: '',
            artist: '',
            lowPrice: -Infinity,
            highPrice: Infinity
        }
    }

    onChangeFilter = (type) => {
        this.props.onSetFilter(type);
    }

    


    render() {
        return <section className="item-filter item-filter-container">
<<<<<<< HEAD
        <input className="item-filter-search" type="text" placeholder="Enter Keywords" onChange={(ev) => {
            this.props.onSetFilter(ev.target.value, true)
=======
        <input className="item-filter-search" type="text" placeholder="Search:" onChange={(ev) => {
            this.onChangeFilter(ev.target.value, true)
>>>>>>> 83d76758e5eb1564028fae19ea9228e7db6605a1
        }} />

        <select className="item-sort" onChange={(value) => this.onChangeFilter(value.target.value)} >
            <option value="title" >Title</option>
            <option value="artist" >Artist</option>
            <option value="lowPrice">Low Price</option>
            <option value="highPrice">High Price</option>
         
        </select>

        <Button onClick={this.onChangeFilter} className="btn-search">Search</Button>
    </section>

    }
}