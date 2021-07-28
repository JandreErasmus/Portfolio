import "./skills.scss"

export default function Skills() {

    const data = [
        {
          id: 1,

          title: "Programming Languages",
          img:
            "assets/programmingLang.png",
          desc:
            "I have experience in the following programming languages. C++, Java, Python, C#, CSS, HTML, JavaScript, SQL",
        },
        {
          id: 2, 
          title: "Software Applications",
          img:
            "assets/softwareApp.png",
          desc:
            "I have used the following software applications:  Google Suite, Visual Studio, Visual Studio code, MySQL, Oracle, SSMS",
          featured: false,
        },
        {
          id: 3,
          title: "Industry Skills",
          img:
            "assets/industrySkills.png",
          desc:
            "I have prior experience with Budget planning, risk management, Project planning, task managment, I have used the following methadologies: SCRUM, AGILE. ",
        },
        {
            id: 4,
            title: "Soft Skills",
            img:
              "assets/softSkills.png",
            desc:
              "I have the following soft skills: Integrity, Dependability, Effective communication, Open-mindedness, Teamwork, Creativity, Promblem-Solving, Critical thinking, Adaptability, Willingness to learn",
        },
      ];

    return (
        <div className="testimonials" id="skills">
      <h1>Technical Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
              <h4>{d.title}</h4>
            <div className="top">
              
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
            <img
                className="user"
                src={d.img}
                alt=""
              />
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
    
}
