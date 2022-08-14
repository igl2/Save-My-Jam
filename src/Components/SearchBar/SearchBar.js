import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return(
            <div className="SearchBar">
                <input aria-label="input-field" onChange={this.handleTermChange} placeholder="Enter a song, album, or artist" />
                <button className="SearchButton" onClick={this.search}>Search</button>
            </div>
        )
    }
}

export default SearchBar;