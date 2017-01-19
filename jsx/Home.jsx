import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content.jsx';
import Header from './Header.jsx';
import TableRow from './TableRow.jsx';

class Home extends React.Component {
    constructor() {
        super();

        var self = this;

        this.state = {
            data: [],
            input: 'Hello'
        }

        fetch('data.json').then(function (response) {
            return response.json();
        }).then(function (data) {
            self.setState({
                data: data
            });
        });

        this.updateState = this.updateState.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    updateState(e) {
        console.log(e);

        this.setState({
            input: e.target.value
        });
    }

    addHandler() {
        let id = this.state.data.length + 1;

        this.state.data.push({
            id: id,
            "name": "Item " + id
        });

        this.setState({
            data: this.state.data
        })
    }

    forceUpdateHandler() {
        var paragraph = document.getElementById('randomNumber');

        ReactDOM.findDOMNode(paragraph).style.color = 'green';

        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <Header value="Hello world!"/>
                <Header />

                <p>
                    <input type="text" value={this.state.input} onChange={this.updateState}/>
                </p>

                <p id="randomNumber">
                    {Math.random()}
                </p>

                <Content />

                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>

                <p>
                    <button onClick={this.addHandler}>Add</button>
                    <button onClick={this.forceUpdateHandler}>Refresh</button>
                </p>
            </div>
        );
    }
}

export default Home;
