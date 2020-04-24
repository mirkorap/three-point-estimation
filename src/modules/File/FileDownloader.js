const FileDownloader = {
  download(filename, content) {
    const blob = new Blob([content]);
    const a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },
};

export default FileDownloader;
