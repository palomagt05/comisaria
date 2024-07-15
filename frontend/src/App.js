import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginView from './view/LoginView';
import LoginViewModel from './viewmodel/LoginViewModel';
import AdminView from './view/AdminView';  // Asegúrate de crear estos componentes
import PoliceView from './view/PoliceView';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserView from './view/AddUserView';
import AddPoliView from './view/AddPoliView';
import AddArmaView from './view/AddArmaView';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginView />} />
                <Route path="/admin" element={<ProtectedRoute element={<AdminView />} />} />
                <Route path="/police" element={<ProtectedRoute element={<PoliceView />} />} />
                <Route path="/admin/add-user" element={<ProtectedRoute element={<AddUserView />}/>} />
                <Route path="/admin/add-poli" element={<ProtectedRoute element={<AddPoliView />}/>} />
                <Route path="/admin/add-arma" element={<ProtectedRoute element={<AddArmaView />}/>} />
            </Routes>
        </Router>
    );
};

export default App;
