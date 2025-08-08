var timerMasterJson = {};
var resultJson = {};
var finB3 = 0;

function ques3(){
	console.log("que 3");
	seconds = 0;
    var htRate = getRandomNumber(18000, 25000);
	var bEfficiency = getRandomNumber(70, 90);
	var capInc = getRandomNumber1(1.2, 2);
	var to1 = getRandomNumber(50, 60);
	var mw = getRandomNumber(200, 400);
	var tf1 = getRandomNumber(20, 30);
	
	var label = `If the heat exchanger capacity must be made `+capInc+` times the original, propose the necessary changes on the 
	                boiler side to support the new heat demand.`



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
               
          	Existing boiler capacity : 30 kg/hr at 136 <sup>o</sup>C and 3.5 bar,<br>
			Current heat transfer rate : `+htRate+` J,<br>
			Boiler efficiency : `+bEfficiency+`%,<br>
			Electric Power rating of Boiler Q<sub>electric</sub>= 18kW,<br>
            Current outlet temperature T<sub>out1</sub> = `+to1+` <sup>o</sup>C,<br>
			Current flow rate of water m<sub>water</sub> = `+mw+` l/hr,<br>
			Specific heat capacity of water C<sub>p</sub> = 4184  J/kg<sup>o</sup>C,<br>
			Feed water temperature T<sub>feed</sub> = `+tf1+` <sup>o</sup>C,<br>
			Enthalpy of vaporization h<sub>fg</sub> = 2156.2 kJ/kg,<br> 
			Enthalpy of steam h<sub>g</sub> = 2728.2 kJ/kg,<br>
			T<sub>condensate</sub> = 60 <sup>o</sup>C

            
                 </span>
	</div>
	
	<div class="col-7 instruction-box1" style="overflow-y: auto; height: 500px;" id="instructionBox">
	<center><span class="fw-bold headingExp" style="font-family: emoji;
    font-size: 20px;
    word-spacing: 1px; ">CALCULATIONS   </span></center>
    
  
     
    <div class="row justify-content-center mt-5" style="display:flex;" >
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Find enthalpy of water h<sub>f</sub>  :  </label>
    </div>
    <div class="col-3" style="display:flex;">
    <input type="number" id="hfFind1" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-3">
    <button type="submit" class="btn btn-info"  id="refer6"  style="height:32px;margin-top: 0px; margin-left:10px;" >Refer</button>

    <button type="submit" class="btn btn-secondary"  id="submit38"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>
    
     
    <div class="row justify-content-center mt-5" style="display:flex;" id = "toDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate new temp T<sub>out2</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="ton1" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    
    <button type="submit" class="btn btn-secondary"  id="submit39"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div> 
    
     <div class="row justify-content-center mt-5" style="display:flex;" id = "mw2Div" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate flow rate of water m<sub>water2</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="mw2" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    
    <button type="submit" class="btn btn-secondary"  id="submit41"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div> 
    
     <div class="row justify-content-center mt-5" style="display:flex;" id = "htrDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate new heat transfer rate required Q<sub>req</sub> :  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="htr" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    
    <button type="submit" class="btn btn-secondary"  id="submit42"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div> 
    
      
      <div class="row justify-content-center mt-5" style="display:flex;" id = "frDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate new mass flow rate of steam required m<sub>steam</sub> (kg):  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="fr" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    
    <button type="submit" class="btn btn-secondary"  id="submit43"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
    </div>
    </div>  
    
    
     <div class="row justify-content-center mt-5" style="display:flex;" id = "qeDiv" hidden>
    <div class="col-6 ">
    <label style="font-family: emoji;font-size: 20px;word-spacing: 1px;">Calculate the new boiler power rating Q<sub>electric</sub> (kW):  </label>
    </div>
    <div class="col-4" style="display:flex;">
    <input type="number" id="qe" style="width:100%;" class="form-control" /> 
    </div>
    <div class="col-2">
    
    <button type="submit" class="btn btn-secondary"  id="submit45"  style="height:30px;width:80px;margin-top: 0px;" >Submit</button>                              
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
	 
		var hfValGet1; 
      	var toutN; 
        var mWater2;
        var htrVal;
        var mVal;
        var qElecVal;
//        Q_elec = (m_steam * (hg - hf))/(3600*1000* efficiency)

	
	
	$("#result").click(function() {
		resultJson.finB3Comp = finB3;
		console.log(resultJson);
		
		timerMasterJson.finalB3PartTime = $("#counter").text();
		console.log(timerMasterJson);
		updateCounter();
		result3();
	})
       
       $("#submit45").click(function(){
	
	     var sub = parseFloat(2728.2)-parseFloat(hfValGet1);
	     
	     var num = mVal*sub;
	     var deno = 3600*(bEfficiency/100);
	     qElecVal = (num/deno).toFixed(2);
	     qElecVal = parseFloat(qElecVal);
	     
	     var qElecValEnter = $("#qe").val();
	     
	     if (qElecValEnter == "" || qElecValEnter <= 0) {
            
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
			
			qElecValEnter = parseFloat($("#qe").val());
			
			if (id <= 3) {

				if (qElecValEnter == qElecVal) {

					$("#submit45").prop("disabled", true);
					$("#qe").prop("disabled", true);
//					$("#qeDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (qElecValEnter != qElecVal) {
					finB3++;
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
                finB3++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/q1.png' class='img-fluid' 
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

				if (qElecValEnter == qElecVal) {

					$("#submit45").prop("disabled", true);
					$("#qe").prop("disabled", true);
//					$("#qeDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + qElecVal,
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
       
        $("#submit43").click(function(){
	
	     var sub = 136-60;
	     var deno = (2156.2*1000)+4184*sub;
	     mVal = (htrVal/deno).toFixed(2);
	     mVal = parseFloat(mVal);
	     
	     var mValEnter = $("#fr").val();
	     
	     if (mValEnter == "" || mValEnter <= 0) {

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
			
			mValEnter = parseFloat($("#fr").val());
			
			if (id <= 3) {

				if (mValEnter == mVal) {

					$("#submit43").prop("disabled", true);
					$("#fr").prop("disabled", true);
					$("#qeDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (mValEnter != mVal) {
					finB3++;
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
                finB3++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/m1.png' class='img-fluid' 
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

				if (mValEnter == mVal) {

					$("#submit43").prop("disabled", true);
					$("#fr").prop("disabled", true);
					$("#qeDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + mVal,
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
        
       $("#submit42").click(function(){
	   var sub = toutN - tf1;
	   htrVal = (mWater2*4184*sub).toFixed(2);
	   htrVal = parseFloat(htrVal);
	   
	   var htrValEnter = $("#htr").val();
	   
	   if (htrValEnter == "" || htrValEnter <= 0) {

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
			
			htrValEnter = parseFloat($("#htr").val());
			
			if (id <= 3) {

				if (htrValEnter == htrVal) {

					$("#submit42").prop("disabled", true);
					$("#htr").prop("disabled", true);
					$("#frDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (htrValEnter != htrVal) {
					finB3++;
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
                finB3++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/qReqFormula.png' class='img-fluid' 
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

				if (htrValEnter == htrVal) {

					$("#submit42").prop("disabled", true);
					$("#htr").prop("disabled", true);
					$("#frDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + htrVal,
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
        
       $("#submit41").click(function(){
	    mWater2 = (capInc*mw).toFixed(2)
	    mWater2 = parseFloat(mWater2);
	    
	    var mWater2Enter = $("#mw2").val();
	    
	    if (mWater2Enter == "" || mWater2Enter <= 0) {

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
			
			mWater2Enter = parseFloat($("#mw2").val());
			
			if (id <= 3) {

				if (mWater2Enter == mWater2) {

					$("#submit41").prop("disabled", true);
					$("#mw2").prop("disabled", true);
					$("#htrDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (mWater2Enter != mWater2) {
					finB3++;
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
                finB3++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/mWater2.png' class='img-fluid' 
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

				if (mWater2Enter == mWater2) {

					$("#submit41").prop("disabled", true);
					$("#mw2").prop("disabled", true);
					$("#htrDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + mWater2,
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
        
	   $("#submit39").click(function(){
		toutN = (capInc*to1).toFixed(2);
		toutN = parseFloat(toutN); 
		
		var toutNEnter = $("#ton1").val();
		
		if (toutNEnter == "" || toutNEnter <= 0) {

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
			
			toutNEnter = parseFloat($("#ton1").val());
			
			if (id <= 3) {

				if (toutNEnter == toutN) {

					$("#submit39").prop("disabled", true);
					$("#ton1").prop("disabled", true);
					$("#mw2Div").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (toutNEnter != toutN) {
					finB3++;
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
                finB3++;
			
				Swal.fire({
					title: 'Formula',
					html: `<div>
                    <img src='images/ton11.png' class='img-fluid' 
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

				if (toutNEnter == toutN) {

					$("#submit39").prop("disabled", true);
					$("#ton1").prop("disabled", true);
					$("#mw2Div").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + toutN,
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
	   
	   $("#refer6").click(function(){
		
		
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

	 
	
		
	})
	   
	   var id =1;
	   
	   $("#submit38").click(function(){
		
		 var arrhf1 = [83.91, 88.10, 92.28, 96.46, 100.65, 104.83, 109.01, 113.19, 117.37 , 121.55 , 125.73];

	var start1 = 20;
	var temp1 = tf1;
	var index = temp1 - start1;

	 hfValGet1 = arrhf1[index];
	
	var hfValGet1Enter = $("#hfFind1").val();
	   
	   if (hfValGet1Enter == "" || hfValGet1Enter <= 0) {

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
			
			hfValGet1Enter = parseFloat($("#hfFind1").val());
			
			if (id <= 3) {

				if (hfValGet1Enter == hfValGet1) {

					$("#submit38").prop("disabled", true);
					$("#hfFind1").prop("disabled", true);
					$("#toDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else if (hfValGet1Enter != hfValGet1) {
					finB3++;
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
                finB3++;
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

			} else {

				if (hfValGet1Enter == hfValGet1) {

					$("#submit38").prop("disabled", true);
					$("#hfFind1").prop("disabled", true);
					$("#toDiv").prop("hidden", false);
					scrollToBottom();
					id = 0;
				} else {

					Swal.fire({
						icon: 'success',
						title: 'Correct answer is : ' + hfValGet1,
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
	
	function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
	
	
	function getRandomNumber1(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(1);
}