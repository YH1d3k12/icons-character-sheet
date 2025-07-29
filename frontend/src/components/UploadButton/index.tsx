import { FaUpload } from 'react-icons/fa';
import './styles.css';

interface UploadButtonProps {
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadButton({ onFileChange }: UploadButtonProps) {
    return (
        <label className="upload-button">
            <FaUpload size={24} />
            Upload
            <input
                type="file"
                accept="application/json"
                onChange={onFileChange}
                style={{ display: 'none' }}
            />
        </label>
    );
}
