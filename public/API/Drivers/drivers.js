let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const list = document.querySelector(".list");

fetch("http://ergast.com/api/f1/2022/drivers.json", requestOptions)
  .then(response => response.json())
  .then((response) =>{
    // console.log(response);
    const result = response.MRData.DriverTable.Drivers;
    console.log(result);

    printResult(result);
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
            <h1>${i.givenName} <span>${i.familyName}</span></h1>
          </div>
          <div class="number">${i.permanentNumber}</div>
          <div class="country">${i.nationality}</div>
        </div>
      `;

      // console.log(i);

      list.appendChild(newElmt);
    });
}