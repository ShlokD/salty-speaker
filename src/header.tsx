import { Link } from "preact-router";

const Header = () => {
  return (
    <header className="flex bg-purple-900 text-yellow-600 w-full z-10 items-center justify-between p-4">
      <Link href="/">
        <div className="flex gap-2 items-center pl-6">
          <img src="/logo.png" height={64} width={64} alt="" />
          <h1 className="font-bold text-2xl">SALTY</h1>
        </div>
      </Link>

      <div className="flex gap-6 text-lg pr-6">
        <Link href="/shop">SHOP</Link>
      </div>
    </header>
  );
};

export default Header;
