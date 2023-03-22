import Navbar from '../components/Navbar';
const { AzureKeyCredential, DocumentAnalysisClient } = require('@azure/ai-form-recognizer');
import create from '../styles/create.module.css';
import Image from 'next/image';
import { useState } from 'react';

function CreateForm() {
  const [data, setData] = useState(null);
  const [formUrl, setFormUrl] = useState('');
  const handleInputChange = (event) => {
    setFormUrl(event.target.value);
  };

  const handleButtonClick = async () => {
    const key = '0ba2b971ec8a4f35b6ff1c44caafbab8';
    const endpoint = 'https://formrec-wondertech.cognitiveservices.azure.com/';
    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
    const poller = await client.beginAnalyzeDocumentFromUrl('prebuilt-document', formUrl !== '' ? formUrl : null);

    if (formUrl !== null) {
      const { keyValuePairs } = await poller.pollUntilDone();

      if (!keyValuePairs || keyValuePairs.length <= 0) {
        console.log('No key-value pairs were extracted from the document.');
        setData('No key-value pairs were extracted from the document.');
      } else {
        console.log('Key-Value Pairs:');
        const pairs = [];
        for (const { key, value, confidence } of keyValuePairs) {
          console.log('- Key  :', `"${key.content}"`);
          console.log('  Value:', `"${(value && value.content) || 'UNDEFINED'}" (confidence: ${confidence})`);
          pairs.push({
            key: key.content,
            value: (value && value.content) || '<undefined>',
            confidence,
          });
        }
        setData(pairs);
      }
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={create.main}>
        <div>
          <div className={create.messageAndInput}>
            <label className={create.lbl}>Insert your document image URL and extract data:</label>
            <br></br>
            <input className={create.imgInput} type="text" value={formUrl} onChange={handleInputChange} />
            <button className={create.scanButton} onClick={handleButtonClick}>
              Scan
            </button>
          </div>
          <br></br>
          <div className={create.imageAndExtractedInfo}>
            {formUrl ? (
              <div className={create.imageInserted}>
                <Image src={formUrl} alt="URL Image" width="350" height="200"></Image>
                <br></br>
                <label className={create.imgMsg}>Data extraction might last up to 5-6 seconds...</label>
              </div>
            ) : null}
            {data !== null && formUrl ? (
              <div classname={create.extractedInfo}>
                <label className={create.lbl}>Extracted information: </label>
                {data.map((pair) => (
                  <div key={pair.key}>
                    <p className={create.key}>{pair.key} :</p>
                    <p className={create.value}>
                      {pair.value} (confidence: {pair.confidence})
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
