var data=[];

console.log("it works");

$(document).ready(function(){
    $('.submit').click(function(event){
        var rate=0;
        event.preventDefault();
        var email=$(".email").val();
        for(i=1;i<=5;i++){
            var str="#"+i.toString();
        if($(str).prop("checked")==true){
            rate=i;
        };}
        console.log(email);
        console.log(rate);
        currentdata=[email,rate.toString()];
        data.push(currentdata);
        console.log(data);
    })
})

function download_csv() {
     var csv = 'Email,Rating\n';
     data.forEach(function(row) {
             csv += row.join(',');
             csv += "\n";
 });
 
     console.log(csv);
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     hiddenElement.download = 'people.csv';
     hiddenElement.click();
}
