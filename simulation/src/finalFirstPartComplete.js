//var qxVal = 19393.54;
//var hfgVal = 2165000;

function finalAComplete() {

//	msteemVal = 30;

//	hgTemp = getRandomNumber(130, 136);
//	wfRate = getRandomNumber(200, 800);
//	tfFeed = getRandomNumber(20, 28);

	var label = "Steam generating capacity of the boiler is 30 kg/hr at " + hgTemp + "<sup>o</sup>C and 3.5 bar pressure. "

		+ "Outlet water flow rate from heat exchanger is " + wfRate + " lit/hr. "
		+ "Temperature of feed water T<sub>feed</sub> is " + tfFeed + "<sup>o</sup>C"
		+ ". (C<sub>p</sub> = 4184 J/kg<sup>o</sup>C, "
		+ " Electric power given to boiler = 18 kW)"

	$("#statement").html(label);
//	heatVal = 2593.75;

	var tout = 60;

	var htm = `
	<div class="row justify-content-center" style="margin-top:-20px;display:flex;">
	<div class="col-md-8 instruction-box1 " style="display:flex; margin-bottom: 30px;">
	<div class="col-5 instruction-box1" style="overflow-y: auto; height: 500px;">
	 <center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">GIVEN   </span></center>
     <span class="fw-bold" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px;" id = "exchangerStatement"> Assuming T<sub>condensate</sub> = 60 <sup>o</sup>C,<br> 
                   Assume T<sub>surface</sub> = 129 <sup>o</sup>C,<br>
                   Expected T<sub>out</sub> for `+ wfRate + ` lit/hr = ` + tout + ` <sup>o</sup>C,<br>
                   Length of heat exchanger l = 3.8 m,<br>
                   m<sub>steam</sub> = `+ msteemVal + ` kg/hr,
                   <br>Density of condensate at 60<sup>o</sup>C rho<sub>condensate</sub> = 983 kg/m<sup>3</sup>, 
                 <br> Density of steam rho<sub>steam</sub> = 1.9 kg/m<sup>3</sup>,<br>
                
                  Dynamic viscosity of condensate &mu;<sub>u</sub> = 0.4658 &times; 10<sup>-3</sup> Pa.s, <br>
                  Thermal conductivity of condensate k<sub>condensate</sub> = 0.73 W/mK ,<br>
                  Acceleration due to gravity (g) = 9.81 m/s<sup>2</sup>,<br>
                  Density of water = 1000 kg/m<sup>2</sup>,<br>
                  Diameter of outer pipe = 0.03 m,<br>
                  Thermal conductivity of steel pipe (SS304) = 16.2 W/mK,<br>
                  Inner radius of inner pipe (r<sub>1</sub>) = 0.0079 m,<br>
                  Outer radius of inner pipe (r<sub>2</sub>) = 0.01067 m</span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 500px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
    <div class="row">
    <div class="col-6">
   <div class="row justify-content-center mt-5" style="display:flex;" >
        <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Q<sub>hx</sub> calculated = `+ qxVal + ` </label>
  </div>
  </div>
  <div class="col-6">
  <div class="row justify-content-center mt-5" style="display:flex;" >
        <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">h<sub>fg</sub> = `+ hfgVal + ` J </label>
  </div>
     </div>
     </div>
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Maximum possible heat from steam given Q<sub>steam</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="qsteam" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit21"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
     <div class="row justify-content-center mt-5" style="display:flex;" id="qactualDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Actual Energy transfer Q<sub>Actual</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="qactual" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit23"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
     </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id="tOutDiv" hidden>
    <div class="col-6 ">
   <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Temperature of outlet water T<sub>out</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="tout" style="width:100%; " class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit24"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
     
     <div class="row justify-content-center mt-5" style="display:flex;" id="flowDiv" hidden>
     <div class="col-6 ">
     <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Select the aprropriate to get T<sub>out</sub> to 60 <sup>o</sup>C :  </label>
     </div>
     <div class="col-4" style="display:flex;">
     <select name="" id="toutSel" style="width:100%; size="5";overflow-y: auto;">
						<option value="0">Select</option>
						<option value="1">Increase steam flow rate</option>
						<option value="2">Decrease steam flow rate</option>
						<option value="3">Maintain steam flow rate</option>
						</select>
	</div>
	<div class="col-2">				
     <button type="submit" class="btn btn-secondary"  id="submit25"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
     </div>
     </div>
      
	</div>
	</div>	
	</div>`

	$("#ecalculations").html(htm);

	var qsteam;
	var id = 1;
	var qactual;
	var toutCal;
	var toutFin;

	$("#submit25").click(function() {

		toutFin = $("#toutSel").val();

		if (toutFin != 0) {

			if (toutCal < 60 && toutFin == 1) {
				$("#submit25").prop("disabled", true);
				$("#toutSel").prop("disabled", true);
			} else if (toutCal > 60 && toutFin == 2) {
				$("#submit25").prop("disabled", true);
				$("#toutSel").prop("disabled", true);
			} else if (toutCal == 60 && toutFin == 3) {
				$("#submit25").prop("disabled", true);
				$("#toutSel").prop("disabled", true);
			} else {
				if (id <= 3) {
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
				} else {

					if (toutCal < 60) {
						Swal.fire({
							icon: 'success',
							title: 'Correct answer is : ' + "Increase steam flow rate",
							confirmButtonText: 'Try Again',
							customClass: {
								icon: 'custom-icon',
								popup: 'custom-popup',
								title: 'custom-title',
								confirmButton: 'custom-confirm-button',
								cancelButton: 'custom-cancel-button',
							}
						});
					} else if (toutCal > 60) {
						Swal.fire({
							icon: 'success',
							title: 'Correct answer is : ' + "Decrease steam flow rate",
							confirmButtonText: 'Try Again',
							customClass: {
								icon: 'custom-icon',
								popup: 'custom-popup',
								title: 'custom-title',
								confirmButton: 'custom-confirm-button',
								cancelButton: 'custom-cancel-button',
							}
						});
					} else if (toutCal == 60) {
						Swal.fire({
							icon: 'success',
							title: 'Correct answer is : ' + "Maintain steam flow rate",
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
			}

			id++;

		} else {

			Swal.fire({
				icon: 'error',
				title: 'Select the Appropriate',
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
	});


	$("#submit24").click(function() {

		var mWater = (wfRate / 3600);
		var deno = mWater * 4184;
		var div = (qactual / deno).toFixed(2);
		toutCal = parseFloat(tfFeed) + parseFloat(div);

		var toutCalEnter = $("#tout").val();

		if (toutCalEnter == "" || toutCalEnter <= 0) {

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
			toutCalEnter = parseFloat($("#tout").val());
			if (id <= 3) {

				if (toutCalEnter == toutCal) {

					$("#submit24").prop("disabled", true);
					$("#tout").prop("disabled", true);
					$("#flowDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (toutCalEnter != toutCal) {
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

				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/toutFormula.png' class='img-fluid' 
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

				if (toutCalEnter == toutCal) {

					$("#submit24").prop("disabled", true);
					$("#tout").prop("disabled", true);
					$("#flowDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + toutCal,
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

	$("#submit23").click(function() {
		qactual = Math.min(qsteam, qxVal);

		var qactualEnter = $("#qactual").val();

		if (qactualEnter == "" || qactualEnter <= 0) {

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
			qactualEnter = parseFloat($("#qactual").val());
			if (id <= 3) {

				if (qactualEnter == qactual) {

					$("#submit23").prop("disabled", true);
					$("#qactual").prop("disabled", true);
					$("#tOutDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qactualEnter != qactual) {
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

				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qactualFormula.png' class='img-fluid' 
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

				if (qactualEnter == qactual) {

					$("#submit23").prop("disabled", true);
					$("#qactual").prop("disabled", true);
					$("#tOutDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qactual,
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


	$("#submit21").click(function() {
		var firstTerm = msteemVal * hfgVal;
		var sub = hgTemp - 60;
		var secondTerm = msteemVal * 4184 * sub;
		qsteam = parseFloat(firstTerm) + parseFloat(secondTerm);

		var qsteamEnter = $("#qsteam").val();

		if (qsteamEnter == "" || qsteamEnter <= 0) {

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
			qsteamEnter = parseFloat($("#qsteam").val());
			if (id <= 3) {

				if (qsteamEnter == qsteam) {

					$("#submit21").prop("disabled", true);
					$("#qsteam").prop("disabled", true);
					$("#qactualDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qsteamEnter != qsteam) {
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

				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qsteamFormula.png' class='img-fluid' 
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

				if (qsteamEnter == qsteam) {

					$("#submit21").prop("disabled", true);
					$("#qsteam").prop("disabled", true);
					$("#qactualDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qsteam,
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