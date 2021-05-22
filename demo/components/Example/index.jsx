import PropTypes from 'prop-types'
import './Example.css'

const Example = ({children}) => {
  return <div className="example">{children}</div>
}

Example.propTypes = {
  children: PropTypes.node
}

export {Example}
