
function result(){
	console.log(resultJson);
	console.log(timerMasterJson);
	 $("#ecalculations").html("");
	$("#startBtn,#getValues,#counter").prop("hidden",true);
	$("#report").prop("hidden",false);
	$("#upperdiv").prop("hidden",true);
	$("#Header").html("<center><span >Energy Balance Sheet</span></center>");
	
	htm=''
	+'<div class="container-fluid" style="margin-top:50px;">'
	  
	+' <!-- Title -->'
 
	+'  <h3 class="text-center heading P-5" style="background-color: #384d59;font-size: 30px; font-weight: 600;">Energy Balance Sheet</h3>'
	
	+'<div class="row mb-3" id="divMis" style="background-color: #384d59; padding: 5px; display: flex; justify-content: center;">'
	+'<div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">'
	+'<span style="color: white;font-weight: bold; font-size: 22px;">Enter Name:</span>'
	+'<input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">'
	+'<label id="dateTime" style="color:#fff;"></label>'
	
	+'  </div>'
	+'</div>'
 
	+' <!-- Competency Table -->'
	+' <div class="box">'
	+' <div class="row">'
	+'  <div class="col-sm-6">'
	+' <table class="table table-bordered status-table">'
	+'    <thead>'
	+'     <tr>'
	+'        <th>Competency </th>'
	+'        <th>Status</th>'
	+'        <th>Time</th>'
	+'      </tr>'
	+'    </thead>'
	+'   <tbody>'
	
	+'      <tr>'
	+'       <td><b>Boiler Calculations</b></td>'
	+'        <td id="DiSin">'
	+'		</td>'
	+'        <td id="DiSinTimer">'
	+'       </td>'
	+'     </tr>'
	
	+'      <tr>'
	+'        <td> <b>Heat Exchanger Water Side Calculations</b></td>'
	+'        <td id="DiSor">'
	+'		</td>'
	+'        <td id="DiSorTimer">'
	+'       </td>'
	+'		</tr>'
	
	+'      <tr>'
	+'        <td> <b>Heat Exchanger Steam Side Calculations</b></td>'
	+'        <td id="DoSin">'
	+'		</td>'
	+'        <td id="DoSinTimer">'
	+'      </td>'
	+'     </tr>'
	
	+'      <tr>'
	+'        <td> <b>Oulet Temprature of Water Calculations</b></td>'
	+'        <td id="DoSor">'
	+'		</td>'
	+'        <td id="DoSorTimer">'
	+'       </td>'
	+'     </tr>'
	
//	+'      <tr>'
//	+'        <td> <b>AI Boiler</b></td>'
//	+'        <td id="AiBoi">'
//	+'		</td>'
//	+'        <td id="AiBoiTimer">'
//	+'       </td>'
//	+'     </tr>'
//	
//	+'      <tr>'
//	+'        <td> <b>AO Boiler</b></td>'
//	+'        <td id="AoBoi">'
//	+'		</td>'
//	+'        <td id="AoBoiTimer">'
//	+'       </td>'
//	+'     </tr>'
	
    +'        <td id="instrTimer">'	
	+'       </td>'
	+'      </tr>'
	       
    +' </tbody>'
    +' </table>'
    +' </div>'
    +' <div class="col-sm-6" id="graphDiv">'
	
    +' </div>'
    +'</div>'
    +'</div>'
    +' <!-- First Row -->'
    +' <div class="row">'
    +' <div class="col-md-4" >'
    +' <div class="box">'
    +' <h5 class="section-title sectionStyle" >Boiler Calculations</h5>'
    +' <div class="table-container">'
    +' <table style="border-style: solid;">'
    +' <tr class="trStyle">'
    +' <th>Expected</th>'
    +' <th>Actual</th>'
    +' </tr>'
    +' <tr>'
    +' <td><b> <center><strong class="correct">4</strong> </center></b></td>'
	+'           <td><b> <center><strong class="wrong">'+resultJson.energyMass+'</strong> </center></b></td>'
	+'         </table>'
    +' </div>'
    +' </div>'
    +' </div>'
    +' <div class="col-md-4" >'
    +' <div class="box">'
    +' <h5 class="section-title sectionStyle" >Heat Exchanger Water Side Calculations</h5>'
    +' <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						  <td><b class="correct">7</b></td>'
    +'                       <td><b class="wrong">'+resultJson.heatExWater+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
	+'  <div class="col-md-4" >'
    +' <div class="box">'
    +' <h5 class="section-title sectionStyle" >Heat Exchanger Steam Side Calculations</h5>'
    +' <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						 <td><b class="correct">6</b></td>'
	+'                       <td><b class="wrong">'+resultJson.steamEx+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	+'  <div class="col-md-4" >'
    +' <div class="box">'
    +' <h5 class="section-title sectionStyle" >Oulet Temprature of Water Calculations</h5>'
    +' <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						  <td><b class="correct">4</b></td>'
	+'                       <td><b class="wrong">'+resultJson.finAComp+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
//	+'  <div class="col-md-4" >'
//    +' <div class="box">'
//    +' <h5 class="section-title sectionStyle" >Configuration in Wiring Count AI</h5>'
//    +' <div class="table-container">'
//	+'       <table style="border-style: solid;">'
//	+'          <tr class="trStyle">'
//	+'            <th>Expected</th>'
//	+'            <th>Actual</th>'
//	+'          </tr>'
//	+'          <tr>'
//	+'						 <td><b class="correct">1</b></td>'
//	+'                       <td><b class="wrong">'+resultJson.AiBoiler+'</b></td>'
//	+'          </tr>'
//	+'        </table>'
//	+'      </div>'
//	+'     </div>'
//	+'   </div>'
//	+'  <div class="col-md-4" >'
//    +' <div class="box">'
//    +' <h5 class="section-title sectionStyle" >Configuration in Wiring Count AO</h5>'
//    +' <div class="table-container">'
//	+'       <table style="border-style: solid;">'
//	+'          <tr class="trStyle">'
//	+'            <th>Expected</th>'
//	+'            <th>Actual</th>'
//	+'          </tr>'
//	+'          <tr>'
//	+'						  <td><b class="correct">1</b></td>'
//	+'                       <td><b class="wrong">'+resultJson.AoBoiler+'</b></td>'
//	+'          </tr>'
//	+'        </table>'
//	+'      </div>'
//	+'     </div>'
//	+'   </div>'
 
	+'</div>'
 
 
	+'<!-- Graphs Section -->'
	+'<div class="row">'
    +'</div>'
    +'<!-- Pie Chart Section -->'
    +'<div class="row">'
      
    +'</div>'
 
    $("#ecalculations").html(htm);
	
	var energy=parseFloat((1/resultJson.energyMass)*100);
	var heat=parseFloat((1/resultJson.heatExWater)*100);
	var steam=parseFloat((1/resultJson.steamEx)*100);
	var finA=parseFloat((1/resultJson.finAComp)*100);
//	var AiBoi=parseFloat((1/resultJson.AiBoiler)*100);
//	var AoBoi=parseFloat((1/resultJson.AoBoiler)*100);
	
	if(energy>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
	 $("#DiSin").html(str);
		 var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+(timerMasterJson.energyTime)+'</strong> </center>'
	+'     		 </div>'
	 $("#DiSinTimer").html(str1);
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +' <center><strong>Not Attained</strong> </center>'
		     +' </div>'
		     $("#DiSin").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+(timerMasterJson.energyTime)+'</strong> </center>'
				+'     		 </div>'
							     $("#DiSinTimer").html(str1);
 
		}
		
	if(heat>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#DoSin").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.heatExWaterTime+'</strong> </center>'
				+'     		 </div>'
							     $("#DoSinTimer").html(str1);
     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +' <center><strong>Not Attained</strong> </center>'
		     +' </div>'
		     $("#DoSin").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.heatExWaterTime+'</strong> </center>'
				+'     		 </div>'
							     $("#DoSinTimer").html(str1);
		}
		
	if(steam>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#DoSor").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+(timerMasterJson.steamTime)+'</strong> </center>'
				+'     		 </div>'
							     $("#DoSorTimer").html(str1);
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +' <center><strong>Not Attained</strong> </center>'
		     +' </div>'
		     $("#DoSor").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+(timerMasterJson.steamTime)+'</strong> </center>'
				+'     		 </div>'
							     $("#DoSorTimer").html(str1);
		}
			
	if(finA>=60 ){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#DiSor").html(str);
	var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+(timerMasterJson.finalAPartTime)+'</strong> </center>'
	+'     		 </div>'
	 $("#DiSorTimer").html(str1);
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +' <center><strong>Not Attained</strong> </center>'
		     +' </div>'
		     $("#DiSor").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+(timerMasterJson.finalAPartTime)+'</strong> </center>'
				+'     		 </div>'
							     $("#DiSorTimer").html(str1);
		}
	
//	if(AoBoi>=60 ){
//		 var str=''
//	 +'	     	<div class="alert alert-success attainedText">'
//	+'    			 <center><strong> Attained</strong> </center>'
//	+'     		 </div>'
//		     $("#AoBoi").html(str);
//	var str1=''
//	+'	     	<div class="alert alert-success attainedText">'
//	+'    	   <center><strong> '+(timerMasterJson.AoBoiler)+'</strong> </center>'
//	+'     		 </div>'
//	 $("#AoBoiTimer").html(str1);
//	}
//	else
//		{
//		 var str=''
//			 +' <div class="alert alert-danger attainedText">'
//		    +' <center><strong>Not Attained</strong> </center>'
//		     +' </div>'
//		     $("#AoBoi").html(str);
//		 var str1=''
//				+'	     	<div class="alert alert-danger attainedText">'
//				+'    	   <center><strong> '+(timerMasterJson.AoBoiler)+'</strong> </center>'
//				+'     		 </div>'
//							     $("#AoBoiTimer").html(str1);
//		}
//		
//		if(AiBoi>=60 ){
//		 var str=''
//	 +'	     	<div class="alert alert-success attainedText">'
//	+'    			 <center><strong> Attained</strong> </center>'
//	+'     		 </div>'
//		     $("#AiBoi").html(str);
//	var str1=''
//	+'	     	<div class="alert alert-success attainedText">'
//	+'    	   <center><strong> '+(timerMasterJson.AiBoiler)+'</strong> </center>'
//	+'     		 </div>'
//	 $("#AiBoiTimer").html(str1);
//	}
//	else
//		{
//		 var str=''
//			 +' <div class="alert alert-danger attainedText">'
//		    +' <center><strong>Not Attained</strong> </center>'
//		     +' </div>'
//		     $("#AiBoi").html(str);
//		 var str1=''
//				+'	     	<div class="alert alert-danger attainedText">'
//				+'    	   <center><strong> '+(timerMasterJson.AiBoiler)+'</strong> </center>'
//				+'     		 </div>'
//							     $("#AiBoiTimer").html(str1);
//		}
		
		
	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        backgroundColor: '#f0f0f0'
	    },
		exporting: { enabled: false },
		credits: { enabled: false},
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	    	 enabled: false,
        style: {
            fontFamily: 'Arial, sans-serif', // Set tooltip font family
            fontSize: '12px',                    // Set tooltip font size
            color: '#000',                    // Set tooltip text color
            fontWeight: 'bold',                  // Optional: bold text
            backgroundColor: '#000'           // Optional: tooltip background color
        },
        formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y}%`;
        }
    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                style: {
	                    color: '#000',
//	                font-family: 'Arial, sans-serif',
	                fontSize: '14px',
	                /* font-weight: bold; */
	                fill: '#000',
	                },
	                formatter: function () {
	                    return `<span>${this.point.name}: ${this.percentage.toFixed(2)}%</span>`;
	                }
	            }
	        }
	    },
 
	    series: [{
	        name: '',
	        data: [
	            { name: 'Boiler Calculations', y: energy },
	            { name: 'Heat Exchanger Water Side Calculations', y: heat },
	            { name: 'Heat Exchanger Steam Side Calculations', y: steam },
	            { name: 'Oulet Temprature of Water CalculationsE', y: finA },
//	            { name: 'AI BOILER', y: AiBoi },
//	            { name: 'AO BOILER', y: AoBoi }
	          
	        ]
	    }]
	});
 
}
 
 
 