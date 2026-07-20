import Home from './components/Home';
import ContextProvider from './context/ContextProvider';
/*  */

const bgStyle = {
   background:
  'linear-gradient(160deg, #0B1728 0%, #14213d 15%, #1d2d52 30%, #2a3d6b 45%, #3a4d80 65%, #3a4d80 85%, #3a4d80 100%)',
};
/*  */
function App() {
  return (
    <>
      <ContextProvider>
        <main className="" style={bgStyle}>
          <div className="px-5 py-8 container min-h-screen max-w-238 mx-auto">
            <Home />
          </div>
        </main>
      </ContextProvider>
    </>
  );
}
export default App;
