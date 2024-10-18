import { api } from '@repo/shared/trpc';
import { Button } from '@repo/ui/components/ui/button';

import { useEffect, useState } from 'react';
import { isElectron } from './utils';

// Demo Function to show a native dialog in Electron
const showNativeDialog = () => {
  if (isElectron()) {
    window.api.showMessage('Hello from Electron!');
  } else {
    alert('Native actions are disabled in the web environment.');
  }
};

const App = () => {
  const [env, setEnv] = useState<string>('');

  useEffect(() => {
    if (isElectron()) {
      setEnv('Electron');
    } else {
      setEnv('Web');
    }
  }, []);

  const { data, isLoading, error } = api.greeting.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Environment: {env}</p>
      <p>tRPC: {data}</p>
      <Button onClick={showNativeDialog}>Show native dialog</Button>
    </div>
  );
};

export default App;
