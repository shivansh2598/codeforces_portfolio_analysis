<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
    </script>
    <script src = "https://code.highcharts.com/highcharts.js"></script>  
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>z
<body>
        <div id = "container" style = "width: 1100px; height: 500px; margin: 0 auto"></div>
    <script type="text/javascript">
        $(document).ready(function() {  
            var array=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var arrlen;
            axios.get('http://codeforces.com/api/user.status?handle=Radewoosh&from=1&count=10000')
            .then(function (response) {   //here response is the object that has json 
            
              arrlen=response.data.result.length;
              
              for(let i=0;i<arrlen;i++)
              {
              var event2 = new Date();
              event2.setTime(response.data.result[i].creationTimeSeconds*1000);
              array[event2.getHours()]++;
              }

              var datasets11=[{
                name:"Questions solved",
                data:array
            }]


            var chart = {
               type: 'column'
            };
            var title = {
               text: 'Happy Coding Hours'   
            };
            var subtitle = {
               text: 'Source: Codeforces.com'  
            };
            var xAxis = {
                title:{
                    text:"Hours in std form from 00-24"
                },
               categories: ['00-01','01-02','02-03','03-04','04-05','05-06','06-07',
                  '07-08','08-09','09-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19','19-20','20-21','21-22','22-23','23-24'],
               crosshair: true
            };
            var yAxis= {
                title: {
                    text: 'No of questions'
                }
            };
            var tooltip = {
               headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
               pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style = "padding:0"><b>{point.y:.1f} question</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true
            };
            var plotOptions = {
               column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
                  pointStart:0,
               }
            };  
            var credits = {
               enabled: false
            };
            
         ;     
      
         var json = {};   
         json.chart = chart; 
         json.title = title;   
         json.subtitle = subtitle; 
         json.tooltip = tooltip;
         json.xAxis = xAxis;
         json.yAxis = yAxis;  
         json.series = datasets11;
         json.plotOptions = plotOptions;  
         json.credits = credits;
         $('#container').highcharts(json);

        
        

      })
            .catch(function (error) {
              console.log(error);
            })

        })
        



            







        
    </script>
</body>
</html>