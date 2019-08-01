import React from 'react'
import './cats.css'


class Image extends React.Component {
    render(){
        return(
            <div>
                <img onClick={() => this.props.updateClicked(this.props.name)} name={this.props.name} src={this.props.image}/>
            </div>
        )
    }
}

export default Image;