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

      <h2>Ad: AD_UNIT_ID_1</h2>
      {isSlotsDefined && <PubWiseAd id="AD_UNIT_ID_1" />}

      <h2>Ad: AD_UNIT_ID_2</h2>
      {isSlotsDefined && <PubWiseAd id="AD_UNIT_ID_2" />}
      {/* {isSlotsDefined && <PubWiseAd id="bad ad" />} */}
    </div>
  );
}


export default App;
