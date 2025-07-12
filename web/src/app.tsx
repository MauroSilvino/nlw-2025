
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CreateRoom } from './pages/create-rooms'
import { Room } from './pages/rooms'
export function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client = {queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={ <CreateRoom /> } index />
          <Route element={ <Room /> } path="/room/:roomId" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

