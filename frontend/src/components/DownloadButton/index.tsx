import { FaDownload } from 'react-icons/fa';
import './styles.css';

interface DownloadButtonProps {
    onDownload: () => void;
}

export default function DownloadButton({ onDownload }: DownloadButtonProps) {
    return (
        <button className="download-button" onClick={onDownload}>
            <FaDownload size={24} />
            Download
        </button>
    );
}
