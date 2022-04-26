import axios from "axios";

export default axios.create({
baseURL:"https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer QNApYQQp1NyDlZqENBmX-yMOT_MfEVrtc5-rpzl-Ni6jcQln37rGxK7fc9jchSW0gXOBGBsiElyC2JiJxuvZI1P1l-9n2FbBWl9SBpu8HF4eBt9k5pTH4FxzlZNnYnYx`
  },
});