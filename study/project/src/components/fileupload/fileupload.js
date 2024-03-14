import React from 'react';
import Header from '../header/header';
import './fileupload.css';

const FileUpload = () => {
    return (
        <div>
            <Header />
            <div className="file-upload-container">
                <div className="file-upload-content">
                    <h2>Upload Invoice</h2>
                    <div className="file-input-group">
                        <input type="file" id="file" name="file" className="file-input" />
                        <label htmlFor="file" className="choose-file-button">Choose File</label>
                    </div>
                    <button className="upload-button">Upload</button>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
