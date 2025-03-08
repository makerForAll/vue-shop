declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[]
    filename?: string
    image?: { type: 'jpeg' | 'png' | 'webp'; quality: number }
    html2canvas?: object
    jsPDF?: object
    pagebreak?: object
  }

  function html2pdf(): any
  export default html2pdf
}
