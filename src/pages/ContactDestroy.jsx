import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

export async function action({ params }) {
  if (Math.random() > 0.5) {
    throw new Error();
  } else {
    await deleteContact(params.id);
    return redirect('/');
  }
}