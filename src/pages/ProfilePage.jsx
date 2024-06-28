import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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
      navigate(`/artist/${localStorage.getItem("id")}`);
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