var timerMasterJson = {};
var resultJson = {};
var finB = 0;
function ques1() {
	console.log("que 1");
seconds = 0;
	incPer = getRandomNumber(10, 20);
	toutTemp = getRandomNumber(50, 60);
	mWater = getRandomNumber(400, 600);

	var label = "If the heat exchanger capacity needs to be increased by " + incPer + "%, "
		+ "and assuming the overall heat transfer coefficient and inlet conditions remain unchanged,<br>"
		+ "a. What is the new heating requirement <br>"
		+ "b. What should be the new electrical power (Q<sub>electric</sub>) rating of the boiler? <br>"
		+ "<b>Assumption :</b> Temperature inside the boiler in running stage = 80<sup>o</sup>C"


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
    word-spacing: 1px;" id = "exchangerStatement"> Initial steam flow rate : 30 kg/hr, <br>
					Latent heat of steam : 2173700 J/kg,<br>
					Boiler efficiency : 80%,<br>
					Existing Q<sub>electric</sub> = 18kW,<br>
					Temperature of feedwater (t<sub>feed</sub>) = 28<sup>o</sup>C,<br> 
					Outlet temperature of water T<sub>out</sub> = `+ toutTemp + ` <sup>o</sup>C,<br> 
					Flow rate of water in heat exchanger  m<sub>water</sub> =  `+ mWater + ` lph,<br> 
					Specific heat capacity of water C<sub>p</sub> = 4184 J/kg<sup>o</sup>C,<br> 
					T<sub>steam</sub> = 135<sup>o</sup>C, <br> where
					  h<sub>g</sub> = 2726.9 kJ/kg, h<sub>fg</sub> = 2159.1 kJ/kg,<br>
					  Enthalpy of water at 80<sup>o</sup>C is  h<sub>f</sub> = 335.01 kJ/kg,<br>
					T<sub>condensate</sub> = 60<sup>o</sup>C<br> 
               
                 </span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 500px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
  
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Temperature of outlet water when capacity is increased by `+ incPer + `% T<sub>out<sub>new</sub></sub> (<sup>o</sup>C) :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="toutNew" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit25"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "mwaterDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate flow rate of water when capacity is increased by `+ incPer + `% m<sub>water<sub>new</sub></sub>  :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="mwaterNew" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit27"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
     <div class="row justify-content-center mt-5" style="display:flex;" id = "qhx1" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate required heat transfer rate Q<sub>hx</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="qhx11" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit28"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "sfrDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate required steam flow rate (J) :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="sfr" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
   
    <button type="submit" class="btn btn-secondary"  id="submit29"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
   
     
     <div class="row justify-content-center mt-5" style="display:flex;" id = "electricDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate new electric power rating of Boiler (kW): </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="electric" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
   
    <button type="submit" class="btn btn-secondary"  id="submit30"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
   
        <div class="row justify-content-center"  id="nextl1" style="margin-top:20px;" hidden>
	<div class="col-md-8 instruction-box1 text-center">
	<button type="submit5" class="btn btn-primary" id="ques2" style="height:32px;width:80px;margin-top: 0px; margin-left:10px;">Result</button>
	</div>
	</div>
      
	</div>
	</div>	
	</div>`

	$("#ecalculations").html(htm);

	var toutNew;
	var id = 1;
	var mWaterNew;
	var qhx1;
	var msteamVal;
	var qelectric;

	$("#ques2").click(function() {
		resultJson.finBComp = finB;
		console.log(resultJson);
		
		timerMasterJson.finalBPartTime = $("#counter").text();
		console.log(timerMasterJson);
		updateCounter();
	    result()
	})

	$("#submit30").click(function() {
		var num = msteamVal * (2726.9 - 335.01) * 1000;
		var deno = 3600 * 1000 * (80 / 100);
		qelectric = (num / deno).toFixed(2);
		qelectric = parseFloat(qelectric);

		var qelectricEnter = $("#electric").val();

		if (qelectricEnter == "" || qelectricEnter <= 0) {

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
			qelectricEnter = parseFloat($("#electric").val());
			if (id <= 3) {

				if (qelectricEnter == qelectric) {

					$("#submit30").prop("disabled", true);
					$("#electric").prop("disabled", true);
					//					$("#electricDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qelectricEnter != qelectric) {
					finB++;
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
				finB++;
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/electricFormula.png' class='img-fluid' 
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

				if (qelectricEnter == qelectric) {

					$("#submit30").prop("disabled", true);
					$("#electric").prop("disabled", true);
					//					$("#electricDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qelectric,
						confirmButtonText: 'Try Again',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});

					$("#nextl1").prop("hidden", false);


				}

			}
			id++;
		}

	})


	$("#submit29").click(function() {
		var deno = (2159.1 * 1000) + 4184 * (135 - 60);
		msteamVal = (qhx1 / deno).toFixed(2);
		msteamVal = parseFloat(msteamVal);

		var msteamValEnter = $("#sfr").val();

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
			msteamValEnter = parseFloat($("#sfr").val());
			if (id <= 3) {

				if (msteamValEnter == msteamVal) {

					$("#submit29").prop("disabled", true);
					$("#sfr").prop("disabled", true);
					$("#electricDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (msteamValEnter != msteamVal) {
					finB++;
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
				finB++;
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/msteam1Formula.png' class='img-fluid' 
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

					$("#submit29").prop("disabled", true);
					$("#sfr").prop("disabled", true);
					$("#electricDiv").prop("hidden", false);
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


				}

			}
			id++;
		}

	})




	$("#submit28").click(function() {
		qhx1 = mWaterNew * 4184 * (toutNew - 28);
		qhx1 = qhx1.toFixed(2);
		qhx1 = parseFloat(qhx1);

		var qhx1Enter = $("#qhx11").val();

		if (qhx1Enter == "" || qhx1Enter <= 0) {

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
			qhx1Enter = parseFloat($("#qhx11").val());
			if (id <= 3) {

				if (qhx1Enter == qhx1) {

					$("#submit28").prop("disabled", true);
					$("#qhx11").prop("disabled", true);
					$("#sfrDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qhx1Enter != qhx1) {
					finB++;
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
				finB++;
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qhx1Formula.png' class='img-fluid' 
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

				if (qhx1Enter == qhx1) {

					$("#submit28").prop("disabled", true);
					$("#qhx11").prop("disabled", true);
					$("#sfrDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qhx1,
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


	$("#submit27").click(function() {
		var perCon = incPer / 100;
		mWaterNew = mWater + (perCon * mWater);
		mWaterNew = mWaterNew.toFixed(2);
		mWaterNew = parseFloat(mWaterNew);

		var mWaterNewEnter = $("#mwaterNew").val();

		if (mWaterNewEnter == "" || mWaterNewEnter <= 0) {

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
			mWaterNewEnter = parseFloat($("#mwaterNew").val());
			if (id <= 3) {

				if (mWaterNewEnter == mWaterNew) {

					$("#submit27").prop("disabled", true);
					$("#mwaterNew").prop("disabled", true);
					$("#qhx1").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (mWaterNewEnter != mWaterNew) {
					finB++;
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
				finB++;
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/mwaterNewFormula.png' class='img-fluid' 
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

				if (mWaterNewEnter == mWaterNew) {

					$("#submit27").prop("disabled", true);
					$("#mwaterNew").prop("disabled", true);
					$("#qhx1").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + mWaterNew,
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


	$("#submit25").click(function() {

		var perCon = incPer / 100;
		toutNew = toutTemp + (perCon * toutTemp);
		toutNew = toutNew.toFixed(2);
		toutNew = parseFloat(toutNew);

		var toutNewEnter = $("#toutNew").val();

		if (toutNewEnter == "" || toutNewEnter <= 0) {

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
			toutNewEnter = parseFloat($("#toutNew").val());
			if (id <= 3) {

				if (toutNewEnter == toutNew) {

					$("#submit25").prop("disabled", true);
					$("#toutNew").prop("disabled", true);
					$("#mwaterDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (toutNewEnter != toutNew) {
					finB++;
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
				finB++;
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/toutNew.png' class='img-fluid' 
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

				if (toutNewEnter == toutNew) {

					$("#submit25").prop("disabled", true);
					$("#toutNew").prop("disabled", true);
					$("#mwaterDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + toutNew,
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