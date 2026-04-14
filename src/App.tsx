import { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import LivePreview from "./components/LivePreview";
import { normaliseHex } from "./utils/colorUtils";
import ContrastChecker from "./components/ContrastChecker";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import Header from "./components/Header";

function App() {
    const [textInput, setTextInput] = useState("#000000");
    const [backgroundInput, setBackgroundInput] = useState("#ffffff");

    const textColor = normaliseHex(textInput) || "#000000";
    const backgroundColor = normaliseHex(backgroundInput) || "#ffffff";

    return (
        <>
            <SkipLink />
            <Header />
            <main
                id="main-content"
                className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
            >
                <ColorPicker
                    textValue={textInput}
                    backgroundValue={backgroundInput}
                    onTextChange={setTextInput}
                    onBackgroundChange={setBackgroundInput}
                />

                <ContrastChecker
                    textHex={textColor}
                    backgroundHex={backgroundColor}
                />

                <LivePreview
                    textHex={textColor}
                    backgroundHex={backgroundColor}
                />
            </main>
            <Footer />
        </>
    );
}

export default App;
