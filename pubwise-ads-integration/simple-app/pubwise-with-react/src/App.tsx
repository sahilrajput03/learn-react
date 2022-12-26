import usePubWiseAdSlots from "./hooks/usePubWiseAdSlots";
import PubWiseAd from "./components/PubWiseAd";

function App() {
  const isSlotsDefined = usePubWiseAdSlots();

  return (
    <div className="App">
      <h1>PubWise Ad Integration Sample with REACT</h1>
      <div>
        Note: You must browse this page via <code>slasher.tv:anyPort</code> only. You can do this by setting your
        <code>/etc/host</code> file to an entry like <code>127.0.0.1 slasher.tv</code>.
      </div>

      <h2>Ad: Event-detail_web</h2>
      {isSlotsDefined && <PubWiseAd id="Event-detail_web" />}

      <h2>Ad: Timeline_web</h2>
      {isSlotsDefined && <PubWiseAd id="Timeline_web" />}
      {/* {isSlotsDefined && <PubWiseAd id="bad ad" />} */}
    </div>
  );
}


export default App;
