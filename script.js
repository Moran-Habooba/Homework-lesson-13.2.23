let SamsungGalaxyS23 = {
  NETWORK: {
    Technology: "Gsm /CDMA/LTE/5G/HSPA",
  },
  LAUNCH: {
    Announced: "2023, February 01",
  },
  BODY: {
    Dimensions: "146.3 x 70.9 x 7.6 mm (5.76 x 2.79 x 0.30 in)",
    Weight: "168 g (5.93 oz)",
    Build:
      "Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus 2), aluminum frame",
    SIM: "Nano-SIM and eSIM or Dual SIM (2 Nano-SIMs and eSIM, dual stand-by) IP68 dust/water resistant (up to 1.5m for 30 mins)  ",
  },
  DISPLAY: {
    Type: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (HBM), 1750 nits (peak)",
    Size: "6.1 inches, 90.1 cm",
    Resolution: "1080 x 2340 pixels, 19.5:9 ratio",
    Protection: "Corning Gorilla Glass Victus 2 Always-on display",
  },
  PLATFORM: {
    OS: "Android 13, One UI 5.1",
    Chipset: "Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)",
    CPU: "Octa-core (1x3.36 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510)",
    GPU: "Adreno 740",
  },
  MEMORY: {
    Card_Slot: "no",
    Internal: "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM ",
  },
  MAIN_CAMERA: {
    Triple:
      "50 MP, f/1.8, 24mm (wide), 1/1.56, 1.0µm, Dual Pixel PDAF OIS / 10 MP, f/2.4, 70mm (telephoto), 1/3.94, 1.0µm, PDAF, OIS, 3x optical zoom/12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55 1.4µm, Super Steady video",
    Features: "LED flash, auto-HDR, panorama",
    Video:
      "	8K@24/30fps, 4K@30/60fps, 1080p@30/60/240fps, 1080p@960fps, HDR10+, stereo sound rec., gyro-EIS",
  },
  SELFIE_CAMERA: {
    single: "	12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF",
    Features: "Dual video call, Auto-HDR, HDR10+",
    Video: "4K@30/60fps, 1080p@30fps",
  },
  SOUND: {
    Loudspeaker: "Yes, with stereo speakers",
  },
  COMMS: {
    WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct",
    Bluetooth: "5.3, A2DP, LE",
    Positioning: "GPS, GLONASS, BDS, GALILEO",
    NFC: "Yes",
    radio: "nO",
    usb: "USB Type-C 3.2, OTG",
  },
  BATTERY: {
    Type: "Li-Ion 3900 mAh, non-removable",
    Charging:
      "25W wired, PD3.0, 50% in 30 min (advertised)" +
      "   " +
      "15W wireless (Qi/PMA) " +
      "  " +
      "4.5W reverse wireless",
  },
  MISC: {
    Color: "Phantom Black",
  },
};
console.log(SamsungGalaxyS23);

function changecolor() {
  SamsungGalaxyS23.MISC.Color = "pink";
}
function showcolor() {
  console.log(SamsungGalaxyS23.MISC.Color);
}
function changtofirstcolor() {
  SamsungGalaxyS23.MISC.Color = "Phantom Black";
}
