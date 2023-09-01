import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center navbar bg-neutral text-neutral-content">
      <Link className="font-bold text-slate-100" href={"/"}>
        My Todo App
      </Link>
      <Link className="btn text-slate-100 btn-outline p-2" href={"/topics/add"}>
        Add Topic
      </Link>
    </nav>
  );
}
