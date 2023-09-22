let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const heading = document.querySelector(".heading");
const list = document.querySelector(".list");

fetch("http://ergast.com/api/f1/2022.json", requestOptions)
  .then(response => response.json())
  .then((result)=>{
    // console.log(result);
    const newElmt = document.createElement("h1");
    newElmt.textContent = `Schedules for season: ${result.MRData.RaceTable.season}`;

    heading.appendChild(newElmt);

    printResult(result.MRData.RaceTable.Races);
  })
  .catch(error => console.log('error', error));

function printResult(result) {
    // console.log(result);

    result.forEach(i => {
      const newElmt = document.createElement("a");
      newElmt.href = i.url;
      newElmt.target = "_blank";

      newElmt.innerHTML = `
        <div class="driver">
          <div class="name">
            <h1>${i.raceName} <span>Round :${i.round}</span></h1>
          </div>
          <div class="number">Date: ${i.date}</div>
          <div class="country">Time: ${i.time}</div>
        </div>
      `;

      // console.log(i);

      list.appendChild(newElmt);
    });
}