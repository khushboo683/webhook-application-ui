const token = localStorage.getItem("authToken");
export const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, 
  };