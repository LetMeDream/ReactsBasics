
let rootElement = document.getElementById('root');

let btnClasses = 'button is-danger is-outlined mx-1';

/* Creating a function component on React */
const Btn = (props) => <a className={btnClasses} href={ props.url }>Going to { props.destiny }</a>;

/* function Btn({url, destiny}){
    return( <a className={btnClasses} href={ url }>Going to { destiny }</a> );
} */

/* Let's create custom validation to our custom function component */
Btn.propTypes = {
    destiny: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


let element =
    <>
        <Btn destiny='4chan' url='https://4chan.org'></Btn>
        <Btn destiny='Youtube' url='https://www.youtube.com'></Btn>
        <Btn destiny='Instagram' url='https://www.instagram.com'></Btn>
    </>;



ReactDOM.render(element, rootElement);