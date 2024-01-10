import { jsPDF } from "jspdf";
import CreatePdf from "../components/createpdf";

const CreatePDF = () => {
    // Create jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text(<CreatePdf />, 10, 10);
    // doc.addImage('path/to/image.jpg', 'JPEG', 10, 40, 100, 80);

    // Save or print the PDF
    doc.save('example.pdf');
    // Alternatively, open the print dialog
    // doc.autoPrint();
    // window.open(doc.output('bloburl'), '_blank');
    return (
        <h1>successfuly create pdf</h1>
    )
}

export default CreatePDF;