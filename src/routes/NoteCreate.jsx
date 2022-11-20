import {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BackButton from '../components/BackButton';
import {useUserContext} from '../components/UserContext';
import {postHTTPAddres} from '../utils/additionalFunctions';
function NoteCreate() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();
    const {user} = useUserContext();

    const handleChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);
    const handleChangeBody = useCallback((e) => {
        setBody(e.target.value);
    }, []);
    const handleSubmit = () => {
        if (!title || !body) {
            setValid(false);
            return;
        }
        const note = {
            id: Date.now().toString(),
            userId: user.id,
            title: title,
            body: body,
            createdAt: new Date().toLocaleDateString(),
        };
        postHTTPAddres(`http://localhost:5000/notes`, note);
        navigate('/notes');
        return;
    };
    return (
        <div className="p-2 border-t border-black">
            <BackButton url="/notes" />
            <div className="flex flex-col gap-1 mt-1">
                <input
                    placeholder="Title"
                    value={title}
                    onChange={handleChangeTitle}
                    className={
                        valid
                            ? 'bg-gray-200 w-fit p-1'
                            : 'bg-gray-200 w-fit p-1 border border-blue-500'
                    }
                />
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={handleChangeBody}
                    className={
                        valid
                            ? 'bg-gray-200 p-1 h-44'
                            : 'bg-gray-200 p-1 h-44 border border-red-500'
                    }
                />
            </div>
            <button
                onClick={handleSubmit}
                className="p-1.5 bg-green-200 mt-1 rounded transition-all duration-300 hover:bg-green-300 hover:scale-105"
            >
                Save
            </button>
        </div>
    );
}

export default NoteCreate;
