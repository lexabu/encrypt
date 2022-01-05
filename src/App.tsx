import { useState } from "react";
import { useDropzone } from "react-dropzone";
import AES from "crypto-js/aes";

const encrypt = (buffer: Buffer, password: string) =>  AES.encrypt(JSON.stringify(buffer), password).toString();

function App() {
  const [password, setPassword] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(acceptedFiles);

    // convert file to buffer

    // const encryptedFile = encrypt(file, password);

    // download encrypted file to their browser

    // if not a zip ==> turn into zip
    // wait for proper password and file to allow submit
    // encrypt using password
  };

  console.log(uploaded);

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        {uploaded ? (
          <div>Uploaded successfully</div>
        ) : (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} onChange={() => setUploaded(true)} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default App;
