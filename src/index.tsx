import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './Main'

let mainElement = document.getElementById('main')

if (mainElement == null) {
  mainElement = document.createElement('div')
  document.body.appendChild(mainElement)
}

function render(Component: React.Factory<any>) {
  ReactDOM.render(<Component/>, mainElement)
}

render(Main)

if (module.hot) {
  module.hot.accept('./Main.tsx', function () {
    render(Main)
  })
}
