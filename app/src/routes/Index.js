import Pomodoro from '../components/Pomodoro'
import TodoList from '../components/TodoList'
import SoundSettings from '../components/SoundSettings'
import TwitterShare from '../components/TwitterShare'
import DailyPulse from '../components/DailyPulse'
import * as actions from '../actions'
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Index extends Component {
  render () {
    const {timer, todos, settings, user, pomodoro, actions} = this.props
    return  <div className="content">
              <DailyPulse/>
              <TwitterShare/>
              <Pomodoro timer={timer} pomodoro={pomodoro} actions={actions}/>
              <SoundSettings settings={settings} actions={actions}/>
              <TodoList todos={todos} actions={actions}/>
              {!user.username ?
                <p className="login-invite">
                  <Link to="login">Login or signup</Link> to track your tasks and pomodoros,<br/> it's totally free!
                </p>
                : null}
            </div>
  }
}

Index.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  pomodoro: PropTypes.object.isRequired,
  timer: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default connect(
  (state) => {
    return {
      todos: state.todos,
      settings: state.settings,
      pomodoro: state.pomodoro,
      timer: state.timer,
      user: state.user,
    }
  },
  (dispatch) => {return {actions:bindActionCreators(actions,dispatch)}}
)(Index)