import { Form, useLoaderData } from 'react-router-dom';
import { getContact } from '../contacts';

export async function loader({ params }) {
  const contact = await getContact(params.id);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: 'Not Found',
    })
  }
  return contact;
}
//000222283100
export default function Contact() {
  const contact = useLoaderData();

  return (
    <div id="contact">
      <h3>{contact.id}</h3>
      <div>
        <img
          width="64px"
          key={contact.avatar}
          src={contact.avatar || null}
          alt={contact.first || "avatar"}
        />
      </div>
      
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
            ): (
              <i>No Name</i>
            )
          }{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
              rel="noreferrer noopener"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if(
                !window.confirm('Please confirm you want to delete this record.')
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  )
}
