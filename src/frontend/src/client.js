import fetch from "unfetch";


const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    else {
        const error = new Error(response.statusText);

        error.response = response;
        return Promise.reject(error);
    }
}

export const getAllStudents = async () => {
    const response = await fetch("api/v1/students").then(checkStatus)

    return response
}

export const addNewStudent = student => {
    return fetch("api/v1/students", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(student)
    }).then(checkStatus)

}

export const deleteStudent = studentId => {
    return fetch(`api/v1/students/${studentId}`, {
        method: 'DELETE'
    }).then(checkStatus)
}

// option command L to format