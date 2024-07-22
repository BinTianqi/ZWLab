import writeTextToClipboard from './utils.js';
import 'mdui/components/button.js';
import 'mdui/components/text-field.js';
import 'mdui/components/collapse.js';
import 'mdui/components/collapse-item.js';
import 'mdui/components/checkbox.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/remove.js';
import '@mdui/icons/expand-circle-down--outlined.js';
import 'mdui/components/list-item.js';
import {useEffect} from "react";

export default function Remove() {
    useEffect(() => {
        setTimeout(function() {
            document.getElementById("remove_zw_collapse").style['max-height'] = '20rem'
        }, 200)
    }, [])
    return (
        <div>
            <h1>Remove</h1>
            <mdui-text-field label="Input" autosize min-rows="4" id="remove_input"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button variant="text" onClick={() => clear()}>
                    Clear
                    <mdui-icon-clear slot="icon"></mdui-icon-clear>
                </mdui-button>
                <mdui-button onClick={() => remove()}>
                    Remove
                    <mdui-icon-remove slot="icon"></mdui-icon-remove>
                </mdui-button>
            </div>
            <mdui-collapse id="remove_zw_collapse">
                <mdui-collapse-item>
                    <mdui-list-item slot="header">
                        <mdui-icon-expand-circle-down--outlined slot="icon"></mdui-icon-expand-circle-down--outlined>
                        Remove ZW chars
                    </mdui-list-item>
                    <mdui-checkbox checked id="remove_zw_zwsp">ZW space</mdui-checkbox>
                    <mdui-checkbox checked id="remove_zw_zwnbsp">ZW no-break space</mdui-checkbox>
                    <mdui-checkbox checked id="remove_zw_zwnj">ZW non-joiner</mdui-checkbox>
                    <mdui-checkbox checked id="remove_zw_zwj">ZW joiner</mdui-checkbox>
                    <mdui-checkbox checked id="remove_zw_ltr">LTR mark</mdui-checkbox>
                    <mdui-checkbox checked id="remove_zw_rtl">RTL mark</mdui-checkbox>
                </mdui-collapse-item>
            </mdui-collapse>
            <mdui-text-field readonly label="Output" autosize min-rows="4" id="remove_output"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button onClick={() => writeTextToClipboard(document.getElementById("remove_output").value)}>
                    Copy
                    <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
                </mdui-button>
            </div>
            <p id="remove_stat"></p>
        </div>
    )
}

function remove() {
    const input = document.getElementById("remove_input").value
    const zwChars = Array()
    if(document.getElementById("remove_zw_zwsp").checked) { zwChars.push('\u200b') }
    if(document.getElementById("remove_zw_zwnbsp").checked) { zwChars.push('\ufeff') }
    if(document.getElementById("remove_zw_zwnj").checked) { zwChars.push('\u200c') }
    if(document.getElementById("remove_zw_zwj").checked) { zwChars.push('\u200d') }
    if(document.getElementById("remove_zw_ltr").checked) { zwChars.push('\u200e') }
    if(document.getElementById("remove_zw_rtl").checked) { zwChars.push('\u200f') }
    let count = 0;
    let output = '';
    Array.from(input).forEach(item => {
        if(zwChars.includes(item)) {
            count++
        } else {
            output += item
        }
    });
    document.getElementById("remove_output").value = output;
    document.getElementById("remove_stat").innerText = 'Removed ' + count + ' ZW characters'
}

function clear() {
    document.getElementById("remove_input").value = ""
    document.getElementById("remove_output").value = ""
    document.getElementById("remove_stat").innerText = ""
}
