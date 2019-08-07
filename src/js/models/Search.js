import axios from 'axios'
import {key, proxy} from '../config'

export default class Search {
    constructor(query){
        this.query = query
    }
    async getRecipes() {

        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.results = res.data.recipes;
    //    console.log(res);
        }
        catch(error){
            alert(error)
        }
    }
}