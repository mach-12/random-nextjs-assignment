"use client";
import signUp from "@/src/firebase/auth/signup";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Attempt to sign up with provided email and password
    const { result, error } = await signUp(email, password);

    if (error) {
      // Display and log any sign-up errors
      console.log(error);
      return;
    }

    // Sign up successful
    console.log(result);

    // Redirect to the admin page
    router.push("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <Card className="">
      <CardBody>
        <form onSubmit={handleForm} className="">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <div className="mb-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-6">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              color="primary"
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>


  </div>
  );
}

export default Page;
