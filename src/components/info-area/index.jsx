import React from 'react'
import { observer } from 'mobx-react'

@observer
class InfoArea extends React.Component{

  	componentDidUpdate() {  

	let path = this.props.pathname;
	let url;

		if(path=='/About')
			url = 'http://localhost:8000/About/1'
		else if(path=='/Skills')
			url = 'http://localhost:8000/About/2'
	    fetch(url, {
			method: 'get'
		}).then((response) => {
	        return response.json()
	      }).then((res)=>{
	      	this.props.store.addInfo(res.name)

	      })
  	}	

	componentWillMount() {  

	let path = this.props.pathname;
	let url;

		if(path=='/About')
			url = 'http://localhost:8000/About/1'
		else if(path=='/Skills')
			url = 'http://localhost:8000/About/2'
	    fetch(url, {
			method: 'get'
		}).then((response) => {
	        return response.json()
	      }).then((res)=>{
	      	this.props.store.addInfo(res.name)

	      })
  	}	
	
 render() {
 

    return (
      <div className="">
		{this.props.store.infosValue()}
      	<p>Lorem Ipsum coler</p>
      </div>
    );
  }

}

export default InfoArea