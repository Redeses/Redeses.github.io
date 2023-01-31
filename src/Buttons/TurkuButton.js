import './Button.css';
import React from 'react';
class TurkuButton extends React.Component {


    constructor(props){
        super(props);
        this.state={
            coordinates:[60.45, 22.28],
            name:"Turku"
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    


    
    render() {
        return (
            <div className="locationButtonContainer">
                <button  className='locationButton' onClick={event=>this.props.getData(event,[this.state.coordinates,this.state.name])}>Turku</button>
            </div>
        );
      }
  }

export default TurkuButton;