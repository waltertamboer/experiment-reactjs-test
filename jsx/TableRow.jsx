import React from 'react';

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
            </tr>
        );
    }
}

export default TableRow;
