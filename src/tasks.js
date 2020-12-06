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
  return moment(date).format("dddd, MMM D, YYYY")
}


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
  // create array for events occuring before given date and one for after given date
  let afterArray = events.filter(event => event.date >= moment(date).format("YYYY-MM-DD"))
  let beforeArray = events.filter(event => event.date < moment(date).format("YYYY-MM-DD"))
  
  // if 'when' equals afer, return afterArray
  //  if 'when' equals before, return beforeArray
  if(when === 'after'){
    return afterArray
  }
  else if(when === 'before'){
    return beforeArray
  }
  else{
    return events
  } 
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
export function getNamesOfTags(event, tags){
  // if event.tags exists and equals tag.id
  // return tag event names in alphabetical order
  // else return []

let tagNames = []
  if(event.tags){
    event.tags.map(tagId => {
      tags.map(tag => {
        if(tagId === tag.id){
          tagNames.push(tag.name)
        }
      })
    })
    return tagNames.sort() 
  }else{
    return []
  }
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
  // create object with all given keys and defaults
  let tagStats = {
    eventCount: 0,
    averageRegistration: null,
    mostPopularEvent: null
  }

  // create array to store list of all registeredUsers.length per event 
  let regUsers = []

  events.map(event => {
    event.tags.map(tagId => {
      if(tagId === tag.id){

        // for each tag, how many events have it
        tagStats.eventCount += 1

        // get sum of all registeredUsers per event and divide by eventCount
        //  return averageRegistration to the nearest hundreth decimal
        regUsers.push(event.registeredUsers.length)
        let num = regUsers.reduce((a, b) => a + b, 0)/tagStats.eventCount
        tagStats.averageRegistration =  num.toFixed(2)

        // if event.registeredUseres.length is the largest number in regUsers array
        // return event.name
        //  if there are two, return event that alpha numerically comes first
        if(event.registeredUsers.length === Math.max(...regUsers)){
          tagStats.mostPopularEvent = event.name
        }
      }
    })
  })
  return tagStats
} 
