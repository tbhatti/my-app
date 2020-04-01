import React from 'react';
import ReactDOM from 'react-dom';
/** Comment below line to import style.less
 * import './index.css';**/
import './styles.less';

class App extends React.Component{
    render(){
        return(
            <div>Hello Webpack World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))