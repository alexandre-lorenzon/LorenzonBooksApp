import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyBwH6kdxIgAtXKLIWlCqBLY4WRfo0wpg4w";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1"
});

function SearchBooks(filter, startIndex = 0){
    return api.get('/volumes?q=' + filter + '&startIndex=' + startIndex + '&key=' + GOOGLE_API_KEY);
}

export const GoogleBooksService = {
    SearchBooks
}