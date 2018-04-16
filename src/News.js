import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NewsDetail from './NewsDetail'
import NewsListing from './NewsListing'



const News = () => (
  <Switch>
    <Route exact path='/news' component={NewsListing}/>
    <Route path='/news/:urlMap' component={NewsDetail}/>
  </Switch>
)

export default News