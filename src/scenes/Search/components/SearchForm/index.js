import React from 'react'
import PropTypes from 'prop-types'
import {Form, FormGroup, FormControl, ControlLabel, Button, Table} from 'react-bootstrap';


const AttrTypes = [{name:'phone',title:'Телефон'},{name:'firstname', title:'Имя'}];


class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                selectValue:'',
                textValue:''
            }
        }

    }

    handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({form: {...this.state.form, [fieldName]: fleldVal}},
            ()=>(console.log(this.state.form.textValue)));
    }


    handleAdd(event) {
        event.preventDefault();
        //alert('add');
        this.props.addValue(this.state.form.selectValue, this.state.form.textValue);
    }

    handleRemove(i) {
        this.props.removeValue(i);
    }

    handleSearch(event) {
        this.props.search();
    }

    render() {
        const queryValues = this.props.queryValues;
        return (
            <div>
                <h1>Search Form</h1>
                <Form horizontal>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Attribute Name</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" name="selectValue" onChange={this.handleChange.bind(this)}>
                            <option>-</option>
                            {AttrTypes.map((attr) =>
                                <option key={attr.name} value={attr.name}>
                                    {attr.title}
                                </option>
                            )}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsText">
                        <ControlLabel>Value</ControlLabel>
                        <FormControl type="text" placeholder="Value" name="textValue" onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" name="HiSearch" onClick={this.handleAdd.bind(this)}>
                            Add
                        </Button>
                    </FormGroup>
                </Form>


                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        queryValues.map((queryValue, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{queryValue.name}</td>
                                <td>{queryValue.value}</td>
                                <td>
                                    <Button  bsStyle="danger" onClick={() => this.handleRemove(i)}>Remove</Button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                <Button  bsStyle="primary" bsSize="large" onClick={() => this.handleSearch()}>Search</Button>
            </div>
        )
    }

};

SearchForm.PropTypes = {
    queryValues: PropTypes.array,
    addValue : PropTypes.func.isRequired,
    removeValue: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
};

export default SearchForm;