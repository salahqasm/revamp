import React, { useReducer, useState } from 'react'
type state = {
    name: string,
    age: string
}
type actions = {
    type: string,
    payload: state
}
function reducer(state: state[], actions: actions): state[] {
    switch (actions.type) {
        case "ADD":
            return [...state, actions.payload]
        case "DELETE":
            return state.filter(e => e.name !== actions.payload.name || e.age !== actions.payload.age)
        default:
            return [...state]
    }
}
export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<string>('');

    return (<>
        <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: "ADD", payload: { name: name, age: age } }) }}>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        <hr />
        {
            state.map(e => <div>
                <h1>{e.name} ---&gt; {e.age}</h1>
                <button
                className='border-solid border-2 border-[#F99417] rounded-md px-2 hover:bg-[#F99417] hover:text-[#363062]'
                 onClick={() => dispatch({ type: "DELETE", payload: { name: e.name, age: e.age } })}>
                    Delete
                </button>
            </div>)
        }
    </>
    )
}
