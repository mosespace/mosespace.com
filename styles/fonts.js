import localFont from "next/font/local";
import { Inter, Lora, Raleway } from "next/font/google";

// defining the your variable fonts

const lora = Lora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: "400" });
// const sourceCodePro700 = Source_Sans_3({ weight: "700" });

// defining a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const myFont = localFont({
  src: "../used-fonts/WalkwayBlack.woff2",
  weight: "700",
  style: "bold",
});

const stretchPro = localFont({
  src: "../used-fonts/StretchPro.otf",
  weight: "900",
  style: "bold",
});

const subfont = localFont({
  src: "../used-fonts/my-font.ttf",
});

export { inter, lora, myFont, subfont, stretchPro, raleway };
