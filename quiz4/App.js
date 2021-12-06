import React, { Component } from 'react'
import  Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import Button from './components/Button';

export default class App extends Component {
    render() {
        return (
            <div>
                {Main}
                {Footer}
                {Nav}
                {Header}
                {Button}
            </div>
        )
    }
}
