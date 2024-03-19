import "../styles/PassGenerator.css";

export const PassGenerator = () => {
  const generatePassword = () => {
    // Definir los caracteres permitidos según las opciones seleccionadas
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]|\\;',./<>?";

    // Obtener las opciones seleccionadas por el usuario
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const passwordLength = document.getElementById("points").value;

    // Concatenar los caracteres permitidos según las opciones seleccionadas
    let allowedChars = "";
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    // Verificar si se han seleccionado al menos un tipo de carácter
    if (allowedChars.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    // Generar la contraseña
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }

    // Mostrar la contraseña en el input
    document.getElementById("password").value = password;
  };

  const updateRangeValue = () => {
    const rangeValue = document.getElementById("points").value;
    document.getElementById("rangeValue").textContent = rangeValue;
  };

  return (
    <>
      <div className="container-app">
        <div className="title">
          <h1>Password Generator</h1>
        </div>
        <input
          placeholder="Selecciona las opciones"
          id="password"
          className="input-pass"
          type="text"
          readOnly
        />
        <div className="option-lenght">
          <label>Lenght</label>
          <span id="rangeValue">24</span>
          <div>
            <input
              className="input-lenght"
              type="range"
              id="points"
              name="points"
              min="0"
              max="24"
              onChange={updateRangeValue}
            />
          </div>
        </div>
        <div className="option-aditional">
          <div className="options">
            <div className="options-one">
              <div className="option-check">
                <input type="checkbox" name="uppercase" id="uppercase" />
                <label>Uppercase</label>
              </div>
              <div className="option-check">
                <input type="checkbox" name="lowercase" id="lowercase" />
                <label>Lowercase</label>
              </div>
            </div>
            <div>
              <div className="option-check">
                <input type="checkbox" name="numbers" id="numbers" />
                <label>Numbers</label>
              </div>

              <div className="option-check">
                <input type="checkbox" name="symbols" id="symbols" />
                <label>Symbols</label>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-generate" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </>
  );
};
