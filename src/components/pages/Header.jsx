import React from 'react'

function Header(props) {
  return (
    <header id="headerType" className={props.fonts}>
    <div className="header__inner">
      <h1 className="header__logo">
        <a href="/">
          bverry <em>site</em>
        </a>
      </h1>
      <nav className="header__menu">
        <h2 className="ir_so">메인 메뉴</h2>
        <ul>
          <li>
            <a href="/">header</a>
          </li>
          <li>
            <a href="/">slide</a>
          </li>
          <li>
            <a href="/">images</a>
          </li>
          <li>
            <a href="/">content</a>
          </li>
          <li>
            <a href="/">footer</a>
          </li>
        </ul>
      </nav>
      <div className="header__member">
        <a href="/">login</a>
      </div>
    </div>
    </header>
  );
};

export default Header;