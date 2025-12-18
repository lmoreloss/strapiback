const papitas = () => {
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
      <h1>Prueba2</h1>
      <p style={{ marginBottom: "20px" }}>Aqui se muestra la prueba2</p>

      <button
        onClick={() => alert("Este es un mensaje que puede aparecer")}
        style={{
          padding: "15px 30px",
          background: "#bcf415ff",
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

export default papitas;
