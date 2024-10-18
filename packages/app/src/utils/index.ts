// Helper function to detect if the app is running in Electron
export function isElectron() {
  return typeof window.api !== 'undefined';
}
