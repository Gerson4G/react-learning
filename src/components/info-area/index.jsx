import React from 'react'
import { observer } from 'mobx-react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


//@observer
//{this.props.store.infosValue()}
class InfoArea extends React.Component{

	static propTypes = {
 	data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    Projects: React.PropTypes.object,
  }).isRequired,
}

  	componentDidUpdate() {  

  		console.log(this.props.data)
  	}	

	componentWillMount() {  
	
	let path = this.props.pathname;
	let ProfileWithData


  	}	
	
 render() {
 console.log(this.props.data.allProjects)
if(!this.props.data.loading)
	return(<div>Cargando</div>)
else
    return (
      <div className="">
		
		{this.props.data.allProjects}
      	<p>Lorem Ipsum coler</p>
      </div>
    );
  }

}

	const Rest = gql`
		query Projects{
		  allProjects(name_Icontains:"Tutorial"){
		  	 edges{
		  	 	nodes{
		  	 		name	
		  	 	}
		  	 }
		        
		  }
		}
		`

		
const		ProfileWithData = graphql(Rest)(InfoArea);


export default ProfileWithData