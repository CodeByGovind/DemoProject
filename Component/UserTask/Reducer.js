import { ADD_USER, FETCH_USER, DELETE_USER } from './Typetask'

const initialState = {
    users: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const person = action.payload
            return {
                ...state,
                users: [...state.users,
                {
                    Name: person.Name,
                    Age: person.Age,
                    Address: person.Address,
                    id: Math.random(),
                    radio_props:
                    [
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' },
                        { label: 'Other', value: 'Other' }
                    ],
                    gender:person.gender,
                }]
            }
        case FETCH_USER: return {
            ...state,
            users: action.payload
        }
        case DELETE_USER: return {
            ...state,
            users: state.users.filter(item => item.id !== action.payload),
        }

        default: return state;
    }
}

