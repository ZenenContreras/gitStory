import toast from 'react-hot-toast'



function App() {
const notify = () => toast('Here is a notification')


  return (
      <button onClick={notify}> Button </button>
  )
}

export default App
