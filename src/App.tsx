import React, { useState } from "react"
import { AuthProvider } from "./context/AuthProvider"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
          path="/profile"
          element={
            <ProtectedLayout>
              <Profile />
            </ProtectedLayout>
          }
        />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

// <Route element={<ProtectedLayout />}>
//             <Route path="/profile" element={<Profile />} />
//           </Route>