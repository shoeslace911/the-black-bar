export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 text-5xl bg-slate-400 p-5 justify-evenly">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#cocktails">
          <li>Cocktails</li>
        </a>
      </ul>
    </nav>
  );
}
