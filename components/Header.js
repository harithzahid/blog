import Link from "next/link";

export default function Header(props) {
  return (
    <header className="header">
      <nav
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/">
          <h1>{props.siteTitle}</h1>
        </Link>
      </nav>
      <style jsx>
        {`
          h1 {
            font-size: 25px;
            padding: 20px;
          }
        `}
      </style>
    </header>
  );
}
