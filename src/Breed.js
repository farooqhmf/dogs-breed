import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreedDataRequest } from './action';

class Breed extends Component {

    componentDidMount(){
        const { match: { params } } = this.props;
        this.props.dispatch(getBreedDataRequest(params.breed));
    }

    render(){
        const { match: { params } } = this.props;
        console.log('images :: ', this.props);
        const imgList = this.props.images;
        return (
            <div style={{marginLeft: '5%'}}>
                <h1 style={{textAlign: 'center'}}>{params.breed.toUpperCase()}</h1>
                <div>
            {
              imgList && imgList.map 
              (url => <img  
                style={{width: 150, height: 150, margin: '10px'}} 
                src={url} 
                alt={params.breed} 
                key={url}
                />)
            }
          </div>
            </div>
        );
    }
}

const mapstateToProps = state => {
  return {
    isFetching: state.isFetching,
    images: state.images,
    error: state.error,
  }
}
export default connect(mapstateToProps)(Breed);

















