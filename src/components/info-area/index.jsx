import React from 'react'

class InfoArea extends React.Component{

	
	constructor(props) {
	    super(props)
	    this.state = { res: [] }
  	}

  	componentWillUpdate() {  

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
	      	this.setState({ res: res })
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
	      	this.setState({ res: res })
	      })
  	}	

 render() {

    return (
      <div className="">
      {this.state.res.name}
      	<p>Lorem Ipsum coler</p>
      </div>
    );
  }

}

export default InfoArea