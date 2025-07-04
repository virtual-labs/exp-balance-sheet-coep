## PROCEDURE

#### Note : Truncate the final calculated value to 2 digits after the decimal point in all calculations

### I.  Boiler calculations
- Find the enthalpy of steam h<sub>g</sub> (kJ/kg) at the given temperature. Click on '**Refer**' to refer the value and submit your answer
- Similarly, find the Enthalpy of feed water h<sub>f</sub> (kJ/kg) and submit your answer 
- Select Mass flow rate for steam m<sub>steam</sub> (kg/hr) and submit your answer
- Calculate energy required for feedwater to reach boiler at given temperature at startup phase of boiler Q(W), use the below formula for calculation and submit your answer <br>
    Q = M<sub>steam</sub> &times; C<sub>p<sub>water</sub></sub> &times; &Delta;T
- Calculate time required t (min) using below formula and submit your answer <br>
    t = Q / Q<sub>electric</sub>
- Click on '**Next**' and proceed to the next level


 ### II.  Heat exchanger water side calculations  
 -   Calculate flow rate of water (m<sup>3</sup>/s) using the below formula and submit your answer <br>
    flow<sub>water</sub> = m<sub>water</sub>/(3600 &times; ρ<sub>water</sub>)   
-  Calculate area of inner pipe A<sub>water</sub> using the below formula and submit your answer <br> Area = &pi; &times; r<sub>1</sub><sup>2</sup>, where &pi; = 3.14
- Calculate speed of water V<sub>water</sub> using the below formula and submit your answer <br>
   V<sub>water</sub> = flow<sub>water</sub>/A<sub>water</sub> 
- Calculate  Reynold's number for water (Re<sub>water</sub>) using the below formula and submit your answer <br> 
Re<sub>water</sub> = (V<sub>water</sub> × r<sub>1</sub> × 2 × ρ<sub>water</sub>) / μ<sub>water</sub>
- Calculate Prandtl number for water (Pr<sub>water</sub>) using the below formula and submit your answer <br>
 Pr<sub>water</sub> = ( μ<sub>water</sub> &times; C<sub>p<sub>water</sub></sub>) / k<sub>water</sub>
 - Calculate Nusselt number for water (Nu<sub>water</sub> for heating) Nu<sub>water</sub> using the below formula and submit your answer <br>
 N<sub>u<sub>water</sub></sub> = 0.023 ( Re<sub>water</sub><sup>0.8</sup> Pr<sub>water</sub><sup>0.4</sup>)
 - Calculate heat transfer coefficient of water (h<sub>i</sub>) using below formula and submit your answer <br>
  h<sub>i</sub> = (Nu<sub>water</sub> &times; k<sub>water</sub>) / 2 r<sub>1</sub>
- Click on '**Next**' and proceed to the next level


 ### III.  Heat exchanger steam side calculations 
 - Find h<sub>fg</sub> (J) at steam from steam table at the given temperature. Click on '**Refer**' to refer the value and submit your answer
 - Calculate heat transfer coefficient of steam for pure condensation h<sub>o</sub> (W/m<sup>2</sup>.<sup>o</sup>C) using the below formula and submit your answer <br>

    ![hoFormula](images/hoFormula.png)

- Calculate Overall heat transfer coefficient U<sub>o</sub> (W/m<sup>2</sup>.<sup>o</sup>C) using the below formula and submit your answer <br>

     ![UoFormula](images/uoFormula.png)

- Calculate Log mean temperature difference &Delta;T<sub>LM</sub> (<sup>o</sup>C) using the below formula and submit your answer <br>
       
     ![UoFormula](images/logMeanFormula.png)  

 - Calculate Surface area of inner tube SA (m<sup>3</sup>) using the below formula and submit your answer <br>
     SA = &pi; &times; 2 &times; r<sub>1</sub> &times; l
 - Calculate maximum heat exchanges heat transfer Q<sub>hx</sub> using the below formula and submit your answer <br> Q<sub>hx</sub> = U<sub>o</sub> &times; SA &times; &Delta;T<sub>LM</sub>
- Click on '**Next**' and proceed to the next level


  ### IV. Outlet temperature of water calculations   
- Calculate Maximum possible heat from steam given Q<sub>steam</sub> using the below formula and submit your answer <br>
 Q<sub>steam</sub> = (m<sub>steam</sub> &times; h<sub>fg</sub>) + (m<sub>steam</sub> &times; C<sub>p<sub>water</sub></sub> &times; (T<sub>steam</sub> - T<sub>condensate</sub>))
 - Calculate Actual Energy transfer Q<sub>Actual</sub> using the below formula and submit your answer <br>
    Q<sub>Actual</sub> = min (Q<sub>hx</sub> , Q<sub>steam</sub>)
  - Calculate Temperature of outlet water T<sub>out</sub> using the below formula and submit your answer <br>
      
      ![tOutFormula](images/toutFormula.png) 

- Select the appropriate to get T<sub>out</sub> to 60 <sup>o</sup>C and submit your answer    
- Click on '**Result**' for performance accessment




