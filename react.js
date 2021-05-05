let rootElement = document.getElementById('root');

//React api in order to create the element
/* let element = React.createElement('div', {
    children: ['Hello world but from ReactJs'],
    className: 'container'
    }
); */

//Now we will recreate the exact same example from above but using JSX
//In order fro the browser to be able to understand JSX, 'babel' must be used
let element = <div className='container'>Hello world from JSX</div>;

ReactDOM.render(element, rootElement);