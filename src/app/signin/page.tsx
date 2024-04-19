"use client";
import signIn from "@/src/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, CardBody, Input } from "@nextui-org/react";

function Page(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Attempt to sign in with provided email and password
    const { result, error } = await signIn(email, password);

    if (error) {
      // Display and log any sign-in errors
      console.log(error);
      return;
    }

    // Sign in successful
    console.log(result);

    // Redirect to the admin page
    // Typically you would want to redirect them to a protected page an add a check to see if they are admin or
    // create a new page for admin
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
