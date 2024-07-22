import {useState} from "react";
import writeTextToClipboard from "./utils.js";
import 'mdui/components/button.js';
import 'mdui/components/dropdown.js';
import 'mdui/components/text-field.js';
import 'mdui/components/icon.js';
import 'mdui/components/menu.js';
import 'mdui/components/menu-item.js';
import '@mdui/icons/arrow-drop-down.js';
import '@mdui/icons/content-copy.js';
import '@mdui/icons/clear.js';
import '@mdui/icons/add.js';

export default function Insert() {
    const [selectedZW, setSelectedZW] = useState("ZW space")
    const [zwChar, setZwChar] = useState("\u200b")
    return (
        <div>
            <h1>Insert</h1>
            <mdui-text-field label="Input" autosize min-rows="4" id="insert_input"></mdui-text-field>
            <div className="buttons_row insert_zw_buttons_row">
                <mdui-button variant="text" onClick={() => clear()}>
                    Clear
                    <mdui-icon-clear slot="icon"></mdui-icon-clear>
                </mdui-button>
                <mdui-button onClick={() => insert(zwChar, selectedZW)}>
                    Insert
                    <mdui-icon-add slot="icon"></mdui-icon-add>
                </mdui-button>
                <mdui-dropdown id="dropdown">
                    <mdui-button slot="trigger" variant="outlined">
                        {selectedZW}
                        <mdui-icon-arrow-drop-down slot="end-icon"></mdui-icon-arrow-drop-down>
                    </mdui-button>
                    <mdui-menu>
                        <mdui-menu-item onClick={() => {setSelectedZW('ZW space'); setZwChar("\u200b")}}>ZW space</mdui-menu-item>
                        <mdui-menu-item onClick={() => {setSelectedZW('ZW no-break space'); setZwChar("\ufeff")}}>ZW no-break space</mdui-menu-item>
                        <mdui-menu-item onClick={() => {setSelectedZW('ZW non-joiner'); setZwChar("\u200c")}}>ZW non-joiner</mdui-menu-item>
                        <mdui-menu-item onClick={() => {setSelectedZW('ZW joiner'); setZwChar("\u200d")}}>ZW joiner</mdui-menu-item>
                        <mdui-menu-item onClick={() => {setSelectedZW('LTR mark'); setZwChar("\u200e")}}>LTR mark</mdui-menu-item>
                        <mdui-menu-item onClick={() => {setSelectedZW('RTL mark'); setZwChar("\u200f")}}>RTL mark</mdui-menu-item>
                    </mdui-menu>
                </mdui-dropdown>
            </div>
            <mdui-text-field readonly label="Output" autosize min-rows="4" id="insert_output"></mdui-text-field>
            <div className="buttons_row">
                <mdui-button onClick={() => writeTextToClipboard(document.getElementById("insert_output").value)}>
                    Copy
                    <mdui-icon-content-copy slot="icon"></mdui-icon-content-copy>
                </mdui-button>
            </div>
            <p id="insert_stat"></p>
        </div>
    )
}

function insert(zwChar, selectedZW) {
    const input = document.getElementById("insert_input").value
    const textArray = input.matchAll(/./ugs)
    let output = ''
    for(const each of textArray) { output += each + zwChar }
    document.getElementById("insert_output").value = output;
    document.getElementById("insert_stat").innerText = `Inserted ${input.length} ${selectedZW}`
}

function clear() {
    document.getElementById("insert_input").value = ""
    document.getElementById("insert_output").value = ""
    document.getElementById("insert_stat").innerText = ""
}
