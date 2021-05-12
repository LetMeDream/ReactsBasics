let rootElement = document.getElementById('root');

function useLocalStorageState(key, defaultValue = ''){

    /* Let's "optimize it" using a lazy loader */
    const [state, setState] = React.useState(() => window.localStorage.getItem(key) || defaultValue );

    React.useEffect( () => {
        window.localStorage.setItem(key, state);
        state ? document.title = `Welcome, ${state.charAt(0).toUpperCase() + state.slice(1) }` : document.title = "REACT'S BASICS" ;
        /* Just to show the empty array ([]) optimization */
    }, [state,key]);

    return [state, setState]

}

function Greetings(){

    const [name, setName] = useLocalStorageState('name', '');

    return(
        <div>
            <label htmlFor="name">Name</label>
            <br/>
            <input value={name} onChange={ (event) => setName(event.target.value) } type="text"/>
            <br/>
            { name ?  <strong>Hello {name}</strong> : 'Please enter your name' }
        </div>
    )

}

function App(){

    const [counter, setCounter] = React.useState(0);

    function handleClick(){
        setCounter( counter + 1 )
    }

    return(
        <div className='container mt-2'>
            <button onClick={ handleClick } className="btn btn-primary">{counter}</button>
            <Greetings></Greetings>
        </div>
    )

}

ReactDOM.render(<App/>, rootElement);