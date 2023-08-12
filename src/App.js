
import './App.css';
import { useState, useEffect } from 'react';
import  CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';







const App = () => {

  // '' will be the initial value to be searched and setState() stored the data in the form of objects but in the case of hooks
  // we will be responsible for storing each and every value on our own, setSearchField will be the method used to set the state of 
  // the variable

  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]); // keeping the initial value of monsters as []
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // 2 args , ()callback function, [], set of values that will trigger the callback over and over again when the value of these argument
// changes

useEffect(
  () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      // setting the state value of monsters to setMonsters
      setMonsters(data);
      console.log("Checking the response data", data);
    })
    .catch((err) => {
      console.log("Error", err);
    })
  }, []);
  

  // to filter out the monsters
  useEffect(()=>{
    const newfilteredMonsters =  monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });
     setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField])


      console.log(searchField);
      const onSearchChange = (event) => {
        let searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      }
        



    return (
      <div className="App">
        
          <h1>Monster Rolodex</h1>
              <SearchBox onChangeHandler = { onSearchChange }
              placeHolder = "search monsters"
              className = "search-box"
              />
         <CardList monsters = {filteredMonsters}></CardList>
            
      </div>
    );

}

//        <SearchBox onChangeHandler = { this.onSearchChange }
//         placeHolder = "search monsters"
//         className = "search-box"
//        />
//         {/* {
//           filteredMonsters.map((monster) => {
//             return (
//               <div key={monster.id}>
//                 <h1>{monster.name}</h1>
//               </div>
//             );
//           })} */}
//       </div>
//     );
//   }
// }

export default App;
