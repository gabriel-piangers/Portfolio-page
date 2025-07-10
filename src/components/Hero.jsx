import heroImg from "../assets/hero-img.jpg";

export function Hero() {
  return (
    <header className="hero-section">
      <div className="hero-text-container">
        <h1 className="hero-title">Gabriel Piangers</h1>
        <p className="hero-p">
          Fullstack Software Developer
        </p>
      </div>
      <div className="hero-img-container">
        <img src={heroImg} className="hero-img" />
      </div>
    </header>
  );
}
