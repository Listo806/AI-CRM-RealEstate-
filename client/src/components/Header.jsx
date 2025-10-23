
// client/src/components/Header.jsx
export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <div className="brand">
          <img src="/images/brand/ai_house_logo.png" alt="Listo Qasa" />
          <span>LISTO QASA</span>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a className="cta" href="#get-started">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
