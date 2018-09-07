import React, {Component} from 'react';
// import { Divider } from 'antd';

import "./views/index.css";

import RouterIndex from './router/router';

class App extends Component {
    render(){
        return(
            <div className="page_wrap">
                <RouterIndex/>
            </div>
            // <div>11</div>
        )
    }
}

export default App;