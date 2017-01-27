import React from 'react'
import InfoArea from '../info-area/index.jsx'

class InfoContainer extends React.Component{

 render() {
    return (
     	<InfoArea pathname= {this.props.location.pathname}/>
    );
  }

}

export default InfoContainer