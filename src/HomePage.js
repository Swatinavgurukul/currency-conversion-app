import React from 'react';
// import { useHistory } from 'react-router-dom';
import './App.css';

function Home(props) {

    // const history = useHistory();
    const { history } = props;

    return (
        <div>
            <h1>Currency Converter</h1>
            <button className="btn" onClick={() => history.push('/currency')}>Click me</button>
        </div>
    );
}
export default Home;