function ClientHeader() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 2fr 3fr 1fr", // ID, Nome, Telefone, Email, Ações
        gap: "10px",
        fontWeight: "bold",
        paddingBottom: "10px",
        borderBottom: "2px solid #ccc",
        textAlign: "left",
      }}
    >
      <span>ID</span>
      <span>Nome</span>
      <span>Telefone</span>
      <span>Email</span>
      <span>Ações</span>
    </div>
  );
}

export default ClientHeader;
