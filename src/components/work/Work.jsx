import { useState } from "react";
import "./work.scss"

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        icon: "./assets/avatar.png",
        title: "A little about myself",
        desc:
          "Hello, my name is Jandre Erasmus. I am currently an Honours student at North-west University. I started my developer journey in 2018 and loved every minute of it. I'm quietly confidently, naturally curious, and perpetually working on improving my craft as a developer.",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: "./assets/avatar.png",
        title: "History",
        desc:
          "I matriculated from Bothaville High school in 2016. I played for the school first-team cricket and golf, I also captained the golf team and I was selected for the North Free state cricket team. I participated in debates and olympiads.",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        icon: "./assets/avatar.png",
        title: "Degree in Information Technology",
        desc:
          "In 2020 I completed my degree with distinction in Information Technology at the North-West University. During my time at the university, I was tasked with multiple group projects. These projects have helped me grow personally and helped develop my leadership skills.",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
      {
        id: "4",
        icon: "./assets/avatar.png",
        title: "Present",
        desc:
          "I am currently doing my Honors in Computer Science and Information Technology at the North-West University. In my Honors year, I received a project to develop a protocol to help the university in maintaining course integrity because of the effect Covid-19 had on the teaching and learning environment.",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };


    return (
        <div className="works" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
