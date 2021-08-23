import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/routesAdm';
import history  from './services/history';
import { AuthProvider } from './Context/AuthContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faEye, faEdit, faUserMinus, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner, faEye, faEdit, faUserMinus, faUser );

function App() {
  return (
    <div>
      <AuthProvider>
        <Router history={ history }>
          <Routes />
        </Router> 
      </AuthProvider>     
    </div>
  );
}

export default App;
