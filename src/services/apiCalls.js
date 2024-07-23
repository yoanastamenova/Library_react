
        //validar la data que voy a enviar
        //una vez si es valida vamos a llamar la BD mediante la API
        // La api puede devolver OK o NOT OK
        // Si la API devuelve OK -> 
        // Si la API devuelve false  -> res.status(500)

const URL = 'http://localhost:4000'

export const registerUser = async (credentials) => {
        const request = await fetch(`${URL}/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          });

        const result = await request.json();
        return result;
       }

export const loginUser = async(credentials) => {
  const request = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

const result = await request.json();

return result;
}

export const profile = async (token) => {
    const response = await fetch(`${URL}/users/profile`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    });

    return await response.json();
}