import React, {Component} from 'react';
import propTypes from 'prop-types';
import {fetchData} from '../apis/IdApi';

class DataContainer extends Component {
    state = {
        data: {}
    };

    componentWillReceiveProps(nextProps) {
        const {id} = nextProps;
        fetchData(id)
            .then(data => {
                this.setState({data});
            })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                Current fetched data: <strong>{JSON.stringify(data)}</strong>
            </div>
        );
    }
}

DataContainer.propTypes = {
    id: propTypes.number
};

export default DataContainer;
