function FirstPage(props){
    console.log('props',props);

    return(
        <h1>I'm form first page, my name is {props.data.name}, and my country is {props.countryDetails}</h1>
    )
}

export default FirstPage;