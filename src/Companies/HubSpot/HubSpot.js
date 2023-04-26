function calculateDates(input, country) {        
  let obj = {};    
  //search for available partners within countries
  input.forEach(partner => {                    
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
      if (partners.length > attendees.length || (partners.length === attendees.length && key < startDate)) {        	
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



async function main() {
  const getUrl = "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=d38f08e9a8ceaa41086be76619e4";
  let input = await fetch(getUrl)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
        
  //console.log('input', input);
    
  let res = {
    "countries": []
  };
  // Get unique list of countries to iterate over
  let countries = new Set();
  input.partners.forEach(partner => {
    countries.add(partner.country);
  });
  countries = [...countries];
  //console.log('countries', countries);
  
  // Get the data set by countries    
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    const countryData = input.partners.filter(obj => obj.country === country);
    //console.log('country data', countryData);
    // Use date helper on the country data
    res.countries.push(calculateDates(countryData, country));        
  }
  
  console.log('res', res);
  
  const postUrl = "https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=d38f08e9a8ceaa41086be76619e4";
  
  const response = await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  })
  .then((response) => response.json())
  .then((data) => console.log(data)); 
  
  return res;
}

main();

