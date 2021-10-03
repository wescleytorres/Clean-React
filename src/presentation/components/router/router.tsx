import { Signup } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={makeLogin} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  </BrowserRouter>
)

export default Router
