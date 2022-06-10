const { ipcRenderer } = require('electron');
const fs = require('fs');
const { pdfConfig } = require('./config/pdf');
const pdf = require('html-pdf');

window.addEventListener('DOMContentLoaded', () => {
  const setDisplayElements =
    () => document.querySelectorAll('.ignore-pdf').forEach(
      (element) => element.classList.contains('d-none') || element.classList.add('d-none')
    );
  const saveImage = (img) => fs.copyFileSync(img.path, `${__dirname}/images/${img.name}`);

  document.querySelector('#form-2').addEventListener('submit', async (e) => {
    const name = localStorage.getItem('name');
    console.log(`Name is ${name}`);
    const path = `${__dirname}/../build/${name}.pdf`;
    console.log(`Path is ${path}`);

    const html = document.querySelector('html');
    setDisplayElements();
    // Create if not exists
    fs.writeFileSync(path, '', { encoding: 'utf8' });
    pdf.create(html.innerHTML, pdfConfig)
      .toFile(path, (err, res) => !err && console.error(res));
    setDisplayElements();
  });
});
