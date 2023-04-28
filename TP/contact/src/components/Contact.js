function Contact({
  id,
  firstname,
  lastname,
  email,
  deleteContact,
  updateUser,
}) {
  return (
    <div style={{ margin: "20px 0px", padding: 15, border: "1px black solid" }}>
      {id} / {firstname} / {lastname} / {email}
      <button style={{ marginLeft: 15 }} onClick={deleteContact}>
        delete
      </button>
      <button style={{ marginLeft: 15 }} onClick={updateUser}>
        update
      </button>
    </div>
  );
}

export default Contact;
