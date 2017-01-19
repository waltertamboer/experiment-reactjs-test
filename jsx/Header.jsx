import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}

Header.propTypes = {
    value: React.PropTypes.string
}

Header.defaultProps = {
    value: 'HEADER VALUE NOT SET'
}

export default Header;
