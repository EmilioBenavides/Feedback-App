import React from 'react'
import PropTypes from 'prop-types'


function  Header({ text })  {
    return (
        <header>
            <div className={'container'}>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
}
// PropTypes.ex can be a boolean, array, ect
Header.propTypes = {
    text: PropTypes.string,
}

export default Header