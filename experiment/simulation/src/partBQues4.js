var timerMasterJson = {};
var resultJson = {};
var finB4 = 0;

function ques4(){
	console.log("que 4");
	seconds = 0;
	 var condTemp = getRandomNumber(70, 90);
	 var waterTemp = getRandomNumber(20, 30);
	 var steamMassFlow = getRandomNumber(15, 25);
	 var htc = getRandomNumber(2200, 2500);
	 var wfr = getRandomNumber(300, 600);
	
	var label = `During routine operation of a steam-water heat exchanger, it is observed that the condensate temperature is `+condTemp+`<sup>o</sup>C.
	This indicates that the steam has fully condensed and the condensate has been subcooled. Water is being heated from `+waterTemp+`<sup>o</sup>C
You suspect that fouling on the water side is causing reduced performance. The clean overall heat transfer coefficient is known from design.`




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
               
           Steam saturation temperature = 136<sup>o</sup>C,<br>
    Condensate temperature = ${condTemp}<sup>o</sup>C,<br>
    Steam mass flow rate m<sub>steam</sub> = ${steamMassFlow} kg/hr,<br>
    Latent heat of steam h<sub>fg</sub> = 2.25 &times; 10<sup>6</sup> J/kg,<br>
    Specific heat of water, C<sub>p</sub> = 4184 J/kg.K,<br>
    Heat transfer area A = 0.19 m<sup>2</sup>,<br>
    Clean overall heat transfer coefficient U<sub>clean</sub> = ${htc} W/m<sup>2</sup>.K,<br>
    T<sub>feed</sub> = `+waterTemp+`<sup>o</sup>C,<br>
    Water flow rate = ${wfr} L/h
                 </span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 500px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
  
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate the total heat transferred from the steam to water Q :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="qVal" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit51"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "toutDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate T<sub>out</sub> :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="tout" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit52"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "logDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Now calculate the log mean temperature difference (LMTD) &Delta;T<sub>LM</sub> :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="logMean" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit54"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "uDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate U<sub>fouled</sub>  :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="uFould" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit55"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "rfDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate fouling resistance R<sub>f</sub> (calculate upto 6 decimal places) :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="rf" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
      <button type="submit" class="btn btn-secondary"  id="submit56"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
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
	
	var qVal;
	var id = 1;
	var toVal;
    var tlmVal;
     var ufVal;
     var rfVal;
     
//     Q = U_fouled * SA * delta Tlm

$("#result").click(function() {
		resultJson.finB4Comp = finB4;
		console.log(resultJson);
		
		timerMasterJson.finalB4PartTime = $("#counter").text();
		console.log(timerMasterJson);
		updateCounter();
		result4();
	})
     
     $("#submit56").click(function(){
	   
	   var firstTerm = 1/ufVal;
	   var secTerm = 1/htc;
	   
	   rfVal = parseFloat(firstTerm)-parseFloat(secTerm);
	   rfVal = rfVal.toFixed(6);
	   rfVal = parseFloat(rfVal);
	   
	   var rfValEnter = $("#rf").val();
		
		if (rfValEnter == "" || rfValEnter <= 0) {

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
			
			rfValEnter = parseFloat($("#rf").val());
			
			if (id <= 3) {

				if (rfValEnter == rfVal) {

					$("#submit56").prop("disabled", true);
					$("#rf").prop("disabled", true);
//					$("#rfDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (rfValEnter != rfVal) {
					finB4++;
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
                finB4++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/rf.png' class='img-fluid' 
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

				if (rfValEnter == rfVal) {

				  $("#submit56").prop("disabled", true);
					$("#rf").prop("disabled", true);
//					$("#rfDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + rfVal,
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
     
    $("#submit55").click(function(){
	var deno = 0.19*tlmVal;
	ufVal = (qVal/deno).toFixed(2);
	ufVal = parseFloat(ufVal);
	
	var ufValEnter = $("#uFould").val();
		
		if (ufValEnter == "" || ufValEnter <= 0) {

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
			
			ufValEnter = parseFloat($("#uFould").val());
			
			if (id <= 3) {

				if (ufValEnter == ufVal) {

					$("#submit55").prop("disabled", true);
					$("#uFould").prop("disabled", true);
					$("#rfDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (ufValEnter != ufVal) {
					finB4++;
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
                finB4++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/uf.png' class='img-fluid' 
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

				if (ufValEnter == ufVal) {

				   $("#submit55").prop("disabled", true);
					$("#uFould").prop("disabled", true);
					$("#rfDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + ufVal,
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
        
    $("#submit54").click(function(){
	 var a = 136-toVal;
	 var b = condTemp-waterTemp;
	 
	 var num = parseFloat(a)-parseFloat(b);
	 var deno = Math.log(a/b);
	 
	 tlmVal = (num/deno).toFixed(2);
	 tlmVal = parseFloat(tlmVal);
	 
	 var tlmValEnter = $("#logMean").val();
		
		if (tlmValEnter == "" || tlmValEnter <= 0) {

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
			
			tlmValEnter = parseFloat($("#logMean").val());
			
			if (id <= 3) {

				if (tlmValEnter == tlmVal) {

					$("#submit54").prop("disabled", true);
					$("#logMean").prop("disabled", true);
					$("#uDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (tlmValEnter != tlmVal) {
					finB4++;
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
                finB4++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/dtlm.png' class='img-fluid' 
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

				if (tlmValEnter == tlmVal) {

				   $("#submit54").prop("disabled", true);
					$("#logMean").prop("disabled", true);
					$("#uDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + tlmVal,
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
    
	
	$("#submit52").click(function(){
		var tmp = wfr/3600;
		 
		var deno = tmp*4184;
		var secondTerm = (qVal/deno).toFixed(2);
		toVal = parseFloat(waterTemp)+parseFloat(secondTerm);
		toVal = toVal.toFixed(2);
		toVal = parseFloat(toVal);
		
		var toValEnter = $("#tout").val();
		
		if (toValEnter == "" || toValEnter <= 0) {

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
			
			toValEnter = parseFloat($("#tout").val());
			
			if (id <= 3) {

				if (toValEnter == toVal) {

					$("#submit52").prop("disabled", true);
					$("#tout").prop("disabled", true);
					$("#logDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (toValEnter != toVal) {
					finB4++;
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
                finB4++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/toFor.png' class='img-fluid' 
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

				if (toValEnter == toVal) {

				   $("#submit52").prop("disabled", true);
					$("#tout").prop("disabled", true);
					$("#logDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + toVal,
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
	
	$("#submit51").click(function(){
		
		var temp = steamMassFlow/3600;
		
		var firstTerm = temp*(2.25*(Math.pow(10,6)));
		var secondTerm = temp*4184*(136-condTemp);
		qVal = parseFloat(firstTerm)+parseFloat(secondTerm);
		qVal = qVal.toFixed(2);
		qVal = parseFloat(qVal);
		
		var qValEnter = $("#qVal").val();
		
		if (qValEnter == "" || qValEnter <= 0) {

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
			
			qValEnter = parseFloat($("#qVal").val());
			
			if (id <= 3) {

				if (qValEnter == qVal) {

					$("#submit51").prop("disabled", true);
					$("#qVal").prop("disabled", true);
					$("#toutDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qValEnter != qVal) {
					finB4++;
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
                finB4++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qForm.png' class='img-fluid' 
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

				if (qValEnter == qVal) {

				    $("#submit51").prop("disabled", true);
					$("#qVal").prop("disabled", true);
                    $("#toutDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qVal,
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