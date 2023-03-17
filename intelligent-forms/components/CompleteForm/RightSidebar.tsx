import { Flex, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const RightSidebar = () => {
  const [documentImage, setDocumentImage] = useState<File>();
  const [setIdImage] = useState<File>(); //idImage am scos fiindca dadea eroare ca nu e folosit
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const handleScanDocument = async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/pdf';

    fileInput.addEventListener('change', async () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      setDocumentImage(file);
    });

    fileInput.click();
  };

  const handleScanID = async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      setIdImage(file);
    });

    fileInput.click();
  };

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  return (
    <Flex>
      <Button onClick={handleScanDocument}>Scan Document</Button>
      <Button onClick={handleScanID}>Scan ID</Button>
      {documentImage && (
        <Box position="fixed" bottom="0" right="0" left="0" zIndex="100" p="2" bg="white">
          <Document file={documentImage} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Flex>
            <Button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
              Previous
            </Button>
            <Button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
              Next
            </Button>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default RightSidebar;
