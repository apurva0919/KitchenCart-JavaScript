import Search from './models/Search';
import * as searchView from './view/searchView'
import {elements, renderLoader, clearLoader} from './view/base';
const state = {};
window.state = state;


const controlSearch = async () => {
    // 1. Get a query from the view
    const query = searchView.getInput();
  // const query = 'pizza';
   // console.log(query)
    if(query){
        // new search object and add to the state
        state.search = new Search(query)
        // console.log(query)
        // Prepare UI for results
     try{
       // searchView.clearInput();
    //    searchView.clearResults()
     // renderLoader(elements.searchRes)
        //Search for recipes
        await state.search.getRecipes();

        //render results on UI
        console.log(state.search.results)
         //clearLoader()
        searchView.renderResults(state.search.results)
    }
    catch(error){
        alert("Search Error")
        clearLoader()
    }
 }

}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
 
});