import React, { Component } from 'react'
const Vaxin = (Student,hoursPerDay) => {
    class Sneha extends Component {
        constructor(props) {
            super(props)
            this.state = {
                age: this.props.age,
                name :this.props.name,
                vacination_type:(false)

            }
        }
        onTrainingProgress = () => {
            this.setState({
                vacination_type:(true)
                
            })
        }
        render() {
            return (
                <Student 
                    name={this.state.name}
                    Age={this.state.age}
                    hocOnTrainingProgress={this.onTrainingProgress}
                    {...this.props}
                    />
            )
        }
    }
    return Sneha
}

export default Vaxin;