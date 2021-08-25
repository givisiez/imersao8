import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../Context/AuthContext';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { UsersList } from '../pages/Users/List';
import { UserShow } from '../pages/Users/Show';
import { UserCreate } from '../pages/Users/Create';
import { UserEdit } from '../pages/Users/Edit';

export default function RoutesAdm() {

  function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated } = useContext(Context);

    if(isPrivate && !authenticated) {
      return <Redirect to="/" />
    }

    return <Route {...rest} />
  } 

  return (
    <Switch>
      <CustomRoute exact path='/' component={ Login } />
      <CustomRoute isPrivate path='/dashboard' component = { Dashboard } />
      <CustomRoute isPrivate path='/users/list' component = { UsersList } />
      <CustomRoute isPrivate path='/users/show/:id' component = { UserShow } />
      <CustomRoute isPrivate path='/users/create' component = { UserCreate } />
      <CustomRoute isPrivate path='/users/edit/:id' component = { UserEdit } />
    </Switch>
  )
}
