import React from "react"

export const Header = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}


export const Footer = (props) => {
    return (
        <div>
            {props.name}
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