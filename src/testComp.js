import React from "react"

export const Header = (props) => {
    const state = {
        value: "Dima"
    }
    return (
        <div>
            {props.title} and the state {state.value}
        </div>
    )
}


export const Footer = (props) => {
    const state = {
        val: "Hey"
    }
    return (
        <div>
            {props.name} and the state is {state.val}
        </div>
    )
}


export const Body = (props) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

class Test extends React.Component{
    render(){
        return (
            <div>
                {this.props.name}
            </div>
        )
    }

}
export default Test;