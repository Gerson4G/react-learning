import React from 'react'
import ButtonsContainer from '../buttons-container/index.jsx'
import InfoContainer from '../info-container/index.jsx'
import ProfilePic from '../profile-pic/index.jsx'

class Navigation extends React.Component{

 render() {
    return (
      <div className="navigation">
      	<InfoContainer/>
      	<ProfilePic/>
        <ButtonsContainer className="" buttons = {this.props.buttons}></ButtonsContainer>
      </div>
    );
  }

}

export default Navigation