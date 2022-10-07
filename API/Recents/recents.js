let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const heading = document.querySelector(".heading");
const list = document.querySelector(".list");

fetch("http://ergast.com/api/f1/current/last/results.json", requestOptions)
  .then(response => response.json())
  .then((result)=>{
    const newElmt = document.createElement("h1");
    newElmt.textContent = `${result.MRData.RaceTable.Races[0].raceName} : round ${result.MRData.RaceTable.Races[0].round}`;
    heading.appendChild(newElmt);

    printResult(result.MRData.RaceTable.Races[0].Results);
  })
  .catch(error => console.log('error', error));

function printResult(result) {
    // console.log(result);
    result.forEach(i => {
      const newElmt = document.createElement("a");
      newElmt.href = i.Constructor.url;
      newElmt.target = "_blank";

      newElmt.innerHTML = `
        <div class="driver">
          <div class="name">
            <h1>${i.Driver.givenName} <span>${i.Driver.familyName}</span></h1>
          </div>
          <div>${i.Constructor.constructorId}</div>
          <div class="number">${i.Driver.permanentNumber}</div>
          <div class="country">${i.Driver.nationality}</div>
        </div>
      `;

      // console.log(i);

      list.appendChild(newElmt);
    });
}