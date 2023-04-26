const apiKey = "d38f08e9a8ceaa41086be76619e4";

const getUrl = "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=d38f08e9a8ceaa41086be76619e4";


fetch(getUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));


  function calculateDates(input, country) {        
  	let obj = {};
    //search for available partners within countries
    input.partners.forEach(partner => {                
    	for( let i = 0; i < partner.availableDates.length-1; i++) {      	
        let first = partner.availableDates[i];
        let date1 = new Date(first);
        let date2 = new Date(partner.availableDates[i+1]);        
        let diffInDays = (date2-date1) / (1000 * 3600 * 24);
        if (diffInDays === 1) {        	          
          obj[first] = obj[first] ? obj[first] + partner.email + ',' : partner.email + ',';          
        }        
      }
    });        
            
    let attendees = []
    let startDate = null;
    for (key in obj) {    	        
      let partnerStr = obj[key].substring(0, obj[key].length - 1);      
      let partners = partnerStr.split(',');
      if (!attendees) {
      	attendees = partners;        
        startDate = key;        
      } else {
        if (partners.length > attendees.length) {        	
          attendees = partners;
          startDate = key;
        }
      }      
    }        
    
    let res = {
      "attendeeCount": attendees ? attendees.length : 0,
      "attendees": attendees,
      "name": country,
      "startDate": startDate
    };
    
    return res;
  }





  {
    "partners": [
  {
    "firstName": "Darin",
    "lastName": "Daignault",
    "email": "ddaignault@hubspotpartners.com",
    "country": "United States",
    "availableDates": [
    "2017-05-03",
    "2017-05-06"
    ]
  },
  {
    "firstName": "Eugena",
    "lastName": "Auther",
    "email": "eauther@hubspotpartners.com",
    "country": "United States",
    "availableDates": [
    "2017-05-04",
    "2017-05-09"
    ]
  },
  {
    "firstName": "Crystal",
    "lastName": "Brenna",
    "email": "cbrenna@hubspotpartners.com",
    "country": "Ireland",
    "availableDates": [
    "2017-04-27",
    "2017-04-29",
    "2017-04-30"
    ]
  },
  {
    "firstName": "Janyce",
    "lastName": "Gustison",
    "email": "jgustison@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-29",
    "2017-04-30",
    "2017-05-01"
    ]
  },
  {
    "firstName": "Tifany",
    "lastName": "Mozie",
    "email": "tmozie@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-28",
    "2017-04-29",
    "2017-05-01",
    "2017-05-04"
    ]
  },
  {
    "firstName": "Temple",
    "lastName": "Affelt",
    "email": "taffelt@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-28",
    "2017-04-29",
    "2017-05-02",
    "2017-05-04"
    ]
  },
  {
    "firstName": "Robyn",
    "lastName": "Yarwood",
    "email": "ryarwood@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-29",
    "2017-04-30",
    "2017-05-02",
    "2017-05-03"
    ]
  },
  {
    "firstName": "Shirlene",
    "lastName": "Filipponi",
    "email": "sfilipponi@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-30",
    "2017-05-01"
    ]
  },
  {
    "firstName": "Oliver",
    "lastName": "Majica",
    "email": "omajica@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-28",
    "2017-04-29",
    "2017-05-01",
    "2017-05-03"
    ]
  },
  {
    "firstName": "Wilber",
    "lastName": "Zartman",
    "email": "wzartman@hubspotpartners.com",
    "country": "Spain",
    "availableDates": [
    "2017-04-29",
    "2017-04-30",
    "2017-05-02",
    "2017-05-03"
    ]
  },
 
    ]
  }