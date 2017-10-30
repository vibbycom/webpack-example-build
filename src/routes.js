import {HashRouter as Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

export default (
  <Router history={customHistory}/>
)
