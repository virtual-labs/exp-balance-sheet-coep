var timerMasterJson = {};
var resultJson = {};
var finB2 = 0;

function ques2(){
	console.log("que 2");
	seconds = 0;
	var tsteem1 = getRandomNumber(130, 136);
	var tfeed1 = getRandomNumber(20, 30);
	var mWater = getRandomNumber(400, 600);
	var UVal = getRandomNumber(2000, 3000);
	var dPerVal = getRandomNumber(10, 30);
	
	
	var label = `If the overall heat transfer coefficient (U) of the heat exchanger drops by `+dPerVal+`% due to fouling, 
	             and the boiler continues to deliver steam at the same rate and conditions
                   What will be the new max outlet water temperature (T<sub>out</sub>)?`



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
           
           Original Overall heat transfer Coefficient  U: `+UVal+` W/m<sup>2</sup>.K,<br>
			 Surface Area of Heat Exchanger SA : 0.19 m<sup>2</sup>,<br>
			 Flow rate of water m<sub>water</sub> = `+mWater+` lph,<br>
			 Specific Heat Capacitty of water C<sub>p<sub>water</sub></sub> : 4184 J/kg.<sup>o</sup>C,<br>
			Temperature of steam T<sub>steam</sub> = `+tsteem1+`<sup>o</sup>C,<br> 
			Feedwater temperature T<sub>feed</sub> : `+tfeed1+`<sup>o</sup>C,<br>
			Mass flow rate of steam : 20 kg/hr,<br>
			Expected outlet temperature of water = 65<sup>o</sup>C,<br>
			Temperature of Condensate = 60<sup>o</sup>C,<br>

               
                 </span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 500px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
  
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Find Enthalpy of vaporization h<sub>fg</sub> :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="hfgFind" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
    <button type="submit" class="btn btn-info"  id="refer5"  style="height:32px;margin-top: 0px; margin-left:10px;" >Refer</button>

    <button type="submit" class="btn btn-secondary"  id="submit32"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    
   
    <div class="row justify-content-center mt-5" style="display:flex;" id = "uDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Find new overall heat transfer coefficient U<sub>new</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="uVal1" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit33"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "deltaTDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate &Delta;T<sub>LM</sub>  :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="tlm" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit34"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "htDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate Heat Transfer rate of Heat Exchanger Q<sub>hx</sub>:  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="qh1" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit36"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
    <div class="row justify-content-center mt-5" style="display:flex;" id = "ebDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate using energy balance to find new T<sub>out</sub>:  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="eb" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    <button type="submit" class="btn btn-secondary"  id="submit37"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
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

    var uNew;
    var tlmVal;
    var qhxV1;
    var to1;
    $("#result").click(function() {
		resultJson.finB2Comp = finB2;
		console.log(resultJson);
		
		timerMasterJson.finalB2PartTime = $("#counter").text();
		console.log(timerMasterJson);
		updateCounter();
		result2();
	})
    $("#submit37").click(function(){
		
	    var f1 = mWater/3600;
	    var secTerm = qhxV1/(4184*f1);
	    to1 = parseFloat(tfeed1)+parseFloat(secTerm);
	    to1 = to1.toFixed(2);
	    to1 = parseFloat(to1);
	    
	    var to1Enter = $("#eb").val();
	    
	     if (to1Enter == "" || to1Enter <= 0) {

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
			
			to1Enter = parseFloat($("#eb").val());
			
			if (id <= 3) {

				if (to1Enter == to1) {

					$("#submit37").prop("disabled", true);
					$("#eb").prop("disabled", true);
//					$("#ebDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (to1Enter != to1) {
					finB2++
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
                finB2++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/t1.png' class='img-fluid' 
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

				if (to1Enter == to1) {

					$("#submit37").prop("disabled", true);
					$("#eb").prop("disabled", true);
//					$("#ebDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + to1,
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
    
    $("#submit36").click(function(){
	
	 qhxV1 = (uNew*tlmVal*0.19).toFixed(2);
	 qhxV1 = parseFloat(qhxV1);
	 
	 var qhxV1Enter = $("#qh1").val();
	    
	     if (qhxV1Enter == "" || qhxV1Enter <= 0) {

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
			
			qhxV1Enter = parseFloat($("#qh1").val());
			
			if (id <= 3) {

				if (qhxV1Enter == qhxV1) {

					$("#submit36").prop("disabled", true);
					$("#qh1").prop("disabled", true);
					$("#ebDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qhxV1Enter != qhxV1) {
					finB2++;
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
                finB2++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qhx1Form.png' class='img-fluid' 
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

				if (qhxV1Enter == qhxV1) {

					$("#submit36").prop("disabled", true);
					$("#qh1").prop("disabled", true);
					$("#ebDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qhxV1,
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
    
    $("#submit34").click(function(){
	   var A = tsteem1-65;
	   var B = 60-tfeed1;
	   
	   tlmVal = (A-B)/(Math.log(A/B));
	   tlmVal = tlmVal.toFixed(2);
	   tlmVal = parseFloat(tlmVal);
	   
	   	 var tlmValEnter = $("#tlm").val();
	   
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
			
			tlmValEnter = parseFloat($("#tlm").val());
			
			if (id <= 3) {

				if (tlmValEnter == tlmVal) {

					$("#submit34").prop("disabled", true);
					$("#tlm").prop("disabled", true);
					$("#htDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (tlmValEnter != tlmVal) {
					finB2++;
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
                finB2++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/dtFormula.png' class='img-fluid' 
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

					$("#submit34").prop("disabled", true);
					$("#tlm").prop("disabled", true);
					$("#htDiv").prop("hidden", false);
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
	   
	   
   });
    
	$("#submit33").click(function(){
		var div1 = dPerVal/100; 
		
	   uNew = (UVal-(UVal*div1)).toFixed(2);
	   uNew = parseFloat(uNew);
	   
	   var uNewEnter = $("#uVal1").val();
	   
	   if (uNewEnter == "" || uNewEnter <= 0) {

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
			
			uNewEnter = parseFloat($("#uVal1").val());
			
			if (id <= 3) {

				if (uNewEnter == uNew) {

					$("#submit33").prop("disabled", true);
					$("#uVal1").prop("disabled", true);
					$("#deltaTDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (uNewEnter != uNew) {
					finB2++;
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
                finB2++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/uFormula.png' class='img-fluid' 
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

				if (uNewEnter == uNew) {

					$("#submit33").prop("disabled", true);
					$("#uVal1").prop("disabled", true);
					$("#deltaTDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + uNew,
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
	
	$("#refer5").click(function(){
		
		
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

	 
	
		
	})
	
	var id = 1;
	 
	 $("#submit32").click(function(){
		
		 var arrhfg1 = [2173.7,2170.8,2167.9,2165.0,2162.1,2159.1,2156.2];

	var start1 = 130;
	var temp1 = tsteem1;
	var index = temp1 - start1;

	var hfgValGet1 = arrhfg1[index];
	 
		
		var hfgValGet1Enter = $("#hfgFind").val();
		
		if (hfgValGet1Enter == "" || hfgValGet1Enter <= 0) {

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
			
			hfgValGet1Enter = parseFloat($("#hfgFind").val());
			
			if (id <= 3) {

				if (hfgValGet1Enter == hfgValGet1) {

					$("#submit32").prop("disabled", true);
					$("#hfgFind").prop("disabled", true);
					$("#uDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (hfgValGet1Enter != hfgValGet1) {
					finB2++;
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
                finB2++;
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

			} else {

				if (hfgValGet1Enter == hfgValGet1) {

					$("#submit32").prop("disabled", true);
					$("#hfgFind").prop("disabled", true);
					$("#uDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + hfgValGet1,
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