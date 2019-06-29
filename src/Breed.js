import React, { Component } from 'react';
import axios from 'axios';

class Breed extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: []
        };
      //  this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const { match: { params } } = this.props;

        console.log("props",this.props);
        let that=this;
        axios.get(`https://dog.ceo/api/breed/${params.breed}/images`)
        .then(function (response) {
          
          console.log('img     ',response);
          that.setState({images: response.data.message})
        })
        .catch(function (error) {
          
          console.log(error);
        });
    }
    render(){
        const { match: { params } } = this.props;
      
        console.log('data :: ', params.breed)
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{params.breed.toUpperCase()}</h1>
                <div>
            {
              this.state.images && this.state.images.map (url => <img  style={{width: 150, height: 150}} src={url} alt="" key={url}/>)
            }
          </div>
            </div>
        );
    }
}
export default Breed;

















