import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log(data);

  const login = async (e) => {
    e.preventDefault();
    const response = await axios({
        method: 'POST',
        url: 'http://200.100.0.59:4000/api/v1/auth/login',
        data: data,
    })
    console.log(response);
    if (response.status === 200) {
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", data.username);
      navigate("/dashboard");
    } else if(response.status === 400) {
        Swal.fire("Error!", "Username or Password incorret!", "error");
    }
  };
  return (
    <div className="w-screen h-screen bg-[#03C988] flex justify-center items-center">
      <div className="md:w-[25vw] bg-white p-10 rounded-xl shadow-lg shadow-slate-900/20">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={login}>
          <div className="py-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              placeholder="Masukan Username"
              id="username"
              name="username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div className="py-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="*********"
              id="password"
              name="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <Button
            classname="bg-yellow-300 mt-10 w-full py-2 rounded-md font-bold"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// export default function LoginPage() {
//     const navigate = useNavigate()
//     const [loginPage, setLoginPage] = useState(true);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     console.log(password, 'xixixi');

//     const handlePage = () => {
//         setLoginPage(!loginPage);
//     };
//     const handleUsername = (e) => {
//         setUsername(e.target.value);
//     };
//     const login = async () => {
//         const response = await axios.post(`http://200.100.0.59:4000/api/v1/auth/login`, { username: username, password: password });
//         if (response.status === 200) {
//             const token = response.data.data.token
//             localStorage.setItem('token', token)
//             localStorage.setItem('username', username);
//             navigate('/dashboard')
//         } else {
//             alert('username atau password anda salah')
//         }
//     };
//     return (
//         <>
//             {loginPage ? (
//                 <div>
//                     <input onChange={handleUsername} placeholder="username" />
//                     <input onChange={(e) => setPassword(e.target.value)} placeholder="password" />
//                     <button onClick={() => login()}>login</button>
//                 </div>
//             ) : (
//                 <div>
//                     <input placeholder="first name" />
//                     <input placeholder="last name" />
//                     <input placeholder="email" />
//                     <input placeholder="password" />
//                 </div>
//             )}
//             <div>
//                 <button onClick={handlePage}>{loginPage ? 'register' : 'login'}</button>
//             </div>
//         </>
//     );
// }
