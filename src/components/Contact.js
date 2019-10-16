import React, { Component } from 'react';
import "./Contact.scss"
import contacts from '../data/contacts.json';
import Delete from './Delete'



class Contact extends Component {

    state = {
        contacts: contacts.slice(0, 5),
        filteredContacts: contacts.slice(0, 5)
    }

    handleSearch = (e) => {
        var searchQuery = e.target.value
        var searchResult = this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
        this.setState({ filteredContacts: searchResult })
    }

    clickHandler = () => {
        function random() {
            return contacts[Math.floor(Math.random() * contacts.length)];
        }
        var randomContact = random()
        var random = [...this.state.filteredContacts, randomContact];
        this.setState({ filteredContacts: random })
    }

    sortName = () => {

        var sorted = contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)

        this.setState({ filteredContacts: sorted })
    }

    sortPop = () => {
        var sortedPop = contacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
        this.setState({ filteredContacts: sortedPop })
    }

    deleteHandler = (indexN) => {
        var newContacts = [...this.state.filteredContacts];
        newContacts.splice(indexN, 1);
        this.setState({ filteredContacts: newContacts });

    }


    render() {
        return (

            <div className="AppCol">
                <h1>IronContacts</h1>
                <button onClick={this.clickHandler}>Add Random Contact</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPop}>Sort by popularity</button>
                <input className="AppInput" onChange={this.handleSearch} type="text" />
                <div className="AppRow">
                    <h2>Picture</h2>
                    <h2>Name</h2>
                    <h2>Popularity</h2>
                </div>
                <div id="contactsDiv">
                    {this.state.filteredContacts.map((contact, index) => (
                        <div className="contactsRow">
                            <img src={contact.pictureUrl} alt="contacts" />
                            <h3>{contact.name}</h3>
                            <h3>{contact.popularity}</h3>
                            <Delete
                                index={index.toString()}
                                deleteContact={this.deleteHandler}
                            />
                        </div>
                    ))}


                </div>
            </div>

        )
    }

}

export default Contact;