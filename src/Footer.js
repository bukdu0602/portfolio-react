import { useState, useEffect } from "react";

function Footer() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color === "default") {
      setColor("");
    } else if (color === "dark") {
      setColor("#1E1E1E");
    } else if (color === "pink") {
      setColor("pink");
    } else if (color === "blue") {
      setColor("lightblue");
    }
  }, []);
  return (
    <div className="footer">
      <p style={{ backgroundColor: color }}>&copy; Ryan Lim 2022</p>
    </div>
  );
}

export default Footer;
