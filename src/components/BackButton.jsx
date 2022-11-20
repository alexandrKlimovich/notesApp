import {useNavigate} from 'react-router-dom';

function BackButton({urlAddress}) {
    const navigate = useNavigate();
    const handleGoback = () => {
        navigate(urlAddress);
    };
    return (
        <button
            onClick={handleGoback}
            className="p-2 bg-red-400 hover:bg-red-200"
        >
            Go back
        </button>
    );
}

export default BackButton;
