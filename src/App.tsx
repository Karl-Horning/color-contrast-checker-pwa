import { useState } from "react";
import "./App.css";
import ColourPicker from "./components/ColourPicker";
import LivePreview from "./components/LivePreview";
import { normaliseHex } from "./utils/colourUtils";
import ContrastChecker from "./components/ContrastChecker";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import Header from "./components/Header";

function App() {
    const [textInput, setTextInput] = useState("#000000");
    const [backgroundInput, setBackgroundInput] = useState("#ffffff");

    const textColour = normaliseHex(textInput) || "#000000";
    const backgroundColour = normaliseHex(backgroundInput) || "#ffffff";

    return (
        <>
            <SkipLink />
            <Header />
            <main
                id="main-content"
                className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 xl:grid-cols-3"
            >
                <ColourPicker
                    textValue={textInput}
                    backgroundValue={backgroundInput}
                    onTextChange={setTextInput}
                    onBackgroundChange={setBackgroundInput}
                />

                <ContrastChecker
                    textHex={textColour}
                    backgroundHex={backgroundColour}
                />

                <LivePreview
                    textHex={textColour}
                    backgroundHex={backgroundColour}
                />
            </main>
            <Footer />
        </>
    );
}

export default App;
