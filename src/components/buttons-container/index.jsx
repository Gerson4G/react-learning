import React from 'react'
import Buttons from '../buttons/index.jsx'

class ButtonsContainer extends React.Component {
  render() {
    return (
      <ul className="">
        {
          this.props.buttons.map((button) => {
            return <Buttons key={ button.id }
                            name={ button.name }
                    />
          })
        }
      </ul>
    );
  }
}

export default ButtonsContainer