export function Paginate(items, pageNumber, pageSize) {
    const prevRange = (pageNumber - 1) * pageSize
 
    const currPage = pageNumber * pageSize


    let itemsArray = []
    items.forEach((item, index) => {
        
        if (index >= prevRange && index < currPage) {
            
            itemsArray.push(item);
            
        }
    });
    return itemsArray;
  
} 