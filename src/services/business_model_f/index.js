import axios from 'axios';
import {validToken} from "../../components/auth";

const BUSINESS_SERVER_URL = 'http://localhost:8000';



export function attributes( sender)
{
    axios.get(BUSINESS_SERVER_URL+'/api/business/attributes/')
        .then(({data}) => {
            sender.setState({attrTypes: data});
        })
        .catch( ( err ) => {
            sender.setState({error: err.message});
        });
}

export function multifield_search_match( sender, jsonQuery)
{


    let config = {
        headers: {
            'Authorization': 'Bearer ' + validToken()
        }
    }

    axios.post(BUSINESS_SERVER_URL+'/api/business/multifield-search-match/', jsonQuery, config)
        .then(({data}) => {
            sender.setState({result: data, loading:false});
        })
        .catch( ( err ) => {
            sender.setState({error: err.message});
        });
}