let rootElement = document.getElementById('root');

function Greetings(){

    const [name, setName] = React.useState(window.localStorage.getItem('name'));

    React.useEffect( () => {
        window.localStorage.setItem('name', name);
        name ? document.title = `Welcome, ${name.charAt(0).toUpperCase() + name.slice(1) }` : document.title = "REACT'S BASICS" ;
    });

    return(
        <div className='container mt-2'>
            <label htmlFor="name">Name</label>
            <br/>
            <input value={name} onChange={ (event) => setName(event.target.value) } type="text"/>
            <br/>
            { name ?  <strong>Hello {name}</strong> : 'Please enter your name' }
        </div>
    )

}

ReactDOM.render(<Greetings/>, rootElement);