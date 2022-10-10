import AllUsers from 'AllUsers';
import AddUser from 'AddUser';
import EditUser from 'EditUser.jsx';
import NavBar from 'NavBar';
import NotFound from 'NotFound'; 
import CodeForInterview from 'CodeForInterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForInterview /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
