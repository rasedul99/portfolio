
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Details from '../Pages/Details/Details';
import Fashion from '../Pages/Details/Fashion';
import Laptop from '../Pages/Details/Laptop';
import Home from '../Pages/Home/Home/Home';
import Skill from '../Pages/MySkill/Skill';
import Projects from '../Pages/Projects/Projects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/laptop',
                element: <Laptop></Laptop>
            },
            {
                path: '/fashion',
                element: <Fashion></Fashion>
            }

        ]
    },
])
export default router;