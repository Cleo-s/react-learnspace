import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HomePage, Cars, RQCars } from './components';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/cars'>Cars Page</Link></li>
          <li><Link to='/rq-cars'>RQ Cars Page</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/rq-cars' element={<RQCars />} />
      </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
    </QueryClientProvider>
  );
}

export default App;