let rootElement = document.getElementById('root');

let btnClasses = 'button is-danger is-outlined mx-1';

/* Creating a component on React */
let Btn = (props) => <a class={btnClasses} href={ props.url }>Going to { props.destiny }</a>;

let element =
    <>
        <Btn destiny='4chan' url='https://4chan.org'></Btn>
        <Btn destiny='Youtube' url='https://www.youtube.com'></Btn>
    </>;

console.log(Btn);

ReactDOM.render(element, rootElement);