import './App.css';

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-black">
      <label className='relative cursor-pointer'>
        <input type="text" placeholder="Input" className='h-20 w-96 px-6 text-4xl text-white bg-black border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
        <span className='text-4xl text-white text-opacity-80 bg-black absolute left-5 top-5 px-1 transition duration-200 input-text'>Input</span>
      </label>
    </div>
  );
}

export default App;
