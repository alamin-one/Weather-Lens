import Home from './components/Home';

const cloudStyle = {
  backgroundImage: `
    radial-gradient(ellipse 200px 80px at 15% 30%, rgba(180,160,200,0.4) 0%, transparent 70%),
    radial-gradient(ellipse 300px 100px at 70% 20%, rgba(160,150,190,0.35) 0%, transparent 70%),
    radial-gradient(ellipse 150px 60px at 45% 45%, rgba(190,180,210,0.25) 0%, transparent 70%),
    radial-gradient(ellipse 220px 80px at 85% 50%, rgba(185,175,205,0.25) 0%, transparent 70%)
  `,
  animation: 'cloudDrift 60s linear infinite',
};
const bgStyle = {
  background:
    'linear-gradient(160deg, #2c2f6b 0%, #3a3080 15%, #5a4a8a 30%, #7a5a9a 45%, #8a8ac0 65%, #9a88b0 85%, #8a78a0 100%)',
};

function App() {
  return (
    <>
      <main className={' relative overflow-scroll'} style={bgStyle}>
        <div className="absolute inset-0" style={cloudStyle} />
        <div className="container h-screen max-w-238 mx-auto px-5 py-5 relative z-10 ">
          <Home />
        </div>
      </main>
    </>
  );
}

export default App;
