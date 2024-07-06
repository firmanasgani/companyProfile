import { Typewriter } from "react-simple-typewriter";

export default function Content() {
  return (
    <div className="content">
        <h1 style={{ paddingTop: '5rem', fontWeight: 'normal' }}>
            Hi, <br />Welcome to 
        {' '}
        <span style={{ color: 'blue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Pasar malam?', 'Kamar mandi?', 'Reseller?', 'CITG!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
}
