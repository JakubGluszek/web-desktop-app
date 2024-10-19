import '@repo/ui/globals.css';
import '@repo/shared/types/global';

import { api } from '@repo/shared/trpc';
import { Button } from '@repo/ui/components/ui/button';

import { isElectron } from './utils';

const isDesktop = isElectron();

// Demo Function to show a native dialog in Electron
const showNativeDialog = () => {
  if (isElectron()) {
    window.api.showMessage('Hello from Electron!');
  } else {
    alert('Native actions are disabled in the web environment.');
  }
};

const App = ({ config }: { config: { appVersion?: string; isDev: boolean } }) => {
  const { data } = api.greeting.useQuery();

  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="m-auto flex flex-col space-y-4 border bg-muted rounded p-8">
        <p>Environment: {isDesktop ? 'Desktop' : 'Web'}</p>
        <p>Mode: {config.isDev ? 'Development' : 'Production'}</p>
        <p>tRPC: {data ?? 'Failed to connect (make sure the server is running)'}</p>
        {isDesktop && <p>App version: {config.appVersion ?? 'Missing app version signature'}</p>}
        <Button onClick={showNativeDialog}>Open native dialog</Button>
      </div>
    </main>
  );
};

export default App;
