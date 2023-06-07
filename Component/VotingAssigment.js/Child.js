import React, { Component } from 'react'

const Child = (Components) => {

    class Childcomponent extends Component {

        constructor(props) {
            super(props)

            this.state = {
                show: false,
                name: "rahul",
                age: 9,
                
            }
        }
        parentCallBack = () => {
            console.log(this.state.age)
            if (this.state.age > 18) {
                this.setState({ show: true })
            } else {
                this.setState({ show: false })
            }
            return true
        }

        render() {
            return (
                <Components
                    handleClick={() => this.parentCallBack()}
                    show={this.state.show}
                    name={this.state.name}
                    age={this.state.age}
                />
            )
        }
    }
    return Childcomponent
}
export default Child