import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NewsDetail from './NewsDetail'
import NewsListing from './NewsListing'



const News = () => (
  <Switch>
    <Route path='/news/:urlMap' component={NewsDetail}/>

  </Switch>
)

export default News