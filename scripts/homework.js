let userObj = JSON.parse(localStorage.getItem("userData-loginv2"));
const isGuest = !!userObj.guest;

/*document.getElementById("iconlink").href = "./logos/logo.png";
document.title = "Homework - " + (userObj.GEPclass||userObj.mixedFC);*/


fetch("/nushweb/homework.json")
.then(function(w) { return w.json(); })
.then(function (homework) {
    console.log(homework)
    if (!isGuest) {

        let hwbody = document.getElementById("tbody")
        let now = new Date()
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        let userClasses = [userObj.GEPclass, userObj.mixedFC]
        for (j=0;j<homework.length;j++) {
            i = homework[j]
            console.log(i);
            let starttime = new Date(i.startdate[0], i.startdate[1]-1, i.startdate[2]);
            console.log(starttime);
            let endtime = new Date(i.enddate[0], i.enddate[1]-1, i.enddate[2]);
        
            //if (!userClasses.includes(i.classN)) continue
            
            row = document.createElement("tr")
            
            cell1 = document.createElement("td")
            cell2 = document.createElement("td")
            cell3 = document.createElement("td")
            cell4 = document.createElement("td")
        
            cell1.innerText = String(starttime.getDate()).padStart(2, "0") + "/" + String(starttime.getMonth()+1).padStart(2, "0") + " " + days[starttime.getDay()];
            cell2.innerText = i.subject
            cell3.innerText = i.title
            cell4.innerText = String(endtime.getDate()).padStart(2, "0") + "/" + String(endtime.getMonth()+1).padStart(2, "0") + " " + days[endtime.getDay()];
        
            row.appendChild(cell1)
            row.appendChild(cell2)
            row.appendChild(cell3)
            row.appendChild(cell4)
            
            hwbody.appendChild(row)
            if (starttime > now) {
                row.classList.add("upcoming")
            } else if (endtime < now) {
                row.classList.add("overdue")
            }
        }
    }
});
