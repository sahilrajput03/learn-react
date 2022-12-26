import { useEffect } from "react";

declare global {
  interface Window {
    pubwise: any;
    googletag: any;
    gptadslots: any;
  }
}
interface RenderAdPropsType {
  id: string;
}

const RenderAd = ({ id }: RenderAdPropsType) => {
  useEffect(() => {
    if (!window.gptadslots[id])
      console.error(
        "\n\n------Slasher LOG------\n\n: Please define an ad-slot in `usePubWiseAdSlots` hook to use this ad:, ",
        id,
        "\n\n\n\n\n"
      );

    if (typeof window.pubwise != "undefined" && window.pubwise.enabled === true) {
      window.pubwise.que.push(function () {
        window.pubwise.renderAd(id);
      });
    } else {
      window.googletag.cmd.push(function () {
        window.googletag.display(id);
        window.googletag.pubads().refresh([window.gptadslots[id]]);
      });
    }
  }, []);

  return <div id={id}></div>;
};

export default RenderAd;
