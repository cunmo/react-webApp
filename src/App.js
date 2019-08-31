import React from 'react';
import {routerConfig} from './router'
import Layout from './layout/index'
import {HashRouter as Router,Switch,Redirect} from 'react-router-dom'
function App() {
  return ( 
     <div className="App">      
         <Router>
          <Switch>
            <Redirect from='/' to='/home' exact/>
            {
              routerConfig.map((item,index)=>(
                 <Layout key={index} {...item} />
              ))
            }
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
