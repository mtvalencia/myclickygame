import React from 'react'


class Nav extends React.Component {
    
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-warning">
                <div><h1>My Cat Clicky Game</h1></div>
                </nav>
                <div className="card text-center">
            <div className="card-header text-white bg-dark">
                <h2>Game Stats</h2>
            </div>
            <div className="card-body">
                <div className="row">
                 <div className="col-6">
                     <h5>My Score: {this.props.score}</h5>
                 </div>
                 <div className="col-6">
                     <h5>High Score: {this.props.highScore}</h5>
                 </div>
                 </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Nav