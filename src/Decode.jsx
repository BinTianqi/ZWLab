import writeTextToClipboard from './utils.js'
import { decode } from './zero-width-lib.js'
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/lock-open.js';
export default function Decode() {
    return (
        <div>
            <h1>Decode</h1>
            <mdui-text-field label="Input" autosize min-rows="2" id="decode_input"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button variant="text" onClick={() => clear()}>
                    Clear
                    <mdui-icon-clear slot="icon"></mdui-icon-clear>
                </mdui-button>
                <mdui-button onClick={() => decodeText()}>
                    Decode
                    <mdui-icon-lock-open slot="icon"></mdui-icon-lock-open>
                </mdui-button>
            </div>
            <mdui-text-field readonly label="Visible text" autosize min-rows="2" id="decode_visible"></mdui-text-field>
            <mdui-text-field readonly label="Hidden text" autosize min-rows="2" id="decode_hidden"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button onClick={() => writeTextToClipboard(document.getElementById("decode_visible").value)}>
                    Copy visible
                    <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
                </mdui-button>
                <mdui-button onClick={() => writeTextToClipboard(document.getElementById("decode_hidden").value)}>
                    Copy hidden
                    <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
                </mdui-button>
            </div>
        </div>
    )
}

function decodeText() {
    const input = document.getElementById("decode_input").value
    const decoded = decode(input)
    document.getElementById("decode_visible").value = decoded.vis
    document.getElementById("decode_hidden").value = decoded.hid
}

function clear() {
    document.getElementById("decode_input").value = ""
    document.getElementById("decode_visible").value = ""
    document.getElementById("decode_hidden").value = ""
}
