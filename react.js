let rootElement = document.getElementById('root');

let state = { count: 0 , msg: '' }

function App(){

    function handleButton(){
        setState( { count: state.count + 1 } );
    }

    function handleChange(event){
        setState( { msg: event.target.value } );
    }

    return(
        <div className='container mt-2'>
            <button onClick={ handleButton } >Event me</button>
            <p>The event has fired {state.count} times </p>
            <p>The message written in the input below is: <strong>{ state.msg }</strong></p>
            <input onChange={ handleChange } />
        </div>
    )

}

/* Fake setState of our creation */
function setState(newState){
    Object.assign(state, newState);
    Render()
}
/* Rendering, as usual, but inside it's own function */
function Render(){
    ReactDOM.render(<App/>, rootElement);
}
Render()

