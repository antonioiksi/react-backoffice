import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import PropTypes from 'prop-types';

function FieldGroup({ id, label, help, ...props }) {

        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props}/>
                {help && <HelpBlock>{help}</HelpBlock>}

            </FormGroup>
        );
}

class SearchFileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.handleFileSelect = this.handleFileSelect.bind(this);
    }

    displayData(content) {
        this.setState({data: content});
        this.props.loadQuery(JSON.parse(content));
    }


    handleSearch(event) {
        this.props.search();
    }


    handleFileSelect(evt) {
        let files = evt.target.files;
        if (!files.length) {
            alert('No file select');
            return;
        }
        let file = files[0];
        let that = this;
        let reader = new FileReader();
        reader.onload = function(e) {
            that.displayData(e.target.result);
        };
        reader.readAsText(file);
    }

    render() {
        const data = this.state.data;
        return(
            <div>
                <h1>SearchFileUpload</h1>
                <FieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."
                    accept=".json"
                    onChange={this.handleFileSelect}
                />
                { data && <p> {data} </p> }

                <Button  bsStyle="primary" bsSize="large" onClick={() => this.handleSearch()}>Search</Button>
            </div>
        )
    }
}

SearchFileUpload.PropTypes = {
    loadQuery: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
};
export default SearchFileUpload;