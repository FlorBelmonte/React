function App({isLoggedIn}) {
    return (
    <>
    <h1>My Application</h1>
    {isLoggedIn && <Profile/> }
    </>
    );
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

    export default App