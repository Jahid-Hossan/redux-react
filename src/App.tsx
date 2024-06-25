

function App() {


  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex gap-4  items-center border border-purple-300 p-10 rounded-md bg-purple-50">
        <button className="bg-green-700 text-white px-6 py-4 rounded-md">Increment</button>
        <h2 className="text-5xl">0</h2>
        <button className="bg-red-700 text-white px-6 py-4 rounded-md">Decrement</button>
      </div>
    </div>
  )
}

export default App
