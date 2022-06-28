import axios from "axios";

export default {
  createData: async (data) => {
    const headers = {
      Authorization: "Bearer my-auth-token",
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
    };
    try {
      const res = await axios.post("http://localhost:5000/hours/", data, {
        headers,
      });
      console.log("Status: ", res.status);
      console.log("Data: ", res.data);
    } catch (e) {
      console.error("erroe", e);
    }
  },
  getAll: async () => {
    try {
      const res = await axios.get("http://localhost:5000/hours/");
      console.log("Status: ", res.status);
      console.log("Data: ", res.data);
    } catch (e) {
      console.error("erroe", e);
    }
  },
};
