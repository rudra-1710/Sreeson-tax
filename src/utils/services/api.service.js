const apiUrl = 'http://54.152.161.98:8000/v1/api/'

export const getApiCall = (path) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${path}`)
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 200) {
            return resolve(data);
          }
        })
        .catch(error => {
          alert('Error fetching category data');
          return reject(error);
        })
    });
    
}


export const postApiCall = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${path}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
        .then(res => res.json())
        .then(data => {
          return resolve(data);
        })
        .catch(error => {
          return reject(error);
        })
    });
    
}

export const putApiCall = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${path}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 201) {
            return resolve(data);
          }
        })
        .catch(error => {
          return reject(error);
        })
    });   
}



export const deleteApiCall = (path, payload) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${path}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
          })
        .then(res => res.json())
        .then(data => {
          if (data.statusCode === 200) {
            return resolve(data);
          }
        })
        .catch(error => {
          return reject(error);
        })
    });   
}
