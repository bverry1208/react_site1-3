import React from 'react'

const card = [
    {
      title: "웹표준 사이트 만들기1",
      image: "https://bverry1208.github.io/react_image/card_bg01.jpg",
      desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.",
      btn: "더 자세히 보기",
    },
    {
      title: "react 사이트 만들기2",
      image: "https://bverry1208.github.io/react_image/card_bg02.jpg",
      desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.",
      btn: "더 자세히 보기",
    },
    {
      title: "vue 사이트 만들기3",
      image: "https://bverry1208.github.io/react_image/card_bg03.jpg",
      desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.",
      btn: "더 자세히 보기",
     }
]


function CardInfo({title, image, desc, btn}) {
  return (
    <article className="card">
        <figure className="card__header">
          <img
            className="img"
            src={image}
            alt="이미지1"
          />
        </figure>
        <div className="card__body">
          <h3 className="title">{title}</h3>
          <p className="desc">
            {desc}
          </p>
          <a className="btn" href="/">
            {btn}
            <svg
              width="52"
              height="8"
              viewBox="0 0 52 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                fill="#5B5B5B"
              />
            </svg>
          </a>
        </div>
      </article>
  )
}


function Card() {
  return (
    <section id="cardType" className="card__wrap section nexon">
    <h2>웹스토리보이 강의</h2>
    <p>
      웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.
      <br />
      Gmarket Sans Light 22px 150% #67778A
    </p>
    <div className="card__inner container">

      {card.map((txt) => (
        <CardInfo
        key={txt.title}
        title={txt.title}
        image={txt.image}
        desc={txt.desc}
        btn={txt.btn}
        />
      ))}

    </div>
  </section>
  );
};

export default Card;