import { Fragment, useState } from "react";
import Contact from "./components/Contact";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstname: "Gandalf",
      lastname: "Legris",
      email: "gandalf@laconte.lotr",
    },
    {
      id: 2,
      firstname: "Sarumane",
      lastname: "Leblanc",
      email: "sarumane@laconte.lotr",
    },
  ]);
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const inputs = [
    { name: "firstname", label: "Prénom" },
    { name: "lastname", label: "Nom" },
    { name: "email", label: "Email" },
  ];

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let now = new Date();
    let timestamp = now.getTime();

    setContacts([
      ...contacts,
      {
        id: timestamp,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
      },
    ]);

    setFormData({
      id: "",
      firstname: "",
      lastname: "",
      email: "",
    });
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((e) => e.id !== id));
  };

  const updateUser = (id) => {
    setToggleUpdate(true);
    const [user] = contacts.filter((e) => e.id === id);
    setFormDataUpdate(user);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    setContacts(
      contacts.map((e) =>
        e.id === formDataUpdate.id
          ? {
              id: e.id,

              firstname: formDataUpdate.firstname,
              lastname: formDataUpdate.lastname,
              email: formDataUpdate.email,
            }
          : { ...e }
      )
    );

    setFormDataUpdate({
      id: "",
      firstname: "",
      lastname: "",
      email: "",
    });

    setToggleUpdate(false);
  };

  const handleChangeUpdate = (name, value) => {
    setFormDataUpdate({ ...formDataUpdate, [name]: value });
  };

  return (
    <div style={{ padding: 30 }}>
      <form
        onSubmit={handleSubmit}
        style={{ padding: 20, border: "1px black solid" }}
      >
        {inputs.map((e) => (
          <Fragment key={e.name}>
            <label htmlFor="firstname">{e.label}</label>
            <input
              style={{ marginTop: 20, marginLeft: 10 }}
              type="text"
              name={e.name}
              value={formData[e.name]}
              onChange={(input) => handleChange(e.name, input.target.value)}
            />
            <br />
          </Fragment>
        ))}
        <button style={{ marginTop: 20 }}>Add contact</button>
      </form>
      {toggleUpdate && (
        <form
          onSubmit={handleSubmitUpdate}
          style={{ padding: 20, border: "1px black solid" }}
        >
          {inputs.map((e) => (
            <Fragment key={e.name}>
              <label htmlFor="firstname">{e.label}</label>
              <input
                style={{ marginTop: 20, marginLeft: 10 }}
                type="text"
                name={e.name}
                value={formDataUpdate[e.name]}
                onChange={(input) =>
                  handleChangeUpdate(e.name, input.target.value)
                }
              />
              <br />
            </Fragment>
          ))}
          <button style={{ marginTop: 20 }}>Update contact</button>
        </form>
      )}
      {contacts.map((e) => (
        <Contact
          key={e.id}
          {...e}
          deleteContact={() => deleteContact(e.id)}
          updateUser={() => updateUser(e.id)}
        />
      ))}
    </div>
  );
}

export default App;
