import React, {Component} from 'react';

class MainContent extends Component {
    state = {
        name: ''
    };

    clearName = () => {
        this.setState({name: ''});
    };

    displayName() {
        const {name} = this.state;
        return (name !== '' ? <span>,  {name}!</span>: '');
    };

    updateName(e) {
        this.setState({ name: e.target.value });
    };
    
    render() {
        return (
            <div id="mainContent">
                <div className="row">
                    <div className="col-sm">
                        <h1>Hello World{this.displayName()}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <input type="text" className="form-control" placeholder="Enter name here... " value={this.state.name} onChange={(e) => {this.updateName(e)}}/>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-med btn-primary" onClick={this.clearName}>Clear</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default MainContent;