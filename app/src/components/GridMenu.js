var React = require('react')

module.exports = React.createClass({
  render: function(){
    return  <div className={"row grid-menu " + this.props.className}>
              <div className="col">
                <h5 className="heading">Statistics</h5>
                <span className="lead">Keep track of your work and review it with insightful statistics.</span>
              </div>
              <div className="col">
                <h5 className="heading">Public rooms</h5>
                <span className="lead">Meetings with remote teams or remote pair pair programming sessions stay in sync with a shared pomodoro</span>
              </div>
              <div className="col">
                <h5 className="heading">About</h5>
                <span className="lead">Pomodoro.cc helps you to stay concentrated.</span>
              </div>
            </div>
  }
})
