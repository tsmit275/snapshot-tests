

import React from 'react'
import renderer from 'react-test-renderer'
import GitHubCard from './GithubCard'


test('GitHubCard snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
