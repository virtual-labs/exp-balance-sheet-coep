var timerMasterJson = {};
var resultJson = {};
var finB5 = 0;

function ques5(){
	console.log("que 5");
	seconds = 0;
	
	 var waterTemp = getRandomNumber(20, 30);
	 var waterTempMax = getRandomNumber(45, 60);
	 var cond = getRandomNumber(80, 90);
	 var wfr = getRandomNumber(300, 600);
	 
	var label = `A heat exchanger is used to heat water from `+waterTemp+` to `+waterTempMax+`<sup>o</sup>C using saturated steam at 136<sup>o</sup>C.
				Currently, the condensate is observed at `+cond+`<sup>o</sup>C, indicating that the steam is not fully utilized ,
				subcooling is incomplete and part of the steam's sensible energy is wasted.
				`




	$("#statement").html(label);
	
	var htm = `
	<div class="row justify-content-center" style="margin-top:-20px;display:flex;">
	<div class="col-md-8 instruction-box1 " style="display:flex; margin-bottom: 30px;">
	<div class="col-5 instruction-box1" style="overflow-y: auto; height: 500px;">
	 <center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">GIVEN   </span></center>
     <span class="fw-bold" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px;" id = "exchangerStatement"> 
               
          There is no fouling the heat exchanger is in good condition.<br>
To improve energy efficiency, the adjust the steam mass flow rate should be adjusted such that:<br>
-	All steam condenses, and<br>
-	Condensate exits at 60<sup>o</sup>C, utilizing both latent heat and subcooling heat.<br>
 m<sub>water</sub> = `+wfr+` L/h<br>
 C<sub>p</sub> = 4184 J/kg.K <br>
 h<sub>fg</sub> = 2.25 &times; 10<sup>6</sup> J/kg
                 </span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 500px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
  
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate heat required by the water to get t<sub>out</sub> at 60<sup>o</sup>C Q<sub>req</sub> (W):   </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="qReqVal" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit57"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "msDiv">
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;"> Calculate m<sub>steam</sub> by energy balance equation (kg):</label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="msVal" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit59"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
          
    <div class="row justify-content-center"  id="nextque" style="margin-top:20px;" hidden>
	<div class="col-md-8 instruction-box1 text-center">
	<button type="submit5" class="btn btn-primary" id="result" style="height:32px;width:80px;margin-top: 0px; margin-left:10px;">Result</button>
	</div>
	</div>
          
	</div>
	</div>	
	</div>`
	
	
	
	$("#ecalculations").html(htm);
//	: Qreq = m_water * Cp_water * deltaT
   
   var qreq;
   var id = 1;
   var msteamVal;
   
   $("#result").click(function() {
		resultJson.finB5Comp = finB5;
		console.log(resultJson);
		
		timerMasterJson.finalB5PartTime = $("#counter").text();
		console.log(timerMasterJson);
		updateCounter();
		result5();
	})
   
    $("#submit59").click(function(){
	
	var deno1 = 2.25*(Math.pow(10,6));
	var deno2 = 4184*(136-60);
	var deno = parseFloat(deno1)+parseFloat(deno2);
	 	
	msteamVal = ((qreq/deno)*3600).toFixed(2);
	
	msteamVal = parseFloat(msteamVal);
	
	 var msteamValEnter = $("#msVal").val();
        
        if (msteamValEnter == "" || msteamValEnter <= 0) {

			Swal.fire({
				icon: 'error',
				title: 'Enter the value',
				confirmButtonText: 'Ok',
				customClass: {
					icon: 'custom-icon',
					popup: 'custom-popup',
					title: 'custom-title',
					confirmButton: 'custom-confirm-button',
					cancelButton: 'custom-cancel-button',
				}
			});

		} else {
			
			msteamValEnter = parseFloat($("#msVal").val());
			
			if (id <= 3) {

				if (msteamValEnter == msteamVal) {

					$("#submit59").prop("disabled", true);
					$("#msVal").prop("disabled", true);
//					$("#msDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (msteamValEnter != msteamVal) {
					finB5++;
					Swal.fire({
						icon: 'error',
						title: 'Incorrect value',
						confirmButtonText: 'Try Again',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});

				}


			} else if (id == 4) {
                finB5++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qr.png' class='img-fluid' 
                         style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
               </div>`,
					width: '40%',
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});

			} else {

				if (msteamValEnter == msteamVal) {

				$("#submit59").prop("disabled", true);
					$("#msVal").prop("disabled", true);
//					$("#msDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
					
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + msteamVal,
						confirmButtonText: 'Try Again',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});
					
              $("#nextque").prop("hidden", false);

				}

			}
			id++;
		}
	
})
   
   $("#submit57").click(function(){
	    var tmp = wfr/3600;
        var dt =  waterTempMax-waterTemp; 
        qreq =   (tmp*4184*dt).toFixed(2);
        qreq = parseFloat(qreq);
        
        var qreqEnter = $("#qReqVal").val();
        
        if (qreqEnter == "" || qreqEnter <= 0) {

			Swal.fire({
				icon: 'error',
				title: 'Enter the value',
				confirmButtonText: 'Ok',
				customClass: {
					icon: 'custom-icon',
					popup: 'custom-popup',
					title: 'custom-title',
					confirmButton: 'custom-confirm-button',
					cancelButton: 'custom-cancel-button',
				}
			});

		} else {
			
			qreqEnter = parseFloat($("#qReqVal").val());
			
			if (id <= 3) {

				if (qreqEnter == qreq) {

					$("#submit57").prop("disabled", true);
					$("#qReqVal").prop("disabled", true);
					$("#msDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qreqEnter != qreq) {
					finB5++;
					Swal.fire({
						icon: 'error',
						title: 'Incorrect value',
						confirmButtonText: 'Try Again',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});

				}


			} else if (id == 4) {
                finB5++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/ms.png' class='img-fluid' 
                         style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
               </div>`,
					width: '40%',
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});

			} else {

				if (qreqEnter == qreq) {

				$("#submit57").prop("disabled", true);
					$("#qReqVal").prop("disabled", true);
					$("#msDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qreq,
						confirmButtonText: 'Try Again',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});


				}

			}
			id++;
		}
        
  	
 })

}