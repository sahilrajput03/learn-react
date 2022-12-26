import { useEffect, useState } from "react";
import useLoadScriptsInOrder from "./useLoadScriptsInOrder";

const usePubWiseAdSlots = () => {
  // Load scripts required for required for PubWise Adslots
  const isScriptsLoaded = useLoadScriptsInOrder([
    "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
    "//fdyn.pubwise.io/script/786ead05-a265-491d-aeb6-cdbb8ad4cac7/v3/dyn/pre_pws.js?type=web",
    "//fdyn.pubwise.io/script/786ead05-a265-491d-aeb6-cdbb8ad4cac7/v3/dyn/pws.js?type=web",
  ]);

  const [isSlotsDefined, setIsSlotsDefined] = useState(false);

  useEffect(() => {
    if (!isScriptsLoaded) return;

    // Run code after loading all the required pubwise scripts
    window.gptadslots = [];
    window.googletag ||= { cmd: [] };

    window.googletag.cmd.push(function () {
      //   SLOT 1: Event-detail_web
      // ===========================
      window.gptadslots["Event-detail_web"] = window.googletag
        .defineSlot(
          "/22756418014/Event-detail_web",
          [
            [320, 50],
            [300, 250],
          ],
          "Event-detail_web"
        )
        .addService(window.googletag.pubads());

      // SLOT 2: Timeline_web
      // ===========================
      window.gptadslots["Timeline_web"] = window.googletag
        .defineSlot(
          "/22756418014/Timeline_web",
          [
            [320, 50],
            [300, 250],
          ],
          "Timeline_web"
        )
        .addService(window.googletag.pubads());

      // ENBLE GOOGLE TAG SERVICES
      window.googletag.enableServices();

      // Mark ad-slots as ready so we can try now load ads for any of those
      setIsSlotsDefined(true);
    });
  }, [isScriptsLoaded]);

  return isSlotsDefined;
};

export default usePubWiseAdSlots;
