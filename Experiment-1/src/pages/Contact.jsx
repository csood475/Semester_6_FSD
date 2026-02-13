const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Simulation)");
  };

  return (
    <div className="page-content">
      <h2>This is the Contact Page</h2>
    </div>
  );
};

export default Contact;