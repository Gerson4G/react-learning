import React from 'react'
import Navigation from '../navigation/index.jsx'
import InfoContainer from '../info-container/index.jsx'


class MainContainer extends React.Component{


 render() {

let buttons_name = [
					{id: 1, name: "About"},
					{id: 2, name: "Skills"},
					{id: 3, name: "Skills"},
					{id: 4, name: "Skills"},
					{id: 5, name: "Skills"},
					]

    return (
      <div className="">
      	<Navigation buttons={ buttons_name }/>
      	<InfoContainer/>
      </div>
    );
  }

}

export default MainContainer