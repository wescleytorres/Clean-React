import faker from 'faker'

export const mockInvalidCredentialsError = (url: RegExp): void => {
  cy.intercept({
    method: 'POST',
    url
  }, {
    statusCode: 401,
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockForbiddenError = (url: RegExp, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 403,
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockServerError = (url: RegExp, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: faker.helpers.randomize([400, 404, 500]),
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockUnexpectedError = (url: RegExp, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: faker.helpers.randomize([400, 404, 500]),
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockOk = (url: RegExp, method: string, response: any): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 200,
    body: response
  }).as('request')
}

export const mockOkRefactor = (url: RegExp, method: string, fixture: string, alias: string = 'request'): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 200,
    fixture
  }).as(alias)
}
