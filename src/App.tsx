import { Amplify } from 'aws-amplify';
import Mess from './Mess';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export default function App() {
  return (
    <>
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user!.username}</h1>
          <Mess></Mess>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </>
  );
}