import React from 'react'

function Footer() {
  return (
    <footer id="footerType" className="footer__wrap section nexon gray">
    <h2 className="ir_so">푸터 영역</h2>
    <div className="footer__inner container">
      <div className="footer__menu">
        <div>
          <h3>layout</h3>
          <ul>
            <li>
              <a href="/">레이아웃 유형01</a>
            </li>
            <li>
              <a href="/">레이아웃 유형02</a>
            </li>
            <li>
              <a href="/">레이아웃 유형03</a>
            </li>
            <li>
              <a href="/">레이아웃 유형04</a>
            </li>
            <li>
              <a href="/">레이아웃 유형05</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>header</h3>
          <ul>
            <li>
              <a href="/">메뉴 유형01</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>main</h3>
          <ul>
            <li>
              <a href="/">이미지 유형01</a>
            </li>
            <li>
              <a href="/">동영상 유형02</a>
            </li>
            <li>
              <a href="/">슬라이드 유형03</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>content</h3>
          <ul>
            <li>
              <a href="/">텍스트 유형01</a>
            </li>
            <li>
              <a href="/">이미지 유형02</a>
            </li>
            <li>
              <a href="/">이미지/텍스트03</a>
            </li>
            <li>
              <a href="/">카드 유형04</a>
            </li>
            <li>
              <a href="/">배너 유형05</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>footer</h3>
          <ul>
            <li>
              <a href="/">컨택트 유형01</a>
            </li>
            <li>
              <a href="/">푸터 유형02</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>site</h3>
          <ul>
            <li>
              <a href="/">웹표준 사이트</a>
            </li>
            <li>
              <a href="/">반응형 사이트</a>
            </li>
            <li>
              <a href="/">패럴랙스 사이트</a>
            </li>
            <li>
              <a href="/">포트폴리오 사이트</a>
            </li>
          </ul>
        </div>
      </div>
      <address className="footer__right">
        ©2022 webstroyboy. All rights reserved.
      </address>
    </div>
  </footer>
  );
};

export default Footer;