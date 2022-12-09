import Root, { loader as rootLoader, action as rootAction } from "../layout/Root";
import Home from "../pages/Home/index";
import ErrorPage from "../pages/Error/index";
import Contact, { loader as contactLoader } from "../pages/Contact";
import ContactEdit, { action as contactEditAction } from '../pages/ContactEdit';
import { action as destroyAction } from '../pages/ContactDestroy';
import ContactIndex from '../pages/ContactIndex';
import Juejin from '../pages/JueJin/index';

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <ContactIndex />
          },
          {
            path: "contacts/:id",
            element: <Contact />,
            loader: contactLoader
          },
          {
            path: 'contacts/:id/edit',
            element: <ContactEdit />,
            loader: contactLoader,
            action: contactEditAction
          },
          {
            path: 'contacts/:id/destroy',
            action: destroyAction,
            errorElement: <div>Oops! Error</div>
          },
        ]
      },
    ]
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/jj",
    element: <Juejin />
  }
];
