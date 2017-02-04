import React from 'react'
import InfoArea from '../info-area/index.jsx'
import InfoStore from '../infoStore.js'

class InfoContainer extends React.Component{

 render() {
    return (
     	<InfoArea store={InfoStore} pathname= {this.props.location.pathname}/>
    );
  }

}

export default InfoContainer