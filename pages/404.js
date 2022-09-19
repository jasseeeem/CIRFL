import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="text-center mt-56">
      <h1 className="text-lg">Page under development</h1>
      <Link href="/">
        <a className="text-blue-600 underline">Go back home</a>
      </Link>
    </div>
  );
}
