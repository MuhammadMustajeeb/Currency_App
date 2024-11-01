import Converter from './components/Converter/Converter';
import Header from './components/Header/Header'

function App() {

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-origin-border border-[20px] border-white'>
      <div className='w-full block'>
        <Header />
        <main>
          <Converter />
        </main>
      </div>
    </div>
);

}

export default App
