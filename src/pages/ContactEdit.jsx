import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export function loader({ params }) {
  return getContact(params.id);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.id, updates);
  return redirect(`/contacts/${params.id}`);
}
// https://tool.ifcool.fun/ava.jpg

export default function ContactEdit() {
  const contact = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First Name"
          name="first"
          defaultValue={contact.first}
        />
        <input
          type="text"
          placeholder="Last"
          aria-label="Last Name"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@twitte"
          defaultValue={contact.twitter}
        />
      </label>
      <br />
      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          aria-label="Avatar URL"
          placeholder="https://example.com/avatar.jpg"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <br />
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          rows={6}
          defaultValue={contact.notes}
        ></textarea>
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={
            () => {
              navigate(-1);
            }
          }
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
