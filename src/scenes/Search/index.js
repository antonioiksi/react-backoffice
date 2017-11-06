import React, {Component} from 'react'
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import SearchFileUpload from "./components/SearchFileUpload/index";
import {ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

const initQueryValues = [{name:'phone',value:'43523452'},{name:'firstname', value:'Petrov'}];


const SEARCH_TYPES = {FORM:'form',FILE:'file'};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchType:SEARCH_TYPES.FILE,
            query:initQueryValues,
            result:[]
        };

        this.addValue = this.addValue.bind(this);
        this.removeValue = this.removeValue.bind(this);
        this.loadQuery = this.loadQuery.bind(this);
        this.search = this.search.bind(this);
    }

    loadQuery(query) {
        this.setState({
            query:query
        });
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
        this.setState({
            result: this.state.query.slice(0),
        });

    }


    render() {
        return (
            <div>
                <h1>Search</h1>

                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={this.state.searchType}>
                        <ToggleButton value={SEARCH_TYPES.FORM} onClick={()=>this.setState({searchType:SEARCH_TYPES.FORM})}>Form</ToggleButton>
                        <ToggleButton value={SEARCH_TYPES.FILE} onClick={()=>this.setState({searchType:SEARCH_TYPES.FILE})}>FILE</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                {
                    this.state.searchType === SEARCH_TYPES.FORM ? (
                        <SearchForm addValue={this.addValue}
                                    removeValue={this.removeValue}
                                    queryValues={this.state.query}
                                    search={this.search}
                        />
                    ) : (
                        <SearchFileUpload loadQuery={this.loadQuery}
                                          search={this.search}
                        />
                    )
                }
                <SearchResult jsonData={this.state.result}/>
            </div>
        )
    }
}

export default Search