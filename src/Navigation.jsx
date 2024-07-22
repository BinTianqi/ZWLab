import 'mdui/components/navigation-bar.js'
import 'mdui/components/navigation-bar-item.js'
import 'mdui/components/navigation-rail.js'
import 'mdui/components/navigation-rail-item.js'
import '@mdui/icons/format-list-bulleted.js'
import '@mdui/icons/add.js'
import '@mdui/icons/remove.js'
import '@mdui/icons/lock--outlined.js'
import '@mdui/icons/lock-open--outlined.js'

export function NavBar() {
    return (
        <mdui-navigation-bar id="navbar" value="home" label-visibility="labeled">
            <mdui-navigation-bar-item value="insert">
                Insert
                <mdui-icon-add slot="icon"></mdui-icon-add>
            </mdui-navigation-bar-item>
            <mdui-navigation-bar-item value="remove">
                Remove
                <mdui-icon-remove slot="icon"></mdui-icon-remove>
            </mdui-navigation-bar-item>
            <mdui-navigation-bar-item value="home">
                Home
                <mdui-icon-format-list-bulleted slot="icon"></mdui-icon-format-list-bulleted>
            </mdui-navigation-bar-item>
            <mdui-navigation-bar-item value="encode">
                Encode
                <mdui-icon-lock--outlined slot="icon"></mdui-icon-lock--outlined>
            </mdui-navigation-bar-item>
            <mdui-navigation-bar-item value="decode">
                Decode
                <mdui-icon-lock-open--outlined slot="icon"></mdui-icon-lock-open--outlined>
            </mdui-navigation-bar-item>
        </mdui-navigation-bar>
    )
}

export function NavRail() {
    return (
        <mdui-navigation-rail id="navrail" value="home" label-visibility="labeled">
            <mdui-navigation-rail-item value="insert">
                Insert
                <mdui-icon-add slot="icon"></mdui-icon-add>
            </mdui-navigation-rail-item>
            <mdui-navigation-rail-item value="remove">
                Remove
                <mdui-icon-remove slot="icon"></mdui-icon-remove>
            </mdui-navigation-rail-item>
            <mdui-navigation-rail-item value="home">
                Home
                <mdui-icon-format-list-bulleted slot="icon"></mdui-icon-format-list-bulleted>
            </mdui-navigation-rail-item>
            <mdui-navigation-rail-item value="encode">
                Encode
                <mdui-icon-lock--outlined slot="icon"></mdui-icon-lock--outlined>
            </mdui-navigation-rail-item>
            <mdui-navigation-rail-item value="decode">
                Decode
                <mdui-icon-lock-open--outlined slot="icon"></mdui-icon-lock-open--outlined>
            </mdui-navigation-rail-item>
        </mdui-navigation-rail>
    )
}
