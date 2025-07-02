var vstring = "";
var vstringVal;
var heatVal;

function water() {

//	hgTemp = getRandomNumber(130, 136);
//	wfRate = getRandomNumber(200, 800);
//	tfFeed = getRandomNumber(20, 28);

	if (tfFeed == 20) {
		vstring = "1.0016 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.0010;
	} else if (tfFeed == 21) {
		vstring = "0.979 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.000979;
	} else if (tfFeed == 22) {
		vstring = "0.955 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.000955;
	} else if (tfFeed == 23) {
		vstring = "0.9321 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.0009321;
	} else if (tfFeed == 24) {
		vstring = "0.911 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.000911;
	} else if (tfFeed == 25) {
		vstring = "0.89 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.00089;
	} else if (tfFeed == 26) {
		vstring = "0.8701 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.0008701;
	} else if (tfFeed == 27) {
		vstring = "0.852 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.000852;
	} else if (tfFeed == 28) {
		vstring = "0.8324 &times 10<sup>-3</sup> Pa.s";
		vstringVal = 0.0008324;
	}

	var label = "Steam generating capacity of the boiler is 30 kg/hr at " + hgTemp + "<sup>o</sup>C and 3.5 bar pressure. "

		+ "Outlet water flow rate from heat exchanger is " + wfRate + " lit/hr. "
		+ "Temperature of feed water T<sub>feed</sub> is " + tfFeed + "<sup>o</sup>C"
		+ ". (C<sub>p</sub> = 4184 J/kg<sup>o</sup>C, "
		+ " Electric power given to boiler = 18 kW)"

	$("#statement").html(label);


	var htm = `
	<div class="row justify-content-center" style="margin-top:-20px;display:flex;">
	<div class="col-md-8 instruction-box1 " style="display:flex; height: 500px;">
	<div class="col-5 instruction-box1">
	 <center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">GIVEN   </span></center>
     <span class="fw-bold" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px;" id = "exchangerStatement"> <br>Temperature of outer surface of inner pipe = `+ hgTemp + `<sup>o</sup>C, 
                 <br> Inner radius of inner pipe (r<sub>1</sub>) = 0.0079 m,<br>
                  Outer radius of inner pipe (r<sub>2</sub>) = 0.01067 m, <br>
                  Length of heat exchanger (l) = 3.8 m ,<br>
                  Dynamic viscosity of water (mu_water) at <center>`+ tfFeed + `<sup>o</sup>C = ` + vstring + `,</center>
                  Density of water = 1000 kg/m<sup>2</sup>,<br>
                  Thermal conductivity of water (k_water) = 0.6 W/mK</span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 460px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
    <div class="row justify-content-center mt-5" style="display:flex;" >
     <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate flow rate of water (m<sup>3</sup>/s) : </label>
     </div>
     <div class="col-4" style="display:flex;">
    <input type="number" id="flowRate" style="width:60%; margin-left:10px;" class="form-control" /> 
     <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;margin-left:5px;">  &times; 10<sup>-4</sup> </label>                     
     </div>
     <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit6"  style="height:30px;width:80px;margin-top: 0px; " >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "areaDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Area of inner pipe (A<sub>water</sub>) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="area" style="width:60%; margin-left:10px;" class="form-control" />
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;margin-left:5px;">  &times; 10<sup>-4</sup> </label>   
    </div>
     <div class="col-2">                
    <button type="submit" class="btn btn-secondary"  id="submit7"  style="height:30px;width:80px;margin-top: 0px; " >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "speedDiv" hidden>
     <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Speed of water (V<sub>water</sub>) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="speed" style="width:100%;" class="form-control" />
    </div>
      <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit8"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "reynoldDiv" hidden>
     <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Reynold's number for water (Re<sub>water</sub>) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="reynold" style="width:100%;" class="form-control" />
    </div>
     <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit9"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "pDiv" hidden>
     <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Prandtl number for water (Pr<sub>water</sub>) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="prand" style="width:100%;" class="form-control" />
    </div>
     <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit10"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "nusseltDiv" hidden>
     <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Nusselt number for water (Nu<sub>water</sub> for heating) Nu<sub>water</sub> : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="nuslet" style="width:100%;" class="form-control" />
    </div>
     <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit11"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "heatDiv" hidden>
     <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Heat transfer coefficient of water (h<sub>i</sub>) : </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="heat" style="width:100%;" class="form-control" />
    </div>
     <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit12"  style="height:30px;width:80px;margin-top: 0px; " >Submit</button>                              
    </div>
    </div>
    
    <div class="text-center mt-4 mb-5" >
    <button type="submit5" class="btn btn-primary"  id="nextl2"  style="height:100%;width:80px;margin-top: 0px;" hidden>Next</button>                              
    </div>
					    
    
	</div>
	
	</div>
	
	</div>
	
	
	`

	//	"+hgTemp+"<sup>o</sup>C
	var htm1 = 'Temperature of outer surface of inner pipe = ' + hgTemp + '<sup>o</sup>C '
	$("#exchangerStatement").html(htm1);

	$("#ecalculations").html(htm);

	var waterDensity = 1000;
	var flowRate;
	var id = 1;
	var area;
	var speed;
	var reynolds;
	var prandVal;
	var nuslet;
	

	$("#nextl2").click(function() {
		steam();
	})

	$("#submit12").click(function() {
		heatVal = ((nuslet * 0.6) / (0.0079 * 2)).toFixed(2);
		heatVal = parseFloat(heatVal);

		var heatValEnter = $("#heat").val();
		if (heatValEnter == "" || heatValEnter <= 0) {

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

			heatValEnter = $("#heat").val();
			if (id <= 3) {

				if (heatValEnter == heatVal) {

					$("#submit12").prop("disabled", true);
					$("#heat").prop("disabled", true);
					$("#nextl2").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else if (heatValEnter != heatVal) {
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
                    <img src='images/heatFormula.png' class='img-fluid' 
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

				if (heatValEnter == heatVal) {

					$("#submit12").prop("disabled", true);
					$("#heat").prop("disabled", true);
					$("#nextl2").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + heatVal,
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

	$("#submit11").click(function() {
		var firstTerm = Math.pow(reynolds, 0.8);
		var secTerm = Math.pow(prandVal, 0.4);
		nuslet = (0.023 * firstTerm * secTerm).toFixed(3);
		nuslet = parseFloat(nuslet);

		var nusletEnter = $("#nuslet").val();
		if (nusletEnter == "" || nusletEnter <= 0) {

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

			nusletEnter = parseFloat($("#nuslet").val());
			if (id <= 3) {

				if (nusletEnter == nuslet) {

					$("#submit11").prop("disabled", true);
					$("#nuslet").prop("disabled", true);
					$("#heatDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else if (nusletEnter != nuslet) {
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
                    <img src='images/nusletFormula.png' class='img-fluid' 
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

				if (nusletEnter == nuslet) {

					$("#submit11").prop("disabled", true);
					$("#nuslet").prop("disabled", true);
					$("#heatDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + nuslet,
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


	$("#submit10").click(function() {
		var num = vstringVal * 4184;
		prandVal = (num / 0.6).toFixed(2);
		prandVal = parseFloat(prandVal);

		var prandValEnter = $("#prand").val();
		if (prandValEnter == "" || prandValEnter <= 0) {

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

			prandValEnter = parseFloat($("#prand").val());
			if (id <= 3) {

				if (prandValEnter == prandVal) {

					$("#submit10").prop("disabled", true);
					$("#prand").prop("disabled", true);
					$("#nusseltDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else if (prandValEnter != prandVal) {
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
                    <img src='images/reynoldFormula.png' class='img-fluid' 
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

				if (prandValEnter == prandVal) {

					$("#submit10").prop("disabled", true);
					$("#prand").prop("disabled", true);
					$("#nusseltDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + prandVal,
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

	$("#submit9").click(function() {
		var num = speed * 0.0079 * 2 * waterDensity;
		reynolds = (num / vstringVal).toFixed(2);
		reynolds = parseFloat(reynolds);

		var reynoldEnter = $("#reynold").val();
		if (reynoldEnter == "" || reynoldEnter <= 0) {

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

			reynoldEnter = parseFloat($("#reynold").val());
			if (id <= 3) {

				if (reynoldEnter == reynolds) {

					$("#submit9").prop("disabled", true);
					$("#reynold").prop("disabled", true);
					$("#pDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();

				} else if (reynoldEnter != reynolds) {
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
                    <img src='images/reynoldFormula.png' class='img-fluid' 
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

				if (reynoldEnter == reynolds) {

					$("#submit9").prop("disabled", true);
					$("#reynold").prop("disabled", true);
					$("#pDiv").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + reynolds,
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


	$("#submit8").click(function() {
		speed = (flowRate / area).toFixed(2);
		speed = parseFloat(speed);

		var speedEnter = $("#speed").val();
		if (speedEnter == "" || speedEnter <= 0) {

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

			speedEnter = parseFloat($("#speed").val());
			if (id <= 3) {

				if (speedEnter == speed) {

					$("#submit8").prop("disabled", true);
					$("#speed").prop("disabled", true);
					$("#reynoldDiv").prop("hidden", false);
					id = 0;
                    scrollToBottom();
				} else if (speedEnter != speed) {
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
                    <img src='images/speedFormula.png' class='img-fluid' 
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

				if (speedEnter == speed) {

					$("#submit8").prop("disabled", true);
					$("#speed").prop("disabled", true);
					id = 0;
					$("#reynoldDiv").prop("hidden", false);
                     scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + speed,
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

	$("#submit7").click(function() {
		var mul = 0.0079 * 0.0079;
		area = (3.14 * mul);
		area = area * Math.pow(10, 4);
		area = area.toFixed(2);
		area = parseFloat(area);

		var areaEnter = $("#area").val();
		if (areaEnter == "" || areaEnter <= 0) {

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

			areaEnter = parseFloat($("#area").val());
			if (id <= 3) {

				if (areaEnter == area) {

					$("#submit7").prop("disabled", true);
					$("#area").prop("disabled", true);
					$("#speedDiv").prop("hidden", false);
					id = 0;
                    scrollToBottom();
				} else if (areaEnter != area) {
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
                    <img src='images/areaFormula.png' class='img-fluid' 
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

				if (areaEnter == area) {

					$("#submit7").prop("disabled", true);
					$("#area").prop("disabled", true);
					id = 0;
					$("#speedDiv").prop("hidden", false);
                   scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + area,
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

	$("#submit6").click(function() {
		var mul = 3600 * waterDensity;
		var div = wfRate / mul;
		flowRate = div * (Math.pow(10, 4));

		flowRate = flowRate.toFixed(2);
		flowRate = parseFloat(flowRate);

		var flowRateEnter = $("#flowRate").val();
		if (flowRateEnter == "" || flowRateEnter <= 0) {

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

			flowRateEnter = parseFloat($("#flowRate").val());
			if (id <= 3) {

				if (flowRateEnter == flowRate) {

					$("#submit6").prop("disabled", true);
					$("#flowRate").prop("disabled", true);
					$("#areaDiv").prop("hidden", false);
					id = 0;

				} else if (flowRateEnter != flowRate) {
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
                    <img src='images/flowRateFormula.png' class='img-fluid' 
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

				if (flowRateEnter == flowRate) {

					$("#submit6").prop("disabled", true);
					$("#flowRate").prop("disabled", true);
					id = 0;
					$("#areaDiv").prop("hidden", false);

				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + flowRate,
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



