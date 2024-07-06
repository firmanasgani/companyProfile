export default function Header() {
  return (
    <header>
      <div className="header">
        <a href="#home">Home</a>
        <a href="#ourvids">Our Vids</a>
        <a href="#ceritanya">Ceritanya</a>
        <a href="#about">About</a>
      </div>
      <div style={{ padding: "20px" }} className="banner">
        <h1>Welcome to Our Website</h1>
        <p className="text-title">We are absurd in our way</p>
        <p style={{marginTop: "20px"}}>
          <a href="https://www.youtube.com/channel/UCjtsahDG-ST5nxvq4iroXlw" target="_blank" className="btn-cta">Visit our channel</a>
        </p>
      </div>
    </header>
  );
}
