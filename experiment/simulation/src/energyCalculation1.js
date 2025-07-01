var hgTemp;
var wfRate;
var tfFeed;
var msteemVal;

function energyMass() {

	hgTemp = getRandomNumber(130, 136);
	wfRate = getRandomNumber(200, 800);
	tfFeed = getRandomNumber(20, 28);

	var label = "Steam generating capacity of the boiler is 30 kg/hr at " + hgTemp + "<sup>o</sup>C and 3.5 bar pressure. "

		+ "Outlet water flow rate from heat exchanger is " + wfRate + " lit/hr. "
		+ "Temperature of feed water T<sub>feed</sub> is " + tfFeed + "<sup>o</sup>C"
		+ ". (C<sub>p</sub> = 4184 J/kg<sup>o</sup>C, "
		+ " Electric power given to boiler = 18 kW)"

	$("#statement").html(label);

	var htm = '<div class="row justify-content-center" style="margin-top:-20px;display:flex;">'
		+ '<div class="col-md-8 instruction-box1 " style="display:flex;">'
		+ '<div class="col-5 ">'
		+ '<label style="font-weight: 600;font-family: emoji;font-size: 20px;word-spacing: 1px;">Find the Enthalpy of steam (h<sub>g</sub>) kJ/kg : </label>'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<input type="number" id="hg" style="width:100%; " class="form-control" />'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<button type="submit" class="btn btn-secondary"  id="submit1"  style="height:90%;width:65px;margin-top: 0px; " >Submit</button>'
		+ '<button type="submit" class="btn btn-info"  id="refer1"  style="height:90%;margin-top: 0px; margin-left:10px;" >Refer</button>'
		+ '</div>'
		+ '</div>'
		+ '</div>'

		+ '<div class="row justify-content-center" style="margin-top:-20px;display:flex;" id="hfdiv" hidden>'
		+ '<div class="col-md-8 instruction-box1 " style="display:flex;">'
		+ '<div class="col-5 ">'
		+ '<label style="font-weight: 600;font-family: emoji;font-size: 20px;word-spacing: 1px;">Find the Enthalpy of feed water (h<sub>f</sub>) kJ/kg : </label>'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<input type="number" id="hf" style="width:100%; " class="form-control" />'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<button type="submit" class="btn btn-secondary"  id="submit2"  style="height:90%;width:65px;margin-top: 0px; " >Submit</button>'
		+ '<button type="submit" class="btn btn-info"  id="refer2"   style="height:90%;margin-left:10px;" >Refer</button>'
		+ '</div>'
		+ '</div>'
		+ '</div>'

		+ '<div class="row justify-content-center" style="margin-top:-20px;display:flex;" id="Msteemdiv" hidden>'
		+ '<div class="col-md-8 instruction-box1 " style="display:flex;">'
		+ '<div class="col-5 ">'
		+ '<label style="font-weight: 600;font-family: emoji;font-size: 20px;word-spacing: 1px;">Select m<sub>steam</sub> kg/hr : </label>'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<select name="" id="msteem" style="width:100%; size="5";overflow-y: auto;">';
	htm += '<option value="0">0</option>';

	for (let i = 5; i <= 30; i++) {
		htm += '<option value="' + i + '">' + i + '</option>';
	}

	htm += '</select>'
		+ '</div>';
	htm += ''
		+ '<div class="col-3">'
		+ '<button type="submit" class="btn btn-secondary"  id="submit3"  style="height:90%;width:80px;margin-top: 0px;" >Submit</button>'
		+ '</div>'
	htm += '<label style="margin-left:50px;font-weight: 600;font-family: emoji;font-size: 20px;word-spacing: 1px;" id="effVal" hidden></label>'



	htm += '</div>'
		+ '</div>'

		+ '<div class="row justify-content-center" style="margin-top:-20px;display:flex;" id="qdiv" hidden>'
		+ '<div class="col-md-8 instruction-box1 " style="display:flex;">'
		+ '<div class="col-5 ">'
		+ '<label style="font-weight: 600;font-family: emoji;font-size: 20px;word-spacing: 1px;">Energy required for feedwater to reach boiler at  ' + hgTemp + '<sup>o</sup>C at startup phase of boiler Q (W):  </label>'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<input type="number" id="energy" style="width:100%;" class="form-control" />'
		+ '</div>'
		+ '<div class="col-3">'
		//                        +'<button type="submit" class="btn btn-info"  id="refer2"   style="height:55%;width:10%;margin-top: 0px; margin-left:10px;" >Refer</button>'
		+ '<button type="submit4" class="btn btn-secondary"  id="submit4"  style="height:38%;width:80px;margin-top: 0px;" >Submit</button>'
		+ '</div>'
		+ '</div>'
		+ '</div>'

		+ '<div class="row justify-content-center" style="margin-top:-20px;display:flex;" id="timediv" hidden>'
		+ '<div class="col-md-8 instruction-box1 " style="display:flex;">'
		+ '<div class="col-5 ">'
		+ '<label style="font-weight: 600;font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate time required t (min) :  </label>'
		+ '</div>'
		+ '<div class="col-3">'
		+ '<input type="number" id="time" style="width:100%;" class="form-control" />'
		+ '</div>'
		+ '<div class="col-3">'
		//                        +'<button type="submit" class="btn btn-info"  id="refer2"   style="height:55%;width:10%;margin-top: 0px; margin-left:10px;" >Refer</button>'
		+ '<button type="submit5" class="btn btn-secondary"  id="submit5"  style="height:100%;width:80px;margin-top: 0px;" >Submit</button>'
		+ '</div>'
		+ '</div>'
		+ '</div>'

		+ '<div class="row justify-content-center" style="margin-top:-20px;"  >'

		+ '<div class="col-md-8 instruction-box1 text-center">'
		+ '<button type="submit5" class="btn btn-primary"  id="nextl1"  style="height:100%;width:80px;margin-top: 0px; margin-left:10px;" hidden>Next</button>'
		+ '</div>'
		+ '</div>'
		;


	$("#ecalculations").html(htm);

	var arrhg = [2720.1, 2721.5, 2722.8, 2724.2, 2725.5, 2726.9, 2728.2];

	var start = 130;
	var temp = hgTemp;
	var index = temp - start;

	var hgValGet = arrhg[index];



	//	console.log(arrhg[index]);  
	var id = 1;
	var efficiencyVal;
	var qVal;
	var cp = 4184;
	var timeReq;
	var electricPow = 18000;
	//    $("#nextl1").prop("hidden", false)
	$("#nextl1").click(function() {
		water();
	})

	$("#submit5").click(function() {
		timeReq = (qVal / (electricPow * 60)).toFixed(2);
		timeReq = parseFloat(timeReq);

		var timeReqEnter = $("#time").val();
		if (timeReqEnter == "" || timeReqEnter <= 0) {

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

			timeReqEnter = parseFloat($("#time").val());
			if (id <= 3) {

				if (timeReqEnter == timeReq) {

					$("#submit5").prop("disabled", true);
					$("#time").prop("disabled", true);
					$("#nextl1").prop("hidden", false);
					id = 0;
                    scrollToBottom();
				} else if (timeReqEnter != timeReq) {
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
                    <img src='images/timeFormula.png' class='img-fluid' 
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

				if (timeReqEnter == timeReq) {

					$("#submit5").prop("disabled", true);
					$("#time").prop("disabled", true);
					$("#nextl1").prop("hidden", false);
					id = 0;
					scrollToBottom();
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + timeReq,
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

	$("#submit4").click(function() {

		var delT = hgTemp - tfFeed;

		qVal = msteemVal * cp * delT;
		var qValEnter = $("#energy").val();
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

			qValEnter = parseFloat($("#energy").val());
			if (id <= 3) {

				if (qValEnter == qVal) {

					$("#submit4").prop("disabled", true);
					$("#energy").prop("disabled", true);
					$("#timediv").prop("hidden", false);
					id = 0;

				} else if (qValEnter != qVal) {
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
                    <img src='images/energyFormula.png' class='img-fluid' 
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

					$("#submit4").prop("disabled", true);
					$("#energy").prop("disabled", true);
					$("#timediv").prop("hidden", false);
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


	$("#submit3").click(function() {
		msteemVal = $("#msteem").val();
		efficiencyVal = $("#efficiency").val();

		if (msteemVal != 0 && efficiencyVal != 0) {
			$("#msteem").prop("disabled", true);
			$("#submit3").prop("disabled", true);
			$("#efficiency").prop("disabled", true);
		} else {
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
		$("#effVal").prop("hidden", false);
		$("#energyBalDiv").prop("hidden", false);
		$("#qdiv").prop("hidden", false);
	});

	$("#submit1").click(function() {

		var hgValEnter = $("#hg").val();
		if (hgValEnter == "" || hgValEnter <= 0) {

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
			hgValEnter = parseFloat($("#hg").val());
			if (id <= 3) {

				if (hgValEnter == hgValGet) {

					$("#submit1").prop("disabled", true);
					$("#hg").prop("disabled", true);
					$("#hfdiv").prop("hidden", false);
					id = 0;

				} else if (hgValEnter != hgValGet) {
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

				if (hgValEnter == hgValGet) {

					$("#submit1").prop("disabled", true);
					$("#hg").prop("disabled", true);
					id = 0;
					$("#hfdiv").prop("hidden", false);
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + hgValGet,
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


	var id = 1;

	$("#submit2").click(function() {

		var hfValEnter = $("#hf").val();
		if (hfValEnter == "" || hfValEnter <= 0) {

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
			hfValEnter = parseFloat($("#hf").val());
			if (id <= 3) {

				if (hfValEnter == hfValGet) {

					$("#submit2").prop("disabled", true);
					$("#hf").prop("disabled", true);
					$("#Msteemdiv").prop("hidden", false);
					id = 0;
				} else if (hfValEnter != hfValGet) {
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
				var pageNumber = 5;
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

				if (hfValEnter == hfValGet) {

					$("#submit2").prop("disabled", true);
					$("#hf").prop("disabled", true);
					$("#Msteemdiv").prop("hidden", false);
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + hfValGet,
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


	$("#refer1").click(function() {
		let pageNumber = 5;

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

	});


	var arrhf = [83.91, 88.10, 92.28, 96.46, 100.65, 104.83, 109.01, 113.19, 117.37];

	var start1 = 20;
	var temp1 = tfFeed;
	var index = temp1 - start1;

	var hfValGet = arrhf[index];




	$("#refer2").click(function() {
		let pageNumber = 2;

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

	});


}
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

