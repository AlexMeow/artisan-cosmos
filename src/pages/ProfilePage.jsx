import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please log in first!",
      });
      navigate("/login");
    } else {
      navigate(`/artist/${jwtDecode(localStorage.getItem("jwt")).id}`);
    }

  }, [])

  return (
    <div>
      <Navbar />
      {/* TBD: ProfilePageBody */}
      <Footer />
    </div>
  );
};

export default ProfilePage;