// @ts-nocheck
import renderer from 'react-test-renderer'
import Hello from '../components/Hello'

it('renders world message correctly', () => {
	const tree = renderer.create(<Hello message='world' />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('renders sahil message correctly', () => {
	const tree = renderer.create(<Hello message='Sahil' />).toJSON()
	expect(tree).toMatchSnapshot()
})
