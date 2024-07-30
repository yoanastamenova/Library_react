
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
export const updateProfile = async (data, token) => {
  const response = await fetch(`${URL}/users/update`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

export const getAllUsers = async (token) => {
  const response = await fetch(`${URL}/users`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });

  return await response.json();
}

export const deleteUserById = async (token, id) => {
  const response = await fetch(`${URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });

  return await response.json();
}

export const createAppointment = async (data, token) => {
  const response = await fetch(`${URL}/appointments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "applications/json",
      "Authorization": `Brearer ${token}`
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}