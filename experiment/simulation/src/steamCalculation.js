function steam() {

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
	<div class="col-md-8 instruction-box1 " style="display:flex;">
	<div class="col-5 instruction-box1" style="overflow-y: auto; height: 500px;">
	 <center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">GIVEN   </span></center>
     <span class="fw-bold" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px;" id = "exchangerStatement"> Assuming T<sub>condensate</sub> = 60 <sup>o</sup>C,<br> 
                   Assume T<sub>surface</sub> = 129 <sup>o</sup>C,<br>
                   Expected T<sub>out</sub> for `+ wfRate + ` lit/hr = ` + tout + ` <sup>o</sup>C,<br>
                   Length of heat exchanger l = 3.8 m,
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
    
   <div class="row justify-content-center mt-5" style="display:flex;" >
        <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">h<sub>i</sub> calculated for water is `+ heatVal + ` W/m<sup>2</sup>.<sup>o</sup>C </label>
   </div>
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Find h<sub>fg</sub> (J) at steam from steam table: </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="hfg" style="width:100%; " class="form-control" /> 
    </div>
    <div class="col-3">
    <button type="submit" class="btn btn-info"  id="refer3"  style="height:30px;width:40%;margin-top: 0px;">Refer</button>
    <button type="submit" class="btn btn-secondary"  id="submit14"  style="height:30px;width:45%;margin-top: 0px; margin-left:10px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "heatTrasDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate heat transfer coefficient of  <br>steam for pure condensation h<sub>o</sub> (W/m<sup>2</sup>.<sup>o</sup>C) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="heatTrans" style="width:100%;" class="form-control" />
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit15"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "overallDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Overall heat transfer coefficient U<sub>o</sub> (W/m<sup>2</sup>.<sup>o</sup>C): </label>
    </div>  
    <div class="col-4" style="display:flex;">
    <input type="number" id="overAll" style="width:100%;" class="form-control" />
    </div>  
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit16"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>   
    </div>  
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "logDiv" hidden >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Log mean temperature difference &Delta;T<sub>LM</sub> (<sup>o</sup>C) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="loagMean" style="width:100%;" class="form-control" />
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit18"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>  
    </div> 
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "saDiv" hidden>
         <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Surface Area of inner tube SA (m<sup>3</sup>) : </label>
    </div>  
    <div class="col-4" style="display:flex;">
    <input type="number" id="sa" style="width:100%;" class="form-control" />
    </div>  
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit19"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div> 
    </div>  
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "qhxDiv" hidden>
         <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate maximum heat exchanges heat transfer Q<sub>hx</sub> : </label>
    </div>  
    <div class="col-4" style="display:flex;">
    <input type="number" id="qhx" style="width:100%;" class="form-control" />
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit20"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div> 
    </div>
      
    <div class="text-center mt-3 mb-5" >
    <button type="submit5" class="btn btn-primary"  id="nextl3"  style="height:100%;width:80px;margin-top: 0px;" hidden>Next</button>                                
    </div>
      
	</div>
	</div>	
	</div>`

	$("#ecalculations").html(htm);

	var hoVal;
	var uoVal;

	var logMean;
	var smVal;
	var qxVal;

	$("#nextl3").click(function() {
		finalAComplete();
	})

	$("#submit20").click(function() {
		qxVal = (uoVal * logMean * smVal).toFixed(2);
		qxVal = parseFloat(qxVal);

		var qxValEnter = $("#qhx").val();

		if (qxValEnter == "" || qxValEnter <= 0) {

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
			qxValEnter = parseFloat($("#qhx").val());
			if (id <= 3) {

				if (qxValEnter == qxVal) {

					$("#submit20").prop("disabled", true);
					$("#qhx").prop("disabled", true);
						          $("#nextl3").prop("hidden",false);
					scrollToBottom();
					id = 0;
				} else if (qxValEnter != qxVal) {
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
                    <img src='images/qhxFormula.png' class='img-fluid' 
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

				if (qxValEnter == qxVal) {

					$("#submit20").prop("disabled", true);
					$("#qhx").prop("disabled", true);
						          $("#nextl3").prop("hidden",false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qxVal,
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


	});

	$("#submit19").click(function() {
		smVal = (3.14 * 2 * 0.0079 * 3.8).toFixed(2);
		smVal = parseFloat(smVal);

		var smValEnter = $("#sa").val();

		if (smValEnter == "" || smValEnter <= 0) {

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
			smValEnter = parseFloat($("#sa").val());
			if (id <= 3) {

				if (smValEnter == smVal) {

					$("#submit19").prop("disabled", true);
					$("#sa").prop("disabled", true);
					$("#qhxDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (smValEnter != smVal) {
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
                    <img src='images/saFormula.png' class='img-fluid' 
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

				if (smValEnter == smVal) {

					$("#submit19").prop("disabled", true);
					$("#sa").prop("disabled", true);
					$("#qhxDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + smVal,
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

	$("#submit18").click(function() {
		var tSteamTOutSub = hgTemp - tout;
		var tcondTfeedSub = 60 - tfFeed;

		var num = tSteamTOutSub - tcondTfeedSub;
		var deno = Math.log(tSteamTOutSub / tcondTfeedSub);

		logMean = (num / deno).toFixed(2);
		logMean = parseFloat(logMean);

		var logMeanEnter = $("#loagMean").val();

		if (logMeanEnter == "" || logMeanEnter <= 0) {

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
			logMeanEnter = parseFloat($("#loagMean").val());
			if (id <= 3) {

				if (logMeanEnter == logMean) {

					$("#submit18").prop("disabled", true);
					$("#loagMean").prop("disabled", true);
					$("#saDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (logMeanEnter != logMean) {
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
                    <img src='images/logMeanFormula.png' class='img-fluid' 
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

				if (logMeanEnter == logMean) {

					$("#submit18").prop("disabled", true);
					$("#loagMean").prop("disabled", true);
					$("#saDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + logMean,
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

	$("#submit16").click(function() {
		var firstTerm = 1 / heatVal;
		var secondTermNum = 0.0079 * Math.log(0.01067 / 0.0079);
		var secondTerm = secondTermNum / 16.2;
		var thirdTerm = 0.0079 / (0.01067 * hoVal);

		var denoAdd = parseFloat(firstTerm) + parseFloat(secondTerm) + parseFloat(thirdTerm);
		uoVal = (1 / denoAdd).toFixed(2);
		uoVal = parseFloat(uoVal);

		var uoValEnter = $("#overAll").val();

		if (uoValEnter == "" || uoValEnter <= 0) {

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
			uoValEnter = parseFloat($("#overAll").val());
			if (id <= 3) {

				if (uoValEnter == uoVal) {

					$("#submit16").prop("disabled", true);
					$("#overAll").prop("disabled", true);
					$("#logDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (uoValEnter != uoVal) {
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
                    <img src='images/uoFormula.png' class='img-fluid' 
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

				if (uoValEnter == uoVal) {

					$("#submit16").prop("disabled", true);
					$("#overAll").prop("disabled", true);
					$("#logDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + uoVal,
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


	});

	$("#submit15").click(function() {
		var sub = 983 - 1.9;
		var cub = 0.73 * 0.73 * 0.73;
		var num = (983 * sub * 9.81 * hfgVal * cub).toFixed(2);

		num = parseFloat(num);

		var sub1 = hgTemp - 129;
		var mu = 0.4658 * Math.pow(10, -3);

		var deno = (mu * 0.03 * sub1).toFixed(5);
		deno = parseFloat(deno);

		var finDiv = num / deno;
		var powerAdd = Math.pow(finDiv, 1 / 4);
		hoVal = (powerAdd * 0.725).toFixed(2);
		hoVal = parseFloat(hoVal);

		var hoValEnter = $("#heatTrans").val();

		if (hoValEnter == "" || hoValEnter <= 0) {

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
			hoValEnter = parseFloat($("#heatTrans").val());
			if (id <= 3) {

				if (hoValEnter == hoVal) {

					$("#submit15").prop("disabled", true);
					$("#heatTrans").prop("disabled", true);
					$("#overallDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (hoValEnter != hoVal) {
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
                    <img src='images/hoFormula.png' class='img-fluid' 
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

				if (hoValEnter == hoVal) {

					$("#submit15").prop("disabled", true);
					$("#heatTrans").prop("disabled", true);
					$("#overallDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + hoVal,
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


	});


	$("#refer3").click(function() {
		let pageNumber = 8;

		Swal.fire({
			title: 'PDF Viewer',
			html: `
        <iframe src="images/fullsteam.pdf#page=${pageNumber}" width="100%" height="500px" style="border:none;"></iframe>
    `,
			width: '60%',
			confirmButtonText: 'Close',
			customClass: {
				icon: 'custom-icon',
				popup: 'custom-popup',
				title: 'custom-title',
				confirmButton: 'custom-confirm-button',
				cancelButton: 'custom-cancel-button',
			}
		})
	})

	var arrhfg = [];
	var hfgVal;
	var id = 1;


	$("#submit14").click(function() {
		arrhfg = [2173.7, 2170.8, 2167.9, 2165.0, 2162.1, 2159.1, 2156.2];
		var start = 130;
		var temp1 = hgTemp;

		var index = temp1 - start;
		hfgVal = arrhfg[index];
		hfgVal = (hfgVal * 1000).toFixed(2);
		hfgVal = parseFloat(hfgVal);

		var hfgValEnter = $("#hfg").val();
		if (hfgValEnter == "" || hfgValEnter <= 0) {

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
			hfgValEnter = parseFloat($("#hfg").val());
			if (id <= 3) {

				if (hfgValEnter == hfgVal) {

					$("#submit14").prop("disabled", true);
					$("#hfg").prop("disabled", true);
					$("#heatTrasDiv").prop("hidden", false);
					id = 0;
				} else if (hfgValEnter != hfgVal) {
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
				var pageNumber = 8;
				Swal.fire({
					title: 'PDF Viewer',
					html: `
		        <iframe src="images/fullsteam.pdf#page=${pageNumber}" width="100%" height="500px" style="border:none;"></iframe>
		    `,
					width: '60%',
					confirmButtonText: 'Close',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});

			} else {

				if (hfgValEnter == hfgVal) {

					$("#submit14").prop("disabled", true);
					$("#hfg").prop("disabled", true);
					$("#heatTrasDiv").prop("hidden", false);
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + hfgVal,
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
	});

}