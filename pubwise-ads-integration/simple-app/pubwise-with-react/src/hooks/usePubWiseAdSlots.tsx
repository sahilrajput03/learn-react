import { useEffect, useState } from "react";
import useLoadScriptsInOrder from "./useLoadScriptsInOrder";

const usePubWiseAdSlots = () => {
  // Load scripts required for required for PubWise Adslots
  const isScriptsLoaded = useLoadScriptsInOrder([
    "_SCRIPT_1_",
    "_SCRIPT_2_",
    "_SCRIPT_3_",
  ]);

  const [isSlotsDefined, setIsSlotsDefined] = useState(false);

  useEffect(() => {
    if (!isScriptsLoaded) return;

    // Run code after loading all the required pubwise scripts
    window.gptadslots = [];
    window.googletag ||= { cmd: [] };

    window.googletag.cmd.push(function () {
      //   SLOT 1: AD_UNIT_ID_1
      // ===========================
      window.gptadslots["AD_UNIT_ID_1"] = window.googletag
        .defineSlot(
          "/SOME_ID_HERE/AD_UNIT_ID_1",
          [
            [320, 50],
            [300, 250],
          ],
          "AD_UNIT_ID_1"
        )
        .addService(window.googletag.pubads());

      // SLOT 2: AD_UNIT_ID_2
      // ===========================
      window.gptadslots["AD_UNIT_ID_2"] = window.googletag
        .defineSlot(
          "/SOME_ID_HERE/AD_UNIT_ID_2",
          [
            [320, 50],
            [300, 250],
          ],
          "AD_UNIT_ID_2"
        )
        .addService(window.googletag.pubads());

        // MORE SLOTS HERE FOR MORE AD_UNITS
        // .....
        
      // ENBLE GOOGLE TAG SERVICES
      window.googletag.enableServices();

      // Mark ad-slots as ready so we can try now load ads for any of those
      setIsSlotsDefined(true);
    });
  }, [isScriptsLoaded]);

  return isSlotsDefined;
};

export default usePubWiseAdSlots;
