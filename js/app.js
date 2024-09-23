function triggerFileDownload(fileName, fileContent) {
    const anchorElement = document.createElement("a");
    anchorElement.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);

    if (fileName) {
        anchorElement.download = fileName;
    }
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}
