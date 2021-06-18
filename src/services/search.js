import { http } from './config'

var headers = {
  'x-rapidapi-key': '41c342f3f7msh47de0d5308c3171p18d11fjsncef379af56a2',
  'x-rapidapi-host': 'genius.p.rapidapi.com'
}

var params = {
  q: 'Bon Jovi'
}

export default {
    search:() => {
        return http.get('https://genius.p.rapidapi.com/search', {params, headers})
    }
}