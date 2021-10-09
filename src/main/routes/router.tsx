import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { makeSignUp } from '@/main/factories/pages/signup/signup-factory'
import { ApiContext } from '@/presentation/contexts'
import { SurveyList } from '@/presentation/pages'
import { AccountModel } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'
import { makeLocalStorageAdapter }
  from '@/main/factories/cache/local-storage-adapter-factory'

const setCurrentAccountAdapter = (account: AccountModel): void => {
  if (!account?.accessToken) {
    throw new UnexpectedError()
  }
  makeLocalStorageAdapter().set('account', JSON.stringify(account))
}

const Router: React.FC = () => (
  <ApiContext.Provider
    value={{
      setCurrentAccount: setCurrentAccountAdapter
    }}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={makeSignUp} />
        <Route path="/" exact component={SurveyList} />
      </Switch>
    </BrowserRouter>
  </ApiContext.Provider>
)

export default Router
