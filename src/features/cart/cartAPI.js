import axios from "axios";

// A mock function to mimic making an async request for data
export  function fetchItem() {
      return  axios.get('http://localhost:8080/cart')
}

export  function addItem(item) {
      return  axios.post('http://localhost:8080/cart',item)
}

export  function UpdateItem(id,ItemUpdate) {
      return  axios.patch(`http://localhost:8080/cart/${id}`,ItemUpdate)
}


export  function DeleteItem(id) {
      return  axios.delete(`http://localhost:8080/cart/${id}`)
}

