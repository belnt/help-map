export function escapeHtml(html) {
    const text = document.createTextNode(html);
    const span = document.createElement('span');
    span.appendChild(text);

    return span.innerHTML;
}
