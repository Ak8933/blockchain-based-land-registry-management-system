// import React, { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [jsonDataArray, setJsonDataArray] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     description: "",
//     image: "",
//     id: "",
//     purchasePrice: "",
//     typeOfResidence: "",
//     bedRooms: "",
//     bathrooms: "",
//     squareFeet: "",
//     yearBuilt: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newJsonObject = {
//       name: formData.name,
//       address: formData.address,
//       description: formData.description,
//       image: formData.image,
//       id: formData.id,
//       attributes: [
//         { trait_type: "Purchase Price", value: formData.purchasePrice },
//         { trait_type: "Type of Residence", value: formData.typeOfResidence },
//         { trait_type: "Bed Rooms", value: formData.bedRooms },
//         { trait_type: "Bathrooms", value: formData.bathrooms },
//         { trait_type: "Square Feet", value: formData.squareFeet },
//         { trait_type: "Year Built", value: formData.yearBuilt }
//       ]
//     };

//     setJsonDataArray([...jsonDataArray, newJsonObject]);

//     // Clear form fields
//     setFormData({
//       name: "",
//       address: "",
//       description: "",
//       image: "",
//       id: "",
//       purchasePrice: "",
//       typeOfResidence: "",
//       bedRooms: "",
//       bathrooms: "",
//       squareFeet: "",
//       yearBuilt: ""
//     });
//   };

//   const downloadJsonData = () => {
//     const fileData = JSON.stringify(jsonDataArray, null, 2);
//     const blob = new Blob([fileData], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'data.json';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const uploadJsonToPinata = async (jsonDataArray) => {
//     const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
//     const apiKey = '15c496d0e7d13abc1ccf';
//     const apiSecret = '48c7d8e25dfa8202c78a79a9030eae8d1474880aeafc2275d54fce984c66785e';

//     try {
//       const formData = new FormData();
//       jsonDataArray.forEach((jsonData, index) => {
//         const file = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
//         formData.append('file', file, `data/${index + 1}.json`);
//       });

//       const response = await axios.post(url, formData, {
//         headers: {
//           pinata_api_key: apiKey,
//           pinata_secret_api_key: apiSecret,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const directoryUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
//       console.log('Directory URL:', directoryUrl);
//       return directoryUrl;
//     } catch (error) {
//       console.error('Error uploading JSON directory to Pinata:', error);
//     }
//   };

//   const main = async () => {
//     const result = await uploadJsonToPinata(jsonDataArray);

//     console.log('IPFS Directory URL:', result);
//   };

//   return (
//     <div>
//       <h1>Store to IPFS</h1>
//       <button type="button" onClick={main}>Upload</button>

//       <h2>Add JSON Object</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Address"
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           required
//         />
//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           required
//         />
//         <input
//           type="text"
//           name="id"
//           value={formData.id}
//           onChange={handleChange}
//           placeholder="ID"
//           required
//         />
//         <input
//           type="text"
//           name="purchasePrice"
//           value={formData.purchasePrice}
//           onChange={handleChange}
//           placeholder="Purchase Price"
//           required
//         />
//         <input
//           type="text"
//           name="typeOfResidence"
//           value={formData.typeOfResidence}
//           onChange={handleChange}
//           placeholder="Type of Residence"
//           required
//         />
//         <input
//           type="text"
//           name="bedRooms"
//           value={formData.bedRooms}
//           onChange={handleChange}
//           placeholder="Bed Rooms"
//           required
//         />
//         <input
//           type="text"
//           name="bathrooms"
//           value={formData.bathrooms}
//           onChange={handleChange}
//           placeholder="Bathrooms"
//           required
//         />
//         <input
//           type="text"
//           name="squareFeet"
//           value={formData.squareFeet}
//           onChange={handleChange}
//           placeholder="Square Feet"
//           required
//         />
//         <input
//           type="text"
//           name="yearBuilt"
//           value={formData.yearBuilt}
//           onChange={handleChange}
//           placeholder="Year Built"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
      
//       <button onClick={downloadJsonData}>Download JSON Data</button>
//     </div>
//   );
// }

// export default Register;



















// //TODAY    

// // register.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function App() {
// //   const [jsonDataArray, setJsonDataArray] = useState([]);
// //   const [hashes, setHashes] = useState([]);
// //   const [showData, setShowData] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     address: "",
// //     description: "",
// //     image: "",
// //     id: "",
// //     purchasePrice: "",
// //     typeOfResidence: "",
// //     bedRooms: "",
// //     bathrooms: "",
// //     squareFeet: "",
// //     yearBuilt: ""
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const newJsonObject = {
// //       name: formData.name,
// //       address: formData.address,
// //       description: formData.description,
// //       image: formData.image,
// //       id: formData.id,
// //       attributes: [
// //         { trait_type: "Purchase Price", value: formData.purchasePrice },
// //         { trait_type: "Type of Residence", value: formData.typeOfResidence },
// //         { trait_type: "Bed Rooms", value: formData.bedRooms },
// //         { trait_type: "Bathrooms", value: formData.bathrooms },
// //         { trait_type: "Square Feet", value: formData.squareFeet },
// //         { trait_type: "Year Built", value: formData.yearBuilt }
// //       ]
// //     };

// //     // Upload the new JSON object to Pinata
// //     const hash = await uploadJsonToPinata(newJsonObject);
// //     setHashes([...hashes, hash]);

// //     // Add the new JSON object to the array
// //     setJsonDataArray([...jsonDataArray, newJsonObject]);

// //     // Clear form fields
// //     setFormData({
// //       name: "",
// //       address: "",
// //       description: "",
// //       image: "",
// //       id: "",
// //       purchasePrice: "",
// //       typeOfResidence: "",
// //       bedRooms: "",
// //       bathrooms: "",
// //       squareFeet: "",
// //       yearBuilt: ""
// //     });
// //   };

// //   const downloadJsonData = () => {
// //     const fileData = JSON.stringify(jsonDataArray, null, 2);
// //     const blob = new Blob([fileData], { type: 'application/json' });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement('a');
// //     link.href = url;
// //     link.download = 'data.json';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   const uploadJsonToPinata = async (jsonData) => {
// //     const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
// //     const apiKey = '15c496d0e7d13abc1ccf';
// //     const apiSecret = '48c7d8e25dfa8202c78a79a9030eae8d1474880aeafc2275d54fce984c66785e';

// //     try {
// //       const formData = new FormData();
// //       const file = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
// //       formData.append('file', file, `data.json`);

// //       const response = await axios.post(url, formData, {
// //         headers: {
// //           pinata_api_key: apiKey,
// //           pinata_secret_api_key: apiSecret,
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       return response.data.IpfsHash;
// //     } catch (error) {
// //       console.error('Error uploading JSON to Pinata:', error);
// //     }
// //   };

// //   const toggleShowData = () => {
// //     setShowData(!showData);
// //   };

// //   return (
// //     <div>
// //       <h1>Store to IPFS</h1>

// //       <h2>Add JSON Object</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           placeholder="Name"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="address"
// //           value={formData.address}
// //           onChange={handleChange}
// //           placeholder="Address"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="description"
// //           value={formData.description}
// //           onChange={handleChange}
// //           placeholder="Description"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="image"
// //           value={formData.image}
// //           onChange={handleChange}
// //           placeholder="Image URL"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="id"
// //           value={formData.id}
// //           onChange={handleChange}
// //           placeholder="ID"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="purchasePrice"
// //           value={formData.purchasePrice}
// //           onChange={handleChange}
// //           placeholder="Purchase Price"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="typeOfResidence"
// //           value={formData.typeOfResidence}
// //           onChange={handleChange}
// //           placeholder="Type of Residence"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="bedRooms"
// //           value={formData.bedRooms}
// //           onChange={handleChange}
// //           placeholder="Bed Rooms"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="bathrooms"
// //           value={formData.bathrooms}
// //           onChange={handleChange}
// //           placeholder="Bathrooms"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="squareFeet"
// //           value={formData.squareFeet}
// //           onChange={handleChange}
// //           placeholder="Square Feet"
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="yearBuilt"
// //           value={formData.yearBuilt}
// //           onChange={handleChange}
// //           placeholder="Year Built"
// //           required
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
      
// //       <button onClick={downloadJsonData}>Download JSON Data</button>
// //       <button onClick={toggleShowData}>{showData ? 'Hide Data' : 'Show Data'}</button>

// //       {showData && (
// //         <div>
// //           <h2>Stored Data</h2>
// //           <ul>
// //             {jsonDataArray.map((data, index) => (
// //               <li key={index}>
// //                 <pre>{JSON.stringify(data, null, 2)}</pre>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}

// //       {/* <h2>Uploaded IPFS Links</h2>
// //       <ul>
// //         {hashes.map((hash, index) => (
// //           <li key={index}>
// //             <a href={`https://gateway.pinata.cloud/ipfs/${hash}`} target="_blank" rel="noopener noreferrer">
// //               https://gateway.pinata.cloud/ipfs/{hash}
// //             </a>
// //           </li>
// //         ))}
// //       </ul> */}
// //     </div>
// //   );
// // }

// // // Exporting the hashes array
// // export { hashes };
// // export default App;




















import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [jsonDataArray, setJsonDataArray] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    image: "",
    id: "",
    purchasePrice: "",
    typeOfResidence: "",
    bedRooms: "",
    bathrooms: "",
    squareFeet: "",
    yearBuilt: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJsonObject = {
      name: formData.name,
      address: formData.address,
      description: formData.description,
      image: formData.image,
      id: formData.id,
      attributes: [
        { trait_type: "Purchase Price", value: formData.purchasePrice },
        { trait_type: "Type of Residence", value: formData.typeOfResidence },
        { trait_type: "Bed Rooms", value: formData.bedRooms },
        { trait_type: "Bathrooms", value: formData.bathrooms },
        { trait_type: "Square Feet", value: formData.squareFeet },
        { trait_type: "Year Built", value: formData.yearBuilt }
      ]
    };

    setJsonDataArray([...jsonDataArray, newJsonObject]);

    // Clear form fields
    setFormData({
      name: "",
      address: "",
      description: "",
      image: "",
      id: "",
      purchasePrice: "",
      typeOfResidence: "",
      bedRooms: "",
      bathrooms: "",
      squareFeet: "",
      yearBuilt: ""
    });
  };

  const downloadJsonData = () => {
    const fileData = JSON.stringify(jsonDataArray, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const uploadJsonToPinata = async (jsonDataArray) => {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
    const apiKey = '15c496d0e7d13abc1ccf';
    const apiSecret = '48c7d8e25dfa8202c78a79a9030eae8d1474880aeafc2275d54fce984c66785e';

    try {
      const formData = new FormData();
      jsonDataArray.forEach((jsonData, index) => {
        const file = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
        formData.append('file', file, `data/${index + 1}.json`);
      });

      const response = await axios.post(url, formData, {
        headers: {
          pinata_api_key: apiKey,
          pinata_secret_api_key: apiSecret,
          'Content-Type': 'multipart/form-data',
        },
      });

      const directoryUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log('Directory URL:', directoryUrl);
      return directoryUrl;
    } catch (error) {
      console.error('Error uploading JSON directory to Pinata:', error);
    }
  };

  const main = async () => {
    const result = await uploadJsonToPinata(jsonDataArray);
    console.log('IPFS Directory URL:', result);
  };

  return (
    <div style={styles.container}>
      
      <h1>Store to IPFS</h1>
      <hr />
     

      <h3>(Add Property)</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="purchasePrice">Purchase Price:</label>
          <input
            type="text"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="typeOfResidence">Type of Residence:</label>
          <input
            type="text"
            name="typeOfResidence"
            value={formData.typeOfResidence}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="bedRooms">Bed Rooms:</label>
          <input
            type="text"
            name="bedRooms"
            value={formData.bedRooms}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input
            type="text"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="squareFeet">Square Feet:</label>
          <input
            type="text"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="yearBuilt">Year Built:</label>
          <input
            type="text"
            name="yearBuilt"
            value={formData.yearBuilt}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
        <button type="button" onClick={main} style={styles.button}>Upload</button>
      </form>
      
      <button onClick={downloadJsonData} style={styles.button}>Download Properties' Data</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default Register;



