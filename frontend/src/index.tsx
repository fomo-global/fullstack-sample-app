import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App/App';
import { StoreProvider } from './state/StoreProvider';

const root = document.getElementById('root') as HTMLElement;

if (!root) {
  throw new Error('root not defined');
}

const container = createRoot(root);

container.render(
  // <StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>
  // </StrictMode>
);
