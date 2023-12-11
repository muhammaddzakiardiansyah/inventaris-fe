import axios from "axios";
import { useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios({
        method: "POST",
        url: "http://200.100.0.59:4000/api/v1/auth/login",
        data: data,
      });
      Swal.fire("Authentication successfuly", "Berhasil Login", "success");
      localStorage.setItem('xixixi', result.data.data.token);
      setTimeout(() => {
        window.location.href = "/data-semua-barang";
      }, 2000);
    } catch (error) {
        Swal.fire("Failed!", error.message, "error");
        console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen bg-[#03C988] flex justify-center items-center">
      <div className="md:w-[25vw] bg-white p-10 rounded-xl shadow-lg shadow-slate-900/20">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} method="post">
          <div className="py-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              placeholder="Masukan Username"
              id="username"
              name="username"
              onChange={(e) => setData({...data, username: e.target.value})}
            />
          </div>
          <div className="py-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="*********"
              id="password"
              name="password"
              onChange={(e) => setData({...data, password: e.target.value})}
            />
          </div>
          <Button
            type="submit"
            classname="bg-yellow-300 mt-10 w-full py-2 rounded-md font-bold"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
