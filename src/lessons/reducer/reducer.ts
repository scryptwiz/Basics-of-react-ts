export type CounterState = {
    count: number,
    status: string
}

export const initialState: CounterState = {
    count: 0,
    status: 'Pending'
}

type UpdateCountAction = {
    type: 'increment' | 'decrement' | 'reset'
}

type setStatus = {
    type: 'setStatus';
    payload: 'active' | 'inactive'
}

type CounterAction = UpdateCountAction | setStatus

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'reset':
            return { ...state, count: 0 }
        case "setStatus":
            return { ...state, status: action.payload }
        default:
            const unhandledActionType: never = action
            throw new Error(`Unexpected action type: ${unhandledActionType}. Please double check the counter reducer.`)
    }
}