import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem'

function MenuPage({ title, options }) {
    return (
        <React.Fragment>
            {title}
            {options.map(option => <MenuItem key={option.title} {...option} />)}
        </React.Fragment>
    )
}

MenuPage.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
}

export default MenuPage
