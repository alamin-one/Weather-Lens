import Home from './components/Home';
import ContextProvider from './context/ContextProvider';
/*  */

const bgStyle = {
  background:
    'linear-gradient(160deg, #2c2f6b 0%, #3a3080 15%, #5a4a8a 30%, #7a5a9a 45%, #8a8ac0 65%, #9a88b0 85%, #8a78a0 100%)',
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
