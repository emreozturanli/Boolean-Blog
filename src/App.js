import AppRouter from "./router/AppRouter";
import AuthContextProvider from './context/AuthContext'
import { Toaster } from 'react-hot-toast'
import BlogContextProvider from "./context/BlogContext";

function App() {
  return (
    <div className="App" >
      <AuthContextProvider>
        <BlogContextProvider>
          <Toaster />
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
