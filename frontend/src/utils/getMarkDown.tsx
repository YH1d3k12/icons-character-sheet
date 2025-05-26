import ReactMarkdown from 'react-markdown';

interface Props {
    markdown: string;
}

export default function getMarkDown({ markdown }: Props) {
    return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
