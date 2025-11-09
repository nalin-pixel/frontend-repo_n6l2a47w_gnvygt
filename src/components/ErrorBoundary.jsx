import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('UI crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-2 text-white/70">The UI encountered an error. Try refreshing the page. If the issue persists, check the console for details.</p>
            <pre className="mt-4 text-xs text-red-300 whitespace-pre-wrap bg-white/5 border border-white/10 rounded p-3 max-h-60 overflow-auto">{String(this.state.error)}</pre>
            <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 rounded-lg bg-white text-black font-medium">Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
