import React from 'react'

const info = [
  {
    title: "유튜버 웹보이",
    desc: "더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
    link: "youtube.com/c/Webstoryboy",
    sub: "배너 영역01"
  }
]

function Banner() {
  return (
    <>
        <section id="bannerType" className="banner__wrap section gmarket">
          <h2 className="ir_so">배너 영역</h2>
          <div className="banner__inner">
            <h3 className="banner__title">{info[0].title}</h3>
            <p className="banner__desc">
            {info[0].desc}
              <a href="/">{info[0].link}</a>
            </p>
            <span className="banner__sub">{info[0].sub}</span>
          </div>
        </section>
    </>
  )
}

export default Banner;