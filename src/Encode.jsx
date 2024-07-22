import writeTextToClipboard from './utils.js'
import { encode } from './zero-width-lib.js'
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/lock--outlined.js';

export default function Encode() {
    return (
        <div>
            <h1>Encode</h1>
            <mdui-text-field label="Visible text" autosize min-rows="2" id="encode_visible"></mdui-text-field>
            <mdui-text-field label="Hidden text" autosize min-rows="2" id="encode_hidden"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button variant="text" onClick={() => clear()}>
                    Clear
                    <mdui-icon-clear slot="icon"></mdui-icon-clear>
                </mdui-button>
                <mdui-button onClick={() => encodeText()}>
                    Encode
                    <mdui-icon-lock--outlined slot="icon"></mdui-icon-lock--outlined>
                </mdui-button>
            </div>
            <mdui-text-field readonly label="Output" autosize min-rows="2" id="encode_output"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button onClick={() => writeTextToClipboard(document.getElementById("encode_output").value)}>
                    Copy
                    <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
                </mdui-button>
            </div>
        </div>
    )
}


function encodeText() {
    const visible = document.getElementById("encode_visible").value
    const hidden = document.getElementById("encode_hidden").value
    document.getElementById("encode_output").value = encode(visible, hidden);
}

function clear() {
    document.getElementById("encode_visible").value = ""
    document.getElementById("encode_hidden").value = ""
    document.getElementById("encode_output").value = ""
}
