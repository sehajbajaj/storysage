import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExclamationTriangleIcon, RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [registerMsg, setRegisterMsg] = useState("");

  const handleRegisterInput = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const validateRegisterForm = () => {
    const { name, password, email } = registerData;
    if (!name || !password || !email) {
      setRegisterError("Please fill in all the fields");
      return false;
    }
    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setRegisterError("Invalid email address");
      return false;
    }
    return true;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!validateRegisterForm()) return;

    const url = "http://localhost:8083/auth/register";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    };

    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      console.log(response);
      if (response.ok) {
        console.log(jsonData);
        setRegisterMsg("Registration successful");
      } else {
        throw new Error(jsonData.errorMsg || "Failed to register");
      }
    } catch (error) {
      console.log("error");
      setRegisterError(error.errorMsg);
    }
  };

  return (
    <>
      <form onSubmit={handleRegisterSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Join StorySage: Start Exploring Your Next Great Book Today!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Username</Label>
              <Input
                id="name"
                name="name"
                value={registerData.name}
                onChange={handleRegisterInput}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={registerData.password}
                onChange={handleRegisterInput}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={registerData.email}
                onChange={handleRegisterInput}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
      <br />
      {registerError && (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{registerError}</AlertDescription>
        </Alert>
      )}
      {registerMsg && (
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle></AlertTitle>
          <AlertDescription>{registerMsg}</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default Register;
