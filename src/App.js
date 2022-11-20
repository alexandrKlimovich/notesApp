import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './routes/Login';
import About from './routes/About';
import Layout from './routes/Layout';
import UserContextProvider from './components/UserContext';
import {ProtectedRoute} from './components/ProtectedRoute';
import Registration from './routes/Registration';
import Notes from './routes/Notes';
import NoteDetails, {loader as NotesDetailsLoader} from './routes/NoteDetails';
import NoteCreate from './routes/NoteCreate';
import NoteEdit, {loader as NoteEditLoader} from './routes/NoteEdit';
import ErrorPage from './routes/ErrorPage';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    index: true,
                    element: <About />,
                },
                {
                    path: '/notes',
                    element: <Notes />,
                },
                {
                    path: '/notes/:id/edit',
                    loader: NoteEditLoader,
                    element: <NoteEdit />,
                },
                {
                    path: '/notes/:id',
                    loader: NotesDetailsLoader,
                    element: <NoteDetails />,
                },
                {
                    path: '/notes/new',
                    element: <NoteCreate />,
                },
                {
                    path: '*',
                    element: <ErrorPage />,
                },
            ],
        },

        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/registration',
            element: <Registration />,
        },
    ]);
    return (
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    );
}

export default App;
