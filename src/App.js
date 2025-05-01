import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      Technology: false,
      Design: false,
      Marketing: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const selectedInterests = Object.entries(formData.interests)
    .filter(([_, checked]) => checked)
    .map(([interest]) => interest)
    .join(", ");

  return (
    <main>
      <h1>Hi, I'm Stacy</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Newsletter Signup</h2>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <fieldset>
          <legend>What are you interested in?</legend>
          <label>
            <input
              type="checkbox"
              name="Technology"
              checked={formData.interests.Technology}
              onChange={handleChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              name="Design"
              checked={formData.interests.Design}
              onChange={handleChange}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="Marketing"
              checked={formData.interests.Marketing}
              onChange={handleChange}
            />
            Marketing
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you, {formData.name}!</h3>
          <p>Your form was submitted successfully.</p>
          {selectedInterests && (
            <p>Interests: {selectedInterests}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;

