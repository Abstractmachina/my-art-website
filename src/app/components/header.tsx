"use client";

const Header = () => {
  return (
    <header className="flex">
      <span className="bg-blue-100">taole chen</span>
        <ul className="flex flex-row gap-2 w-full bg-red-100 text-lg">
          <li>Work</li>
          <li>Blog</li>
          <li>About</li>
          <li>Prints</li>
        </ul>
    </header>
  )
}

export default Header;