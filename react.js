let rootElement = document.getElementById('root');

//Now we will recreate the exact same example from above but using JSX
//In order fro the browser to be able to understand JSX, 'babel' must be used

/* If we wanted to use variables as interpolated values */
let greet = 'Hello from an interpolated JSX variable';
let divClassName = 'container mt-3';

let className = 'button is-small';
let href = 'https://google.co.ve';
let props = { className, href }

let element =
    <>
        <div className={divClassName}>
            {greet}<br/>
            <a id='extended' { ...props } target='_blank'>New button</a>
        </div>
    </>;

console.log(element);

ReactDOM.render(element, rootElement);