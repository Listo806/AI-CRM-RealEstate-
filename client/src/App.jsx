// client/src/App.jsx
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      {/* Your page sections go here */}
      <main>
        {/* example anchors for the header links */}
        <section id="features" style={{padding: "80px 20px"}}>Features section</section>
        <section id="pricing" style={{padding: "80px 20px"}}>Pricing section</section>
        <section id="get-started" style={{padding: "80px 20px"}}>Get Started section</section>
      </main>
    </>
  );
}
