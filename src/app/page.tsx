import { Button, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="">
      <Link href="/signup">
        <Button color="primary">Sign Up</Button>
      </Link>
      <Link href="/signin">
        <Button color="primary">Sign In</Button>
      </Link>
    </main>
  );
}
