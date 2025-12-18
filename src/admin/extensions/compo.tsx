const compo = () => {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        color: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Prueba1</h1>
      <p style={{ marginBottom: "20px" }}>Aqui se muestra la prueba1</p>

      <button
        onClick={() => alert("Este es un mensaje que se puede mostrar")}
        style={{
          padding: "15px 30px",
          background: "#d946ef",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Mostrar mensaje
      </button>
    </div>
  );
};

export default compo;
