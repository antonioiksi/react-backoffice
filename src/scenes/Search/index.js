import React, {Component} from 'react'
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

const initQueryValues = [{name:'phone',value:'43523452'},{name:'firstname', value:'Petrov'}];


class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            query:initQueryValues,
            result:[]
        };

        this.addValue = this.addValue.bind(this);
        this.removeValue = this.removeValue.bind(this);
        this.search = this.search.bind(this);
    }

    addValue(name,value) {

        this.setState({
            query: [...this.state.query, {name:name, value: value}]
        });
    }


    removeValue(removeId) {
        //console.log(removeId);
        this.setState({
            query: this.state.query.filter((_,i) => i !== removeId)
        });
    }

    search() {
        alert('aaa');

        this.setState({
            result: this.state.query.slice(0),
        });

    }


    render() {
        return (
            <div>
                <h1>Search</h1>
                <SearchForm addValue={this.addValue}
                            removeValue={this.removeValue}
                            queryValues={this.state.query}
                            search={this.search}
                />
                <SearchResult jsonData={this.state.result}/>
            </div>
        )
    }
}

export default Search