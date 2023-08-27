import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Monster
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 rounded-md">
          <li>
            <Link href="/config">Config</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-md">
                <li>
                  <a>Config</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
