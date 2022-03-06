import headshot from "./images/Ryan_Headshot.png";

function LeftPane() {
  return (
    <div className="leftPane">
      <h1>Ryan Lim</h1>
      <img src={headshot} alt="Ryan" />
      <p>
        Hi My name is Ryan Lim, and I am a Junior software developer. Welcome to
        my personal page.
      </p>
      <div className="socialMedia">
        <a
          href="https://linkedin.com/in/ryan-lim-b34921202"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://www.instagram.com/bukdu0602"
          className="fa fa-instagram"
        ></a>
        <a href="https://github.com/bukdu0602" className="fa fa-github"></a>
        <a href=" mailto: ryan.hyun@gmail.com" className="fa fa-envelope"></a>
      </div>
    </div>
  );
}

export default LeftPane;
