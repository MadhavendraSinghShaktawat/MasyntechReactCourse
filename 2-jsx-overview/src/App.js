const App = () => {

    // Basic Syntax
    const element = <h1> Hello World</h1>
    //Embedding Expression
    const name1 = 'React Dev';
    const element2 = <h1>Hello {name1} {2+2}</h1>
    //JSX as an expression
    const elements = (
        <div>
            <h1>Hello, Worllld....</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )

    return elements;
};

export default App;