import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">

                <button>&nbsp;</button>
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button>&nbsp;</button><br/>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
                <button>&nbsp;</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button>&nbsp;</button><br/>
                
            </div>
        );
    }
}


export default KeyPadComponent;
