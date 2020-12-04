import moment from 'moment';


/**
 * Task 1 -- Date formatting
 * 
 * Format the date from ISO 8601 format to: weekday, abbreviated month [space] 
 * day of month, year format.
 * 
 * For example, 
 *   "2020-03-08" --> "Friday, Mar 8, 2020"     
 *   "2021-10-18" --> "Monday, Oct 18, 2021"  
 * 
 * @param {String} date in ISO 8601 format
 * 
 * @returns {String} date in weekday, abbreviated month [space] day of month, 
 * year format.
 */
export function formatDate(date) {  
  return moment(date).format("dddd, MMM D, YYYY");
};


 /**
 * Task 2 -- Date filtering
 * 
 * Find all events occur before or after a given date. 
 * 
 * @param {Object[]} events. Note, you can find example events in `src/App/data/events.js`
 * @param {String} date in ISO 8601 format, to be used as reference point to find 
 * events that occur before or after this date.
 * @param {String} when. `when` will always be either "before" or "after". 
 * 
 * @returns {Object[]} List of events that occur before or after the given date. 
 */
export function filterEventsByDate(events, date, when) { 
  let afterArray = events.filter(event => event.date >= moment(date).format("YYYY-MM-DD"))
  let beforeArray = events.filter(event => event.date < moment(date).format("YYYY-MM-DD"))
  if(when === 'after'){
    return afterArray
  }
  else if(when === 'before'){
    return beforeArray
  }
  else 
  return events;
};


/**
 * Task 3 -- Names of Tags
 * 
 * Find the names of tags that are associated with an event and return them in 
 * aphabetical order. If there are no tags for this event, return an empty array.
 * 
 * @param {Object} event
 * @param {Object[]} tags. Note, you can find example tags in `src/App/data/tags.js`
 * 
 * @returns {Object[]} Names of tags who are associated with the event in 
 * alphabetical order
 */
export function getNamesOfTags(event, tags) {
//   const objectsEqual = (o1, o2) =>
//   Object.keys(o1).length === Object.keys(o2).length 
//       && Object.keys(o1).every(p => o1[p] === o2[p]);

// const obj1 = { name: 'John', age: 33};
// const obj2 = { age: 33, name: 'John' };
// const obj3 = { name: 'John', age: 45 };
      
// console.log(objectsEqual(obj1, obj2)); // true
// console.log(objectsEqual(obj1, obj3)); // false

// console.log(event.tags)

let tagName = []

if(event.tags){
  event.tags.map(tagId => {
    tags.map(tag => {
  
      if(tagId === tag.id){
        tagName.push(tag.name)
      }
    })
    console.log(tagName)
  })
  return tagName.sort() 

}
  return [];



//   return tags.name
// }else{
  
 

  // console.log(tags[0])
  // let newTag = [...new Set(tags)]
  // console.log(newTag)
  // let tagsArray = []
  // for(let i = 0; i < 1; i++){
  //    tagsArray.push(tags[i])
     
  // }
  // console.log(tagsArray)
  

  // if event.tags equals tags.id
  // return tag.name
  // else return []
  
  // let tag = tags[0]
  // console.log(tags)
  // let eachTag = tags.map(tag => tag.id)
  // console.log(eachTag)
// console.log(event.tags)
  // event.tags.map(tag => {
  //   console.log(tag)
  // })
  // console.log(eventTagId)

//   event.tags.map(tag => {
//     if (tag.id === tags.map(tag => tag.id)){
//     return tag.name
//   }
// })
  // tags.filter(tag => {
    // tag.id === event.tags
  //   console.log(tag.name)
  // })

  
  // console.log(tags)
//     if(event.tags){
//       console.log(event)
//     }
  
//  else
  
}


/**
 * Task 4 -- Calculate Statistics for a Tag
 * 
 * For the given tag find
 *   - eventCount: Total number of events with this tag (Integer)
 *   - averageRegistration: Average number of registered users per event with this 
 *     tag. (String) 
 *      - This average should be a string that is a decimal representation to 
 *        the hundreth decimal place, ex. "22.27".
 *      - Return null if tag is unused by any events.
 *   - mostPopularEvent: Name of the most popular event with this tag. 
 *      - The "most popular event" is the event with the most registered users.
 *      - If there is a tie, break it by chosing the one that alpha numerically 
 *        comes first.
 *      - Return null if tag is unused by any events.
 * 
 * @param {Object[]} events
 * @param {Object} tag
 * 
 * @returns {Object} an object with the three tag statistics as keys: eventCount, 
 * averageRegistration, and mostPopularEvent. 
 */
export function calculateStatisticsForTag(events, tag) {
  return {};
} 
