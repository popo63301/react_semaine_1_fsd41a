import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ padding: 30 }}>
      <form style={{ padding: 20, border: "1px black solid" }}>
        <label htmlFor="firstname">Prénom</label>
        <input
          style={{ marginTop: 20, marginLeft: 10 }}
          type="text"
          name="firstname"
        />
        <br />
        <label htmlFor="lastname">Nom</label>
        <input
          style={{ marginTop: 20, marginLeft: 10 }}
          type="text"
          name="lastname"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          style={{ marginTop: 20, marginLeft: 10 }}
          type="text"
          name="email"
        />
        <br />
        <button style={{ marginTop: 20 }}>Add contact</button>
      </form>
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
