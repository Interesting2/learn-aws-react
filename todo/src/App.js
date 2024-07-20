import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
  return (
    // DISPLAYS SIGN-IN FORM IF USER NOT LOGGED IN
    <Authenticator>
      {({signOut, user}) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign Out</button>
        </main>
      )}

    </Authenticator>
  )
}

export default App;