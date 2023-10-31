//IT MAKES OUR CODE READABLE , REUSABLE , MAINTAINABLE, TESTABLE

// HOOKS ARE ALSO KIND OF USED FOR THE SAME REASON 
// Filter the restaurant data according input type
export function filterData(searchText, restaurants) {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }