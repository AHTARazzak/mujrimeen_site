import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const imagesPath = {
  free: "instalink",
  visit: "instalinkvisited"
}


export default class Instatoggle extends Component {
    state = {
        open: true,
    }
    toggleImage = () => {
        this.setState(state => ({ open: false }))
    }
    getImageName = () => this.state.open ? 'free' : 'visit'
    render() {
        const imageName = this.getImageName();
            return (
            <a className={imagesPath[imageName]} href="https://www.instagram.com/slimenbile/" target="_blank" onClick={this.toggleImage} />
                );
    }
}