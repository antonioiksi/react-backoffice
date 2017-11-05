import React from 'react'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'

class SearchResult extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Search Result</h1>
                <ReactJson src={this.props.jsonData} />
            </div>
        )
    }

}

SearchResult.PropTypes = {
    jsonData: PropTypes.array,
};

export default SearchResult;