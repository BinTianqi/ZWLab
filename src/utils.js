export default function writeTextToClipboard(text) {
    if(text === '') {
        alert('Nothing to copy')
        return -1
    }
    if(!navigator.clipboard) {
        alert('Your browser doesn\'t support Clipboard API')
        return 0
    }
    navigator.clipboard.writeText(text)
        .then(() => { alert('Text copied'); return 1 })
        .catch(err => { console.log(err); return 2 })
    return 3
}