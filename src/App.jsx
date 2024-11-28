import Dashboard from './components/dashboard'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import ThemeContextProvider from './context/ThemeContextProvider'

function App() {

  return (
    <ThemeContextProvider>
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white'>
        <Navbar />
          <Dashboard />
      </div>
    </div>
    </ThemeContextProvider>
  )
}

export default App 