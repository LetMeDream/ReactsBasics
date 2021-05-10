let rootElement = document.getElementById('root');

function CountChars({text}){
    // js-land
    return(// js-land
        <div className=''>
            The text "<strong>{text.toLowerCase()}</strong>" has
            { text.length ? <strong> {text.length} </strong> : ' no ' }
            characters
        </div>
        // js-land
    )

}

let element =
    <React.Fragment>
        <CountChars text='A single text'></CountChars>
        <CountChars text=''></CountChars>
        <CountChars text='whatever text we wanted'></CountChars>
    </React.Fragment>

ReactDOM.render(element, rootElement);