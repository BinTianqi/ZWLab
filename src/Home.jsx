import writeTextToClipboard from './utils.js'
import 'mdui/components/button-icon.js'
import '@mdui/icons/content-copy.js'
import '@mdui/icons/light-mode.js';
import 'mdui/components/button-icon.js';
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/info--outlined.js';
import 'mdui/components/dialog.js';

export default function Home({darkTheme, setDarkTheme}) {
    function toggleDialog() {
        document.getElementById("about_dialog").open = !document.getElementById("about_dialog").open
    }
    const darkThemeIcon = darkTheme ? <mdui-icon-light-mode></mdui-icon-light-mode> : <mdui-icon-dark-mode></mdui-icon-dark-mode>
    return (
        <div id="home">
            <div id="home_title_bar">
                <h1>Zero width lab</h1>
                <mdui-button-icon onClick={() => setDarkTheme(!darkTheme)}>{darkThemeIcon}</mdui-button-icon>
                <mdui-button-icon onClick={() => toggleDialog()}>
                    <mdui-icon-info--outlined></mdui-icon-info--outlined>
                </mdui-button-icon>
            </div>
            <div>
                <ZWItem label="ZW space" zwchar="&#8203;"/>
                <ZWItem label="ZW no-break space" zwchar="&#xfeff;"/>
                <ZWItem label="ZW non-joiner" zwchar="&zwnj;"/>
                <ZWItem label="ZW joiner" zwchar="&#8205;"/>
                <ZWItem label="LTR mark" zwchar="&lrm;"/>
                <ZWItem label="RTL mark" zwchar="&rlm;"/>
            </div>
            <mdui-dialog close-on-esc close-on-overlay-click id="about_dialog">
                <span slot="headline">Zero width lab</span>
                <span slot="description">Author: Tianqi Bin</span>
                <mdui-button slot="action" variant="text" href="https://github.com/BinTianqi/ZWLab">Source code
                </mdui-button>
                <mdui-button slot="action" variant="tonal" onClick={() => document.getElementById("about_dialog").open = false}>Close</mdui-button>
            </mdui-dialog>
        </div>
    )
}

function ZWItem({label, zwchar}) {
    return (
        <div id="zw_item">
            <h3>{label}</h3>
            <mdui-button-icon variant="tonal" onClick={() => writeTextToClipboard(zwchar)}>
                <mdui-icon-content-copy></mdui-icon-content-copy>
            </mdui-button-icon>
        </div>
    )
}